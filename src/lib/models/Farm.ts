import mongoose from 'mongoose';

import { userSchema } from './User';

// Create the schema
export const farmSchema = new mongoose.Schema({
  name:  String,
  region: String,
  users: [ userSchema ],
});

// Create the actual model to use
export const Farm = mongoose.model('Farm', farmSchema);

// Export all the methods as a singleton to use with the user
export default {

  // Method to retreive a Farm by their id
  getByID: async (id: Number) => {
    return await Farm.findById(id).populate('users').exec();
  },

  getByUser: async (user) => {
    if (!mongoose.Types.ObjectId.isValid(user._id)) {
      return null;
    }
    
    return await Farm.find({ users: user._id });
  },

  // Create a new farm
  create: async ({ name, region }) => {
    const farm = new Farm({
      name,
      region,
    });

    await farm.save();

    return farm;
  },

  addUser: async (farm, user) => {
    if (!mongoose.Types.ObjectId.isValid(farm._id) || !mongoose.Types.ObjectId.isValid(user._id)) {
      return null;
    }

    farm.users.push(user._id);

    await farm.save();

    return farm;
  },

};

