import { IsString } from 'class-validator';

export class createBannerDto {
  @IsString()
  imageURL: string;
}
export default createBannerDto;
