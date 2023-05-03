import { v2 } from 'cloudinary';
export const CLOUDINARY = 'Cloudinary';

export const CloudinaryProvider = {
  provide: CLOUDINARY,
  useFactory: (): any => {
    return v2.config({
      cloud_name: 'dr3rpqkpb',
      api_key: '214927996856349',
      api_secret: '88IS_j-4wa166T7cwlEyFTmzGvA',
    });
  },
};
