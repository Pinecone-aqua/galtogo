import { v2 } from 'cloudinary';
export const CLOUDINARY = 'Cloudinary';

export const CloudinaryProvider = {
  provide: CLOUDINARY,
  useFactory: (): any => {
    return v2.config({
      cloud_name: process.env.CLOUDINARY_NAME,
      api_key: process.env.CLOUDINARY_API,
      api_secret: process.env.CLOUDINARY_API_SECRET,
    });
  },
};
