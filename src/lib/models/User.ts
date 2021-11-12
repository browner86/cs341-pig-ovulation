import bcrypt from 'bcrypt';
import mongoose from 'mongoose';
import { v4 as uuid } from 'uuid';

const saltRounds = 10;

// Create the schema
export const userSchema = new mongoose.Schema({
  email:         String,
  password:      String,
  isFarmOwner:   Boolean,
  sessionId:     String,
});

// Create the actual model to use
export const User = mongoose.model('User', userSchema);

// Export all the methods as a singleton to use with the user
export default {

  // Method to retreive a user by their id
  get: async (id: Number) => {
    return await User.findById(id).exec();
  },

  // Lookup the user with a sesionId
  getBySessionId: async (sessionId: String) => {
    return await User.findOne({ sessionId }).exec();
  },

  // Lookup a user by their email
  getByEmail: async (email: String) => {
    return await User.findOne({ email }).exec();
  },

  generateNewSessionId: async (user) => {
    // If we don't have a real user then bounce
    if (!user || !user._id || !mongoose.Types.ObjectId.isValid(user._id)) {
      return null;
    }

    // Generate a new random id
    const sessionId = uuid();

    // Update the user with it
    user.sessionId = sessionId;
    await user.save();

    // Return it so we can use it later
    return sessionId;
  },

  // Create a new user
  create: async ({ email, password, isFarmOwner = false }) => {
    const user = new User({
      email,
      isFarmOwner,
      // Hash the password we store
      password: await bcrypt.hash(password, saltRounds),
      sessionId: '',
    });

    await user.save();

    return user;
  },

  validatePassword: async (user, password: String) => {
    // If the user doesn't exist return false
    if (!user || !user._id || !mongoose.Types.ObjectId.isValid(user._id)) {
      return false;
    }

    console.log(`[Model][User][validatePassword] Testing ${user.email}'s password against: '${password}'`);

    return await bcrypt.compare(password, user.password);
  },

};

