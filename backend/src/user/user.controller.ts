import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserBody } from 'src/dtos/createUserBody';
import { Bcrypt } from 'src/utils/hash';
import { AuthService } from 'src/auth/auth.service';
import { SignInBody } from 'src/dtos/signInBody';
import { Public } from 'src/decorators/public.decorator';

@Controller('user')
export class UserController {
  constructor(
    private userService: UserService,
    private authService: AuthService,
  ) {}

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

  @Public()
  @Post('signin')
  async signin(@Body() body: SignInBody) {
    const { login, password } = body;
    const user = await this.authService.validateUser(login, password);
    if (!user) throw new BadRequestException('Incorrect login or password');

    return {
      id: user.id,
      login,
      token: await this.authService.generateToken({ id: user.id, login }),
    };
  }
}
