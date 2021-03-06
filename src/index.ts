import express from 'express';
import path from 'path';

//Importing routes
import IndexRoutes from './routes';
import BooksRoutes from './routes/books';

//Initialization
const app = express();
var exphbs = require('express-handlebars');
import './database';   

//Settings
app.set('port',process.env.PORT||3000);
app.set('views',path.join(__dirname,'views'));
app.engine('.hbs',exphbs.engine({
    extname: '.hbs',
    layoutsDir: path.join(app.get('views'),'layouts'),
    partialsDir: path.join(app.get('views'),'partials'),
    helpers: require('./lib/helpers'),
    defaultLayout: 'main'
}));
app.set('view engine','.hbs');

//Middlewares
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//Routes
app.use('/', IndexRoutes);
app.use('/books', BooksRoutes);

//Static Files
app.use(express.static(path.join(__dirname, 'public')));

//Starting the server
app.listen(app.get('port'),()=>{
    console.log('Server on port '+app.get('port'));
    
})




