import { IsString } from 'class-validator';

export class createCategoryDto {
  @IsString()
  category: string;
  @IsString()
  img: string;
}

export default createCategoryDto;
