const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const knex = require('knex')

const signin = require('./controllers/signin');
const profile = require('./controllers/profile');
const orders = require('./controllers/orders');
const auth = require('./controllers/authorization');

const db = knex({
  client: 'pg',
  connection: {
    connectionString : process.env.POSTGRES_URI, //URL when deployed
  	ssl: false, // true when deployed
  }
});

const app = express();
console.log('server is up and running')

app.use(cors())
app.use(bodyParser.json());

app.get('/', (req, res)=> { res.send('it is working!') })
app.post('/signin', signin.signinAuthentication(db, bcrypt))
app.post('/register', (req, res) => { register.registerWithToken(req, res, db, bcrypt) })
app.get('/profile/:id', auth.requireAuth, (req, res) => { profile.handleProfileGet(req, res, db)})
app.post('/profile/:id', auth.requireAuth, (req, res) => { profile.handleProfileUpdate(req, res, db)})
app.get('/orders/:isordercomplete', auth.requireAuth, (req, res) => { orders.handleOrdersGet(req, res, db)})
app.post('/orders/:ordernumber', auth.requireAuth, (req, res) => { orders.handleOrderUpdate(req, res, db)})
app.put('/orders/', (req, res) => { orders.handleOrderReset(req, res, db)})
app.put('/image', auth.requireAuth, (req, res) => {image.handleImage(req, res, db)})
app.post('/imageurl', auth.requireAuth, (req, res) => { image.handleApiCall(req, res)})

app.listen(process.env.PORT || 3000, ()=> {
	console.log(`app is running on port ${process.env.PORT}`);
})


/*
/ --> res = this is working
/signin --> POST  success/fail
/register --> POST = user
/profile/:userId -->  GET = user
/image --> PUT --> user

*/