// This just imports and exports from the files in this folder so we can
// treat the 'models' folder as a module and do stuff
// like       import { User } from '$lib/models'
// instead of import { User } from '$lib/models/User'

export { connectToDatabase } from './_connection';
export { default as Farm   } from './Farm';
export { default as Pig    } from './Pig';
export { default as User   } from './User';

