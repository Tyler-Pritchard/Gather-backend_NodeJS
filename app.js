const express = require('express')
const port = process.env.PORT || 8000
const app = express()
const cors = require('cors');
const morgan = require('morgan')
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(express.static('public'))
app.use(morgan('dev'));
app.use(cors());

/**
 * Routes
 */

const menuItemRoutes = require('./src/routes/routes.menuItems');
// const userRoutes = require('./src/routes/routes.users');
// const typeRoutes = require('./src/routes/routes.types');
// // const orderRoutes = require('./src/routes/orders');
// const menuItemOrderRoutes = require('./src/routes/routes.menuItemOrders');




/**
 * Set up Routes
 */

app.use('/menuItems', menuItemRoutes);
// app.use('/orders', orderRoutes);

/**
 * Open up port for application to be accessed
 */

app.listen(port, console.log(`successfully running backend on ${port}`))
// app.listen(process.env.PORT || 8000)
// app.listen( app.get( 'port' ), function() {
//   console.log( 'Node server is running on port ' + app.get( 'port' ));
//   });

//DELETE table for 'menuItems'
exports.down = function (knex, Promise) {
  return knex.schema.dropTable('menuItems')
};