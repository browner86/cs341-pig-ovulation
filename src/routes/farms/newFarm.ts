import { connectToDatabase, Farm } from '$lib/models/index';
import { errorMessage, successMessage } from '$lib/apiResponseHelpers';

export const post = async ({ body }) => {
	await connectToDatabase();

	const data = JSON.parse(body);

	//Validation
	if (!data.farmName) {
		return errorMessage('Farm name required.')
	}

	let farm  = await Farm.create({name: data.farmName, region: data.farmRegion});

	if (!farm) {
		return errorMessage('Faled to create a new farm!');
	}

	return successMessage('Farm Successfully created!')

}
