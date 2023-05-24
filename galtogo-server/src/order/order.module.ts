import { Module } from '@nestjs/common';
import { OrderController } from './order.controller';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '1h' },
    }),
  ],
  controllers: [OrderController],
  providers: [],
})
export class OrderModule {}
