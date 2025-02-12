use('brillio_books')

const fixes={
    "vivek-dutta-mishra":"https://m.media-amazon.com/images/S/amzn-author-media-prod/2fuqj5h433n56ucdr3s5j1k2j9._SY450_CR0%2C0%2C450%2C450_.jpg",
    "mahatma-gandhi":"https://pbs.twimg.com/profile_images/185517358/mahatmagandhi_400x400.jpg",
    "ramdhari-singh-dinkar":"https://www.prabhatkhabar.com/wp-content/uploads/2024/01/ramdhari-singh.jpg",
    "jeffrey-archer":"https://pbs.twimg.com/profile_images/3751745623/11bd5e198e1f0f7de40ffdf08f556293_400x400.jpeg",
    "john-grisham":"https://pbs.twimg.com/profile_images/1603812525270876163/qnx5yt5o_400x400.jpg",
    "alexandre-dumas":"https://cdn.vocabulary.com/units/h3ekjthk/author.jpg?width=400&v=176fc5c134d",
    "jk-rowling":"https://pbs.twimg.com/profile_images/1883231711762292736/g9rnxUNC_400x400.jpg",
    "dan-brown":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC-s1RIkupkEKvIv0z5zU2fC9t7irOXk-M307EhSJF4E5sGqiF7-vikxUfiPuBk_npUy8&usqp=CAU",
    "munshi-premchand":"https://pbs.twimg.com/profile_images/1251088697203679233/fdW0tbbO_400x400.jpg"
}


const updateAuthorImages=()=>{
    for(let id in fixes){
        db.authors.findOneAndUpdate({id},{
            $set:{
                photo: fixes[id]
            }
        })
    }
}


updateAuthorImages()


