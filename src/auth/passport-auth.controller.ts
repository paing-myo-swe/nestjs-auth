import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { PassportGuard } from './guard/passport.guard';
import { PassportJwtAuthGuard } from './guard/passport-jwt-auth.guard';

@Controller('passport-auth')
export class PassportAuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  @UseGuards(PassportGuard)
  async login(@Request() request) {
    return this.authService.signIn(request.user);
  }

  @Get('me')
  @UseGuards(PassportJwtAuthGuard)
  async me(@Request() request) {
    return this.authService.getUserInfo(request.user.userId);
  }
}
