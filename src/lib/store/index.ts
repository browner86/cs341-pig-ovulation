import { writable } from 'svelte/store';

export const initialAuthState = {
  loggedIn: false,
};

export const auth = writable({
  loggedIn: false,
});

export default {
  initialAuthState,
  auth,
};

