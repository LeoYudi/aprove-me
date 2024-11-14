import {
  BadRequestException,
  Body,
  Controller,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserBody } from 'src/dtos/createUserBody';
import { Bcrypt } from 'src/utils/hash';
import { LocalAuthGuard } from 'src/auth/local.guard';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('signup')
  async signUp(@Body() body: CreateUserBody) {
    const { login, password } = body;

    const userExists = await this.userService.findByLogin(login);

    if (userExists) throw new BadRequestException('Login already exists');

    const newUser = await this.userService.create({
      login,
      password: await Bcrypt.hash(password),
    });

    const { password: _, ...result } = newUser;

    return { user: result };
  }

  @UseGuards(LocalAuthGuard)
  @Post('signin')
  async signin(@Request() req) {
    return req.user;
  }
}
