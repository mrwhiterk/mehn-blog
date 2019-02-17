const {
  BlogPost
} = require('../models/BlogPost')

BlogPost.remove({})
  .then(_ => {
    BlogPost.insertMany([{
          title: "House Blog",
          content: "This is a long blog post about cars"
        },
        {
          title: "Plane Blog",
          content: "This is about planes"
        }
      ])
      .then(blogPosts => {
        console.log(blogPosts)
        process.exit()
      })
  })