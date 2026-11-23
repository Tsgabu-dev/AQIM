import {
  Injectable,
  UnauthorizedException,
  ForbiddenException,
} from '@nestjs/common';
import * as argon2 from 'argon2';
import { JwtService } from '@nestjs/jwt';

import {
  UsersService,
  UserProfile,
} from '../users/users.service';

import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  // USER REGISTRATION
  async register(dto: RegisterDto): Promise<UserProfile> {
    const passwordHash = await argon2.hash(dto.password, {
      type: argon2.argon2id,
    });

    return this.usersService.create({
      email: dto.email,
      name: dto.name,
      passwordHash,
    });
  }

  // USER LOGIN
  async login(dto: LoginDto) {
    const user = await this.usersService.findForAuthentication(dto.email);

    if (!user) {
      throw new UnauthorizedException('Invalid email or password');
    }

    if (user.status !== 'ACTIVE') {
      throw new ForbiddenException('Your account is not active');
    }

    const passwordIsValid = await argon2.verify(
      user.passwordHash,
      dto.password,
    );

    if (!passwordIsValid) {
      throw new UnauthorizedException('Invalid email or password');
    }

    const accessToken = await this.jwtService.signAsync({
      sub: user.id,
      email: user.email,
    });

    return {
      message: 'Login successful',
      accessToken,
      tokenType: 'Bearer',
    };
  }
}