const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const {body, validationResult} = require('express-validator');

const router = express.Router();

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String
});

const User = mongoose.model('User', userSchema);


router.get('/', async (req, res) => {
    const users = await User.find();
    const errors = validationResult(req);
    const datos = { name: "", email: "" }
    res.render('index', { users, errors: errors.array(), datos });
});

router.post('/', [
    body('name').notEmpty().withMessage('Tienes que poner un nombre'),
    body('email').isEmail().withMessage('El email debe ser válido'),
    body('password').optional()
        .isLength({ min: 6 }).withMessage('Contraseña mínimo de 4 caracteres')
        .matches(/^(?=.*\d)/).withMessage('Contraseña con un número al menos'),
], async (req, res) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
        const { name, email, password } = req.body
        const hash = await bcrypt.hash(password, 10);
        const newUser = new User({
            name, email, password: hash
        });
        await newUser.save();
        res.redirect('/users');
    }
    else {
        const users = await User.find();
        return res.render('index', { users, errors: errors.array(), datos: req.body });
    }
});

router.get('/edit/:id', async (req, res) => {
    const errors = validationResult(req);
    const user = await User.findById(req.params.id);
    res.render('partials/edit', { user, errors: errors.array()});
});

router.post('/update/:id', [
    body('name').notEmpty().withMessage('Tienes que poner un nombre'),
    body('email').isEmail().withMessage('El email debe ser válido'),
    body('password')
        .isLength({ min: 4 }).withMessage('Contraseña mínimo de 4 caracteres')
        .matches(/(?=.*\d)/).withMessage('Contraseña con un número al menos'),
], async (req, res) => {
    const { name, email, password } = req.body
    const errors = validationResult(req);
    const user = await User.findById(req.params.id);
    if (errors.isEmpty()) {

        const hash = await bcrypt.hash(password, 10);
        await User.findByIdAndUpdate(req.params.id, {
            name, email, password: hash
        });

        res.redirect('/users');
    }else{
        return res.render('partials/edit', { user, errors: errors.array() });
    }
});


router.get('/delete/:id', async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.redirect('/users');
});

module.exports = router;
