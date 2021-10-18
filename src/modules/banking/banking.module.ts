import { Module } from '@nestjs/common';
import { BankingService } from './banking.service';
import { BankingController } from './banking.controller';

@Module({
  controllers: [BankingController],
  providers: [BankingService]
})
export class BankingModule {}
