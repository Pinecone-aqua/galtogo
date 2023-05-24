import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TableModule } from './table/table.module';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ReservationModule } from './reservation/reservation.module';
import { CategoryModule } from './category/category.module';
import { ProductModule } from './product/product.module';
import { BannerModule } from './banner/banner.module';
import { DisabledDayModule } from './days/days.module';
import { OrderModule } from './order/order.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGODB_URL),
    TableModule,
    UserModule,
    ReservationModule,
    CategoryModule,
    ProductModule,
    BannerModule,
    DisabledDayModule,
    OrderModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
