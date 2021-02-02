const express = require('express');
const path = require('path');
const app = express();
const hbs = require('hbs');
const getWeather = require('./getWeather')

const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../private/views');
const partialsPath = path.join(__dirname, '../private/partials');

app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);
app.use(express.static(publicDirectoryPath));
debugger
 
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

app.get('/products', (req,res) => {
    if(!req.query.search){
        res.send({
            error:'Enter a search keyword.'
        })
    }
    console.log(req.query)
    const games = [
        {name:'GTA Vice City', rating:5, category:req.query.search},
        {name:'PUBG PC', rating:4.2, category:req.query.search},
        {name:'Call of Duty', rating:4, category:req.query.search}
    ]
    res.send(games);
})

app.get('/weather', (req,res) => {
    if(!req.query.location){
        res.send({
            error: 'Please enter a correct name of your location'
        })
    }
    getWeather(req.query.location, (error, response) => {
        if(!error){
            res.send(response)
        }else{
            res.send(response)
        }
    })
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