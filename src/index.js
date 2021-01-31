const express = require('express');
const path = require('path');
const app = express();
const hbs = require('hbs');

const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../private/views');
const partialsPath = path.join(__dirname, '../private/partials');

app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);
app.use(express.static(publicDirectoryPath));


app.get('', (req, res ) => {
    res.render('index', {
        title:'Weather App',
        name: 'Suzibur Rahman'
    })
})

app.get('/about', (req, res ) => {
    res.render('about',{
        title:'About Us',
        name: 'Suzibur Rahman'
    })
})

app.get('/help', (req, res ) => {
    res.render('help', {
        title:'Help',
        name: 'Suzibur Rahman'
    })
})

app.get('/info', (req,res) => {
    const info =  [
        {name:'Suzibur Rahman', age:22},
        {name:'Suzibur Rahman', age:22},
        {name:'Suzibur Rahman', age:22}
    ]
    res.send(info)
})

app.get('/help/*', (req, res) => {
    res.render('404', {
        title:'404',
        errorMessage:'Help article not found.'
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        title:'404',
        errorMessage:'Page not found.'
    })
})

app.listen(5000, () => {
    console.log('This is port 5000.')
});