import mongoose from 'mongoose';
import Post from './post.js';
import User from './user.js';


// SET UP Mongoose Promises.
mongoose.Promise = global.Promise;
mongoose.set('useCreateIndex', true);

export const startDB = () => {
	mongoose.connect(
		process.env.MONGODB_URI,
	  { useNewUrlParser: true }
	);
}

  
export const models = {
  Post,
  User,
}

