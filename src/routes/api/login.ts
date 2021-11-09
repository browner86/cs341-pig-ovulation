import store from '$lib/store';

export const post = async (req, resp) => {
  // @TODO validate username password
  console.log(req.body);

  // Update logged in to true
  store.auth.set({ ...store.auth, loggedIn: true });

  return {
    status: 200,
    body: {
      success: true,
    },
  };
};

