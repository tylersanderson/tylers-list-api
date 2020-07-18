const handleGigsGet = (req, res, db) => {
	const { isgigcomplete, gigassignedto } = req.params;
	db.select('*').from('gigs').where({isgigcomplete, gigassignedto})
		.then(gigs => {
			if(gigs.length) {
				res.json(gigs)
			} else {
				res.status(400).json('Not found')
			}
	})
	.catch(err => res.status(400).json('error getting gigs'))
}

const handleUnassignedGigsGet = (req, res, db) => {
  //const { isgigcomplete, gigassignedto } = req.params;
  const isgigcomplete = false;
  const gigassignedto = '0';
	db.select('*').from('gigs').where({isgigcomplete, gigassignedto})
		.then(gigs => {
			if(gigs.length) {
				res.json(gigs)
			} else {
				res.status(400).json('Not found')
			}
	})
	.catch(err => res.status(400).json('error getting gigs'))
}

const handleGigReassignUpdate = (req, res, db) => {
  const { gignumber, gigassignedto } = req.params;
	db('gigs')
		.where({ gignumber })
		.update({ gigassignedto })
		.then(resp => {
			if (resp) {
				res.json("success")
			} else {
				res.status(400).json('Unable to update')
			}
		})
		.catch(err => res.status(400).json('error updating gig'))
}

const handleGigCompleteUpdate = (req, res, db) => {
  const { gignumber } = req.params;
  const isgigcomplete = true;
	db('gigs')
		.where({ gignumber })
		.update({ isgigcomplete })
		.then(resp => {
			if (resp) {
				res.json("success")
			} else {
				res.status(400).json('Unable to update')
			}
		})
		.catch(err => res.status(400).json('error updating gig'))
}

const handleGigPost = (req, res, db) => {
	const { gigname, gigpay, street, city, stateabv, zipcode, gignotes, gigimage, gigpostedby } = req.body;
	const isgigcomplete = false;
	const gigassignedto = '0'
	if (!gigname || !gigpay || !street || !city || !stateabv || !zipcode || !gignotes || !gigpostedby) {
		return res.status(400).json('incorrect form submission');
	}
	return	db.transaction(trx => {
			trx.insert({
				gigname,
				gigpay,
				street,
				city,
				stateabv,
				zipcode,
				gignotes,
				gigimage,
				gigpostedby,
				isgigcomplete,
				gigassignedto
			})
			.into('gigs')
			.then(trx.commit)
			.then(resp => {
				if (resp) {
					res.json("success")
				} else {
					res.status(400).json('Unable to post gig')
				}
			})
			.catch(trx.rollback)
		})
		.catch(err => Promise.reject(400).json('unable to post gig'))
}

module.exports = {
  handleGigsGet,
  handleUnassignedGigsGet,
  handleGigReassignUpdate,
	handleGigCompleteUpdate,
	handleGigPost
}