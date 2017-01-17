var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test');

var Cat = mongoose.model('Cat', {
    name: String,
    friends: [String],
    age: Number
})

var kitty = new Cat({
    name: 'wangzhenghua',
    friends: ['yanjun', 'xuesong'],
});

kitty.age = 30;

kitty.save(function(err) {
    if(err){
        console.log('meow');
    }
});