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

@Module({
  imports: [
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
