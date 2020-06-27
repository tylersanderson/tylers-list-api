const redisClient = require('./signin').redisClient;
const createSessions = require('./signin').createSessions;

const handleRegister = (req, res, db, bcrypt) => {
	const { email, name, password } = req.body;
	if (!email || !name || !password) {
		return res.status(400).json('incorrect form submission');
	}
	const hash = bcrypt.hashSync(password);
	return	db.transaction(trx => {
			trx.insert({
				hash: hash,
				email: email
			})
			.into('login')
			.returning('email')
			.then(loginEmail => {
				return trx('users')
					.returning('*')
					.insert({
						email: loginEmail[0],
						name: name,	
						joined: new Date()
					})
					.then(user => user[0])
					.catch(err => Promise.reject('unable to insert user'))
			})
			.then(trx.commit)
			.catch(trx.rollback)
		})
		.catch(err => Promise.reject(400).json('unable to register'))
}

const registerWithToken = (req, res, db, bcrypt) => {
	handleRegister(req, res, db, bcrypt)
		.then(data => {
				return data.id && data.email ? createSessions(data) : Promise.reject(data)
			})
			.then(session => res.json(session))
			.catch(err => res.status(400).json(err))
}

module.exports = {
	registerWithToken: registerWithToken,
	// handleRegister: handleRegister
};