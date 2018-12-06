const express = require('express')
const port = process.env.PORT || 8000
// app.set( 'port', ( process.env.PORT || 5000 ));
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.json())
const cors = require('cors');
app.use(cors());

/**
 * Routes
 */

const menuItemRoutes = require('./src/routes/routes.menuItems');
const userRoutes = require('./src/routes/routes.users');
const typeRoutes = require('./src/routes/routes.types');
// const orderRoutes = require('./src/routes/orders');
const menuItemOrderRoutes = require('./src/routes/routes.menuItemOrders');




/**
 * Set up Routes
 */

app.use('/menuItems', menuItemRoutes);
app.use('/users', userRoutes);
app.use('/types', typeRoutes);
// app.use('/orders', orderRoutes);
app.use('/menuItemOrders', menuItemOrderRoutes);



 /**
  * Open up port for application to be accessed
  */

app.listen(port, console.log(`successfully running backend on ${port}`))
// app.listen(process.env.PORT || 8000)
// app.listen( app.get( 'port' ), function() {
//   console.log( 'Node server is running on port ' + app.get( 'port' ));
//   });
  
  //DELETE table for 'menuItems'
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable
    ('menuItems')
  };