var app = require('./server').app;
var User = require('./server').User;
var port = 3000;

User.sync({ force: true })
  .then(function () {
    console.log('Users table created');
    return User.create({ username: 'zlester' });
  })
  .then(function() {
    console.log('Seeded User table');
    app.listen(port, function() {
      console.log('node-express-sequelize listening on ' + port);
    });
  });
router.get('/users',function (req,res){
  User.findAll({include:[User.username]}).then(function(err,data){
    if(err){
      res.end(404,console.log('connot find dat'));
    }
    else{
      res.end(data);
    }
    
  });
});