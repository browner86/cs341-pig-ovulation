import * as cookie from 'cookie';

export const post = async () => {
  return {
    status: 200,
    // Wipe out our cookie
    headers: {
      'Set-Cookie': cookie.serialize(
        'sessionId',
        'logged-out',
        {
          httpOnly: true,
          maxAge: 1, // Cookie lasts a week
          path: '/',
          sameSite: 'strict',
          
        },
      ),
    },
    body: {
      success: true,
      message: 'Logged out successfully!',
    },
  };
}

