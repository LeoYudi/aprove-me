import { IsEmail, IsOptional, MaxLength } from 'class-validator';

export class UpdateAssignorBody {
  @IsOptional()
  @MaxLength(30, {
    message: 'Field `document` must be shorter than 30 characters',
  })
  document?: string;

  @IsOptional()
  @MaxLength(140, {
    message: 'Field `email` must be shorter than 140 characters',
  })
  @IsEmail(undefined, {
    message: 'Field `email` is invalid',
  })
  email?: string;

  @IsOptional()
  @MaxLength(20, {
    message: 'Field `phone` must be shorter than 20 characters',
  })
  phone?: string;

  @IsOptional()
  @MaxLength(140, {
    message: 'Field `name` must be shorter than 140 characters',
  })
  name?: string;
}
