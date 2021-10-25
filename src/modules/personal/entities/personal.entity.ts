import { ApiProperty } from "@nestjs/swagger";

export class Personal {
    @ApiProperty({name: 'full_name_english', description: 'full_name_english', nullable: false})
    full_name_english: string;
  
    @ApiProperty({name: 'full_name_arabic', description: 'full_name_arabic', nullable: false})
    full_name_arabic: string;

    @ApiProperty({name: 'country', description: 'country', nullable: false})
    country: string;
  
    @ApiProperty({name: 'city', description: 'city', nullable: false})
    city: string;

}
