import { IsNumber, IsString } from 'class-validator';

export class CreateProductDto {
  @IsString()
  readonly name: string;
  @IsString()
  readonly image: string;
  @IsString()
  readonly category: string;
  @IsNumber()
  readonly price: number;
}
