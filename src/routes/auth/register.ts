import { connectToDatabase, User } from '$lib/models';
import { errorMessage, successMessage } from '$lib/apiResponseHelpers';

export const post = async ({ body }) => {
  // Ensure we have a database connection
  await connectToDatabase();

  const data = JSON.parse(body);

  // Validate the post data a little bit
  if (data.email === undefined || data.email.length <= 0) {
    return errorMessage('Email required.');
  }

  if (data.password === undefined || data.password.length <= 0) {
    return errorMessage('Password required.');
  }

  if (data.password1 === undefined || data.password1.length <= 0) {
    return errorMessage('Password required.');
  }

  if (data.password !== data.password1) {
    return errorMessage('Passwords do not match.');
  }

  // Attempt to find the user by their email
  let user = await User.getByEmail(data.email);

  if (user !== null) {
    return errorMessage('That email is already in use!');
  }

  // See if the passwords don't match
  user = await User.create({ email: data.email, password: data.password });

  if (user === null) {
    return errorMessage('Failed to create a new user!');
  }

  return successMessage('Succesfully registered!');
};




