import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Account } from './entities/account.entity';

export type AccountDocument = Account & Document;

@Schema()
export class Accounts extends Document {
  @Prop({ type: String,unique: true, immutable: true })
  national_id: string;

  // @Prop({ type: Date, default: Date.now })
  // created_at: Date;
}

export const AccountSchema = SchemaFactory.createForClass(Accounts);
