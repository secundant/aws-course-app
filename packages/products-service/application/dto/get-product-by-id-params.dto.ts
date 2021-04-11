import { Expose } from 'class-transformer';
import { IsString } from 'class-validator';

@Expose()
export class GetProductByIdParamsDto {
  @IsString()
  productId: string;
}
