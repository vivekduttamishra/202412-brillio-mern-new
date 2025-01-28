const mongoose = require('mongoose');

const movieSchema = mongoose.Schema({
    id:{
        type:String,
        required: true,
        unique: true
    },
    title: {
        type: String,
        required: true
    },
    genre: { type: String, required: true},
    actors:[String]

});

//pre validate schema  and generate id

movieSchema.pre('validate', function(next){
    if(!this.id && this.title){
        this.id = this.title.toLowerCase().split(' ').join('-');
    }
    next();
});

const Movie = mongoose.model("Movie",movieSchema,"movies");

module.exports=Movie;