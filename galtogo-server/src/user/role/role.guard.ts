import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { Observable } from 'rxjs';

@Injectable()
export class CheckRoleGuard implements CanActivate {
  constructor(
    private readonly jwtService: JwtService,
    private reflector: Reflector,
  ) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    // console.log('context: ', context);
    const request = context.switchToHttp().getRequest();
    console.log('req: ', request);
    const token = this.extractTokenFromHeader(request);
    console.log('guard token: ', token);
    if (!token) {
      return false;
    }
    const decodedToken = this.jwtService.decode(token);
    console.log('decodedToken:', decodedToken);
    if (!decodedToken) {
      return false;
    }

    const requiredRoles = this.reflector.get<string[]>(
      'roles',
      context.getHandler(),
    );

    console.log('requiredRoles:', requiredRoles);
    if (!requiredRoles) {
      return true;
    }

    if (!requiredRoles.includes(decodedToken['role'])) {
      return false;
    }

    return true;
  }

  private extractTokenFromHeader(request: Request): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    console.log('extracted token: ', token);
    return type === 'Bearer' ? token : undefined;
  }
}
