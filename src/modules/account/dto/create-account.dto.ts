import { Prop } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateAccountDto {

    @ApiProperty({name: 'national_id', nullable: false, description: 'the scanned id card National ID', uniqueItems: true})
    @IsNotEmpty()
    @IsString()
    readonly national_id: string;


    // @ApiProperty({name: 'created_at', nullable: false, description: 'created time-date, or to record attempt', uniqueItems: true})
    // @IsNotEmpty()
    // @Prop({default: Date.now()})
    // readonly created_at: Date;
}
