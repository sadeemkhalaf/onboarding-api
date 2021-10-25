import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';
import { Personal } from './entities/personal.entity';

export type PersonalDocument = Personal & Document;

@Schema()
export class PersonalDetails extends Document {

  @Prop({ type: String, immutable: true })
  @ApiProperty({
    name: 'full_name_english',
    description: 'full_name_english',
    nullable: false,
  })
  full_name_english: string;

  @Prop({ type: String, immutable: true })
  @ApiProperty({
    name: 'full_name_arabic',
    description: 'full_name_arabic',
    nullable: false,
  })
  full_name_arabic: string;

  @Prop({ type: String, immutable: true })
  @ApiProperty({ name: 'country', description: 'country', nullable: false })
  country: string;

  @Prop({ type: String, immutable: true })
  @ApiProperty({ name: 'city', description: 'city', nullable: false })
  city: string;
}

export const PersonalSchema = SchemaFactory.createForClass(PersonalDetails);
