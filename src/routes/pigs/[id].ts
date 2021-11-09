// import PigModel from '$models/pig.ts';

export const get = async (req, resp) => {
  // const pig = await PigModel.get(req.params.id);

  console.log(req.params);

	return {
		status: 200,
		body: {
			farms: [ `pig ${req.params.id}` ],
		},
	};
};
