import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class CreateAccountDto {

    @ApiProperty({name: 'national_id', nullable: false, description: 'the scanned id card National ID', uniqueItems: true})
    @IsNotEmpty()
    readonly national_id: string;


    @ApiProperty({name: 'created_at', nullable: false, description: 'created time-date, or to record attempt', uniqueItems: true})
    @IsNotEmpty()
    readonly created_at: Date;

}
