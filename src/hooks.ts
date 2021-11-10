import cookie from 'cookie';
import type { Handle } from '@sveltejs/kit';

import { connectToDatabase, User } from '$lib/models';

export const handle: Handle = async ({ request, resolve }) => {
	// Ensure that each request has the database setup
	await connectToDatabase();

	// Get our cookies and pull out the sessionId if we have one, otherwise generate one
	const cookies = cookie.parse(request.headers.cookie || '');

	// If we have a sesion attempt to lookup the user
	if (cookies.sessionId) {
		const user = await User.getBySessionId(cookies.sessionId);

		// If we found a user for that sessionId save it to the locals for all our pages to use
		if (user) {
			request.locals.user = user;
		}
	}

	// Here we just make sure that any method request comes in all uppercase to prevent issues
	// See: https://github.com/sveltejs/kit/issues/1046
	if (request.query.has('_method')) {
		request.method = request.query.get('_method').toUpperCase();
	}

	// Here we run the request through the router (routes/...)
	const response = await resolve(request);

	return response;
};


// This function helps create the `session` object that we use throughout our pages
// Essentially right now all we're doing is looking for a user or not
// Read here for more https://kit.svelte.dev/docs#hooks-getsession
export const getSession = async (req) => {
	// The JSON nastyness is because _id is a weird object that we can't
	// store in the session. So we need it to be a real string. Tried a few
	// different ways to do this and this is the simplest.
	return req.locals?.user
		? { user: JSON.parse(JSON.stringify(req.locals.user)) }
		: {};
};

