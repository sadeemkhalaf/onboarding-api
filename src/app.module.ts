import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AccountModule } from './modules/account/account.module';
import { AddressModule } from './modules/address/address.module';
import { AttachmentModule } from './modules/attachment/attachment.module';
import { BankingModule } from './modules/banking/banking.module';
import { LoggerModule } from './modules/logger/logger.module';
import { PersonalModule } from './modules/personal/personal.module';
import { ProfessionModule } from './modules/profession/profession.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from './configs/config.module';
import { ConfigService } from './configs/config.service';

// Todo: move connexction string to env.
@Module({
  imports: [
    ConfigModule,
    MongooseModule.forRootAsync({
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) =>
        configService.getMongoConfig(),
    }),
    AccountModule,
    PersonalModule,
    BankingModule,
    ProfessionModule,
    AddressModule,
    AttachmentModule,
    LoggerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
