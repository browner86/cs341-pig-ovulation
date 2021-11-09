import store from '$lib/store'; // stores related to app state, auth state
import type { LoadInput, LoadOutput } from '@sveltejs/kit/types.internal';

// @TODO we need a better way of storing logged-in-ness. Perhaps with the cookie?

// Create the auth that we'll use here in the guard as the initial state
let auth = { ...store.initialAuthState };

// If the auth store is changed from elsewhere, update our auth variable here
store.auth.subscribe(authState => auth = authState);

// const rootPath = '/todos';
const loginPath = '/login';

const whiteListedPaths = [
  '/',
  '/login',
];

export const redirectToLoginResponse = { status: 302, redirect: loginPath };

// Actual guard function
export async function userNeedsToLogin({ page }: LoadInput): Promise<LoadOutput> {
  // Check the auth for logged-in-ness
  const loggedIn = auth.loggedIn;

  console.log(`[guards][authGuard] Current path: ${page.path}`);
  console.log(`[guards][authGuard] User is ${loggedIn ? 'logged in' : 'not logged in'}.`);
  console.log(`[guards][authGuard] Path: '${page.path}' is ${whiteListedPaths.includes(page.path) ? '' : 'not '}in whiteListedPaths.`);

  // If we're logged in we don't need to login
  if (loggedIn === true) {
    console.log(`[guards][authGuard] User logged in. Allowing through.`);
    return false;
  }

  // If we're not logged in and on a whitelisted path allow entry
  if (whiteListedPaths.includes(page.path)) {
    console.log(`[guards][authGuard] Whitelisted Route. Allowing through.`);
    return false;
  }

  // If we're not logged in then send the user to the login page
  console.log(`[guards][authGuard] Redirecting to loginPath.`);
  return true;
}

// Export the function fo use later
export default {
  redirectToLoginResponse,
  userNeedsToLogin,
};

