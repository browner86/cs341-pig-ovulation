// import FarmModel from '$models/farm.ts';

export const get = async (req, resp) => {

	return {
		status: 200,
		body: {
			farms: [ 'Bilbo', 'Gandalf' ],
		},
	};
};
