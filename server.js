const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const knex = require('knex')

const register = require('./controllers/register');
const signin = require('./controllers/signin');
const profile = require('./controllers/profile');
const auth = require('./controllers/authorization');
const gigs = require('./controllers/gigs');

const db = knex({
  client: 'pg',
  connection: {
    connectionString: process.env.DATABASE_URL, //DATABASE_URL when deployed, POSTGRES_URI in dev
  	ssl: true
  }
});

const app = express();
console.log('server is up and running')

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res)=> { res.send('it is working!') })
app.post('/signin', signin.signinAuthentication(db, bcrypt))
app.post('/register', (req, res) => { register.registerWithToken(req, res, db, bcrypt) })
app.get('/profile/:id', auth.requireAuth, (req, res) => { profile.handleProfileGet(req, res, db)})
app.post('/profile/:id', auth.requireAuth, (req, res) => { profile.handleProfileUpdate(req, res, db)})
app.get('/profile/name/:id', (req, res) => { profile.handleProfileNameGet(req, res, db)})
app.get('/gigs/:isgigcomplete/:gigassignedto', auth.requireAuth, (req, res) => { gigs.handleGigsGet(req, res, db)})
app.get('/gigs/all/postedby/:gigpostedby', auth.requireAuth, (req, res) => { gigs.handleGigsPostedByGet(req, res, db)})
app.get('/gigsunassigned', (req, res) => { gigs.handleUnassignedGigsGet(req, res, db)})
app.put('/gigs/gigreassign/:gignumber/:gigassignedto', auth.requireAuth, (req, res) => { gigs.handleGigReassignUpdate(req, res, db)})
app.put('/gigs/gigcomplete/:gignumber', auth.requireAuth, (req, res) => { gigs.handleGigCompleteUpdate(req, res, db)})
app.post('/gigs', auth.requireAuth, (req, res) => { gigs.handleGigPost(req, res, db)})

app.listen(process.env.PORT || 3000, ()=> {
	console.log(`app is running on port ${process.env.PORT}`);
})