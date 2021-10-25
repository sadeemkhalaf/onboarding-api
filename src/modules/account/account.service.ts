import {
  Inject,
  Injectable,
  InternalServerErrorException,
  ConflictException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Schema as MongooseSchema } from 'mongoose';
import { AccountDocument } from './account.schema';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
import { Account } from './entities/account.entity';

@Injectable()
export class AccountService {
  constructor(
    @InjectModel(Account.name) private AccountModel: Model<AccountDocument>,
  ) {}

  async create(createAccountDto: CreateAccountDto) {
    try {
      const account = await this.AccountModel.find().exec();
      const found = account.find(
        (acc) => acc.national_id === createAccountDto.national_id,
      );

      if (!found) {
        const newAccount = new this.AccountModel({
          national_id: createAccountDto.national_id,
        });
        return newAccount.save();
      } else {
        throw new ConflictException(
          `user with national id: ${createAccountDto.national_id} is already existed`,
        );
      }
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async findAll(): Promise<Account[]> {
    try {
      return this.AccountModel.find().exec();
    } catch (error) {
      return error;
    }
  }

  async findOne(national_id: string): Promise<Account> {
    try {
      const account: Account = await this.AccountModel.findOne({
        national_id,
      }).exec();
      return account;
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async update(
    id: MongooseSchema.Types.ObjectId,
    updateAccountDto: UpdateAccountDto,
  ) {
    try {
      const found = this.AccountModel.findById(id);
      if (found) {
        const actualDate = new Date();
        actualDate.toUTCString();

        const updateData = new this.AccountModel({
          ...updateAccountDto,
          updatedAt: actualDate,
        });
        const account = await this.AccountModel.findOneAndUpdate(
          { _id: id },
          updateData,
          {
            new: true,
          },
        ).exec();
        return account;
      } else {
        return {};
      }
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async remove(id: string) {
    try {
      const found = this.AccountModel.findById(id);
      if (found) {
        const account: Account = await this.AccountModel.findByIdAndDelete({
          _id: id,
        }).exec();
        return account;
      } else {
        return {};
      }
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }
}
