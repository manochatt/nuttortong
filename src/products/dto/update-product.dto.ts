import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateProductDto {
  @IsString()
  @IsOptional()
  readonly name?: string;
  @IsString()
  @IsOptional()
  readonly image?: string;
  @IsString()
  @IsOptional()
  readonly category?: string;
  @IsNumber()
  @IsOptional()
  readonly price?: number;
}
