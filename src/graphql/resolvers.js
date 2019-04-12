export default {
  Query: {
    posts: async (parent, args, { models }) => {
      const Posts = await models.Post.find({});
      console.log(Posts);
      return Posts;
    },
    users: async (parent, args, { models }) => {
      const Users = await models.User.find({});
      console.log(Users);
      return Users;
    },
  },
  Mutation: {
    createPost: async (parent, { title, desc, author }, { models }) => {
      const Post = await models.Post.findOne({ title });

      if (Post) {
        throw new Error('Please provide a unique title.');        
      }
      
      // create a new post
      const newPost = new models.Post({
        title,
        desc,
        author
      });

      // save the post
      try {
        await newPost.save();
      } catch (e) {
        throw new Error('Cannot Save Post!!!');
      }

      return true;
    },
    createUser: async (parent, { id, name, email }, { models }) => {
      const Users = await models.User.find({});
      id = Users.length;
      id++;
      // create a new user
      const newUser = new models.User({
        id,
        name,
        email
      });

      console.log(newUser);
      // save the post
      try {
        await newUser.save();
      } catch (e) {
        throw new Error('Cannot Save User!!!');
      }

      return true;
    },
  },
};