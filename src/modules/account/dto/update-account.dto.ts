import { PartialType } from '@nestjs/mapped-types';
import { Prop } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { CreateAccountDto } from './create-account.dto';

export class UpdateAccountDto extends PartialType(CreateAccountDto) {
    @ApiProperty({name: 'national_id', nullable: false, description: 'the scanned id card National ID', uniqueItems: true})
    @IsNotEmpty()
    @IsString()
    readonly national_id: string;


    // @ApiProperty({name: 'updated_at', nullable: false, description: 'updated time-date, or to record attempt', uniqueItems: true})
    // @IsNotEmpty()
    // @Prop({default: Date.now()})
    // readonly updated_at: Date;

}
