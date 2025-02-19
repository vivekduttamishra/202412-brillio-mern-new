require('dotenv').config();
const mongoose = require('mongoose');
const {SeederService} = require('./seeder.service')





async function main(){
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');
    const seeder = new SeederService();
    let newReviews=await seeder.seedReview(10);
    console.log('Newly created reviews:', newReviews);
    await mongoose.disconnect();

}

main();

