
import { ApiProperty } from '@nestjs/swagger';

export class Account {

  // @ApiProperty({name: '_id', description: 'account id', nullable: false})
  // _id: any;

  @ApiProperty({name: 'national_id', description: 'national_id', nullable: false})
  national_id: string;

  // @ApiProperty({name: 'created at', description: 'created_at', nullable: false})
  // created_at: number;

  constructor() {}
}
