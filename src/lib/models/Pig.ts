import mongoose from 'mongoose';

// Create the schema

export const PigSchema = new mongoose.Schema({
  name: string,
  img: string,
  birthDate: string,
  breed: string,
  description: string,
  farmId: Number,
});

// Create the actual model to use
export const Pig = mongoose.model('Pig', pigSchema);

// Export all the methods as a singleton to use with the user
export default {

  // Method to retreive a Pig by their id
  getByID: async (id: Number) => {
    return await Pig.findById(id).exec();
  },

  // Lookup the user with a sesionId
  getByFarmId: async (farmId: Number) => {
    return await Pig.find({ farmId }).exec();
  },

  // Create a new user
  create: async ({ name, img, birthDate, breed, description, farmId }) => {
    const pig = new Pig({
      name,
      img,
      birthDate,
      breed,
      description,
      farmId
    });

    await pig.save();

    return pig;
  },

};