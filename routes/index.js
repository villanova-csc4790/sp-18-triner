import express from 'express';

const router = express.Router();

//Get home page
router.get('/home', (req, res) => {
	res.render('index');
});

router.get('/list', (req, res) =>{
	res.render('list');
})

router.get('/login', (req, res) =>{
	res.render('login');
})

router.get('/yourlist', (req, res) =>{
	res.render('yourlist');
})

export default router;