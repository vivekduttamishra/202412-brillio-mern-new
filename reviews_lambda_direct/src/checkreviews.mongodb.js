use('brillio_books')

// Find a document in a collection.
db.books.aggregate([

   
    {
        $project:{
        title:1,
        _id:1,
        reviewCount:{$size:"$reviews"}
    }},
    {
        $sort:{reviewCount:-1}
    }

]);
