import { Module } from '@nestjs/common';
import { PersonalService } from './personal.service';
import { PersonalController } from './personal.controller';
import { PersonalSchema } from './personal.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { Personal } from './entities/personal.entity';

@Module({
  imports: [MongooseModule.forFeature([{ name: Personal.name, schema: PersonalSchema, collection: 'account' }])],
  controllers: [PersonalController],
  providers: [PersonalService]
})
export class PersonalModule {}
