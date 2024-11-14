import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { Bcrypt } from 'src/utils/hash';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  async validateUser(login: string, password: string) {
    const user = await this.userService.findByLogin(login);

    if (!user) return null;

    const { password: hash, ...result } = user;

    const verified = await Bcrypt.compare(password, hash);
    if (!verified) return null;

    return { user: result };
  }
}
