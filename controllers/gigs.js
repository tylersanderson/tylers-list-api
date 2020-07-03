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

module.exports = {
  handleGigsGet,
  handleUnassignedGigsGet
}