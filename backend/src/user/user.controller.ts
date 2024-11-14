import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserBody } from 'src/dtos/createUserBody';
import { Bcrypt } from 'src/utils/hash';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('signup')
  async signup(@Body() body: CreateUserBody) {
    const { login, password } = body;

    const userExists = await this.userService.findByLogin(login);

    if (userExists) throw new BadRequestException('Login already exists');

    const newUser = await this.userService.create({
      login,
      password: await Bcrypt.hash(password),
    });

    return { user: newUser };
  }
}
