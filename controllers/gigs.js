const handleGigsGet = (req, res, db) => {
	const { isgigcomplete } = req.params;
	db.select('*').from('gigs').where({isgigcomplete})
		.then(gigs => {
			if(gigs.length) {
				res.json(gigs)
			} else {
				res.status(400).json('Not found')
			}
	})
	.catch(err => res.status(400).json('error getting gigs'))
}


module.exports = {
	handleGigsGet
}