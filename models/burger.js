// import `orm.js` into `burger.js`

var orm = require('../config/orms.js');

/* The following commands will run every time the app gets started.*/

//Find all the burgers
//JUST FOR YOUR REFERENCE: selectAll(table)
orm.selectAll('burgers');
//the above query does this:
//SELECT * FROM burgers;

//Find a pet in the pets table by an animal_name of Rachel
//JUST FOR YOUR REFERENCE: selectWhere(tableInput, colToSearch, valOfCol)
//orm.insertOne('burgers', 'animal_name', 'Rachel');
//the above query does this:
//SELECT * FROM pets WHERE animal_name = Rachel;

//Find the buyer with the most pets
//JUST FOR YOUR REFERENCE: findWhoHasMost(tableOneCol, tableTwoForeignKey, tableOne, tableTwo)
//orm.updateOne('burgers', 'buyer_id', 'buyers', 'pets');
//the above query does this:

