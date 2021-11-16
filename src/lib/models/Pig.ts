
import mongoose from 'mongoose';
import { v4 as uuid } from 'uuid';

// Create the schema
export const pigSchema = new mongoose.Schema({
    name:   String,
    description: String,
    breed: String,
    dob: Date,
  });
  
  // Create the actual model to use
export const Pig = mongoose.model('Pig', pigSchema);
// Export all the methods as a singleton to use with the user
export default {
      // Method to retreive a pig by id
  get: async (id: Number) => {
    return await Pig.findById(id).exec();
  },

  
  // Create a new pig
  create: async ({ name, description ='', breed ='', dob }) => {
    const pig = new Pig({
      name,
      description,
      breed,
      dob,
    });

    await pig.save();

    return pig;
  },
}