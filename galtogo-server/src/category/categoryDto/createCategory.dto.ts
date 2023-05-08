import { IsString } from 'class-validator';

export class createCategoryDto {
  @IsString()
  name: string;
  @IsString()
  img: string;
}

export default createCategoryDto;
