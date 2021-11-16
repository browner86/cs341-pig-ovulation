import { Farm } from '$lib/models';
import { userNeedsToLogin } from '$lib/guards';

export const get = async (req, res) => {
	if (await userNeedsToLogin({ page: { path: '/farms/getfarms' }, session: req.locals })) {
    console.log('[getfarms.ts] Redirect to login');
    return {
      status: 302,
      redirect: '/login',
    };
  }

  return {
    status: 200,
    body: {
      farms: await Farm.getByUser(req.locals.user),
    }
  }
}

