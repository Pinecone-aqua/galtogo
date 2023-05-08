import { IsString } from 'class-validator';

export class CreateProductDto {
  @IsString()
  img: string;
  @IsString()
  title: string;
  @IsString()
  desc: string;
  @IsString()
  price: string;
  @IsString()
  category: string;
}

export default CreateProductDto;
