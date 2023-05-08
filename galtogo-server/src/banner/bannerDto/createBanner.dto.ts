import { IsString } from 'class-validator';

export class createBannerDto {
  @IsString()
  img: string;
}
export default createBannerDto;
