import { IsOptional } from 'class-validator';

export class UpdatePayableBody {
  @IsOptional()
  value?: number;

  @IsOptional()
  emissionDate?: Date;

  @IsOptional()
  assignorId?: string;
}
