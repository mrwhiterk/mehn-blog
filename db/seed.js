const BlogPost = require("../models/BlogPost");

BlogPost.find({}).remove(() => {
  Promise.all([
    BlogPost.create({
      title: "Car Blog",
      content: "This is a long blog post about cars"
    }).then(post => {
      blogPosts.push(blogPost);
    }),

    BlogPost.create({
      title: "Plane Blog",
      content: "This is about planes"
    }).then(post => {
      blogPosts.push(blogPost);
    })

  ]).then(() => {
    blogPosts.save(err => console.log(err))
  })
})