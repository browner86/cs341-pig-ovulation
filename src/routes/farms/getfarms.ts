import { Farm } from '$lib/models';
import { userNeedsToLogin } from '$lib/guards';

export const get = async (req, res) => {
  // Verify the user is logged in otherwise move on
	if (await userNeedsToLogin({
    // We have to kind of jankily pass the path we're on here. Not sure if there's
    // a more dynamic way to do this right now
    page: { path: '/farms/getfarms' },
    session: req.locals
  })) {
    // Here we re-direct to the login page if the user isn't authorized
    return {
      status: 302,
      headers: {
        location: '/login'
      },
    };
  }

  return {
    status: 200,
    body: {
      farms: await Farm.getByUser(req.locals.user),
    },
  };
}

