import { IsEmail, IsNotEmpty, MaxLength } from 'class-validator';

export class CreateInvitationDto {
  @IsEmail()
  @IsNotEmpty()
  @MaxLength(254)
  email: string;
}