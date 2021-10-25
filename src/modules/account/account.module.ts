import { Module } from '@nestjs/common';
import { AccountService } from './account.service';
import { AccountController } from './account.controller';
import { AccountSchema } from './account.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { Account } from './entities/account.entity';

@Module({
  imports: [MongooseModule.forFeature([{ name: Account.name, schema: AccountSchema, collection: 'account' }])],
  controllers: [AccountController],
  providers: [AccountService]
})
export class AccountModule {}
