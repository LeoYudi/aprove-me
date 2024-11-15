import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import { Bcrypt } from 'src/utils/hash';

type TokenPayloadType = {
  id: string;
  login: string;
};

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(login: string, password: string) {
    const user = await this.userService.findByLogin(login);

    if (!user) return null;

    const { password: hash, ...result } = user;

    const verified = await Bcrypt.compare(password, hash);
    if (!verified) return null;

    return result;
  }

  async generateToken(payload: TokenPayloadType) {
    return this.jwtService.sign(payload);
  }
}
