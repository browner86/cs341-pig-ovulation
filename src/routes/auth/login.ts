import * as cookie from 'cookie';

import { connectToDatabase, User } from '$lib/models';
import { errorMessage } from '$lib/apiResponseHelpers';

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

  // Attempt to find the user by their email
  const user = await User.getByEmail(data.email);

  if (user === null) {
    return errorMessage('No user found for that email.');
  }

  // See if the passwords don't match
  if (!await User.validatePassword(user, data.password)) {
    return errorMessage('Bad password.');
  }

  const sessionId = await User.generateNewSessionId(user);

  return {
    status: 200,
    headers: {
      'Set-Cookie': cookie.serialize(
        'sessionId',
        sessionId,
        {
          httpOnly: true,
          maxAge: 60 * 60 * 24 * 7, // Cookie lasts a week
          path: '/',
          sameSite: 'strict',
        },
      ),
    },
    body: {
      success: true,
      message: 'Logged in successfully!',
    },
  };
};




