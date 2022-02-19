"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
//Importing routes
const routes_1 = __importDefault(require("./routes"));
const books_1 = __importDefault(require("./routes/books"));
//Initialization
const app = (0, express_1.default)();
var exphbs = require('express-handlebars');
require("./database");
//Settings
app.set('port', process.env.PORT || 3000);
app.set('views', path_1.default.join(__dirname, 'views'));
app.engine('.hbs', exphbs.engine({
    extname: '.hbs',
    layoutsDir: path_1.default.join(app.get('views'), 'layouts'),
    partialsDir: path_1.default.join(app.get('views'), 'partials'),
    helpers: require('./lib/helpers'),
    defaultLayout: 'main'
}));
app.set('view engine', '.hbs');
//Middlewares
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
//Routes
app.use('/', routes_1.default);
app.use('/books', books_1.default);
//Static Files
app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
//Starting the server
app.listen(app.get('port'), () => {
    console.log('Server on port ' + app.get('port'));
});
