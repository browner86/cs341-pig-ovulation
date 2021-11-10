// const rootPath = '/todos';
const loginPath = '/login';

const whiteListedPaths = [
  '/',
  '/login',
  '/register',
];

export const redirectToLoginResponse = { status: 302, redirect: loginPath };

// Actual guard function
export async function userNeedsToLogin({ page, session }) {
  // Check the auth for logged-in-ness
  const loggedIn = session !== null && session.user !== null && session.user !== undefined;
  console.log(session.user);

  // console.log(`[guards][authGuard] Current path: ${page.path}`);
  // console.log(`[guards][authGuard] User is ${loggedIn ? 'logged in' : 'not logged in'}.`);
  // console.log(`[guards][authGuard] Path: '${page.path}' is ${whiteListedPaths.includes(page.path) ? '' : 'not '}in whiteListedPaths.`);

  // If we're logged in we don't need to login
  if (loggedIn === true) {
    // console.log(`[guards][authGuard] User logged in. Allowing through.`);
    return false;
  }

  // If we're not logged in and on a whitelisted path allow entry
  if (whiteListedPaths.includes(page.path)) {
    // console.log(`[guards][authGuard] Whitelisted Route. Allowing through.`);
    return false;
  }

  // If we're not logged in then send the user to the login page
  // console.log(`[guards][authGuard] Redirecting to loginPath.`);
  return true;
}

// Export the function fo use later
export default {
  redirectToLoginResponse,
  userNeedsToLogin,
};

