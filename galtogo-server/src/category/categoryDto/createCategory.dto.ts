import { IsString } from 'class-validator';

export class createCategoryDto {
  @IsString()
  category: string;
}

export default createCategoryDto;
