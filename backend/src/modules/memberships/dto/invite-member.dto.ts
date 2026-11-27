
import {
  IsEmail,
  IsNotEmpty,
  MaxLength,
} from 'class-validator';

export class InviteMemberDto {
  @IsEmail()
  @IsNotEmpty()
  @MaxLength(254)
  email: string;
}
