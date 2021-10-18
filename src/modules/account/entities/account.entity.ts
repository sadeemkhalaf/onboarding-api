import { Entity, Generated, PrimaryColumn, PrimaryGeneratedColumn, Unique } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity({})
export class Account {
  @ApiProperty({name: 'uuid', description: 'account_id', nullable: false})
  @PrimaryGeneratedColumn('rowid', { name: 'UUID' })
  account_id: string;

  @ApiProperty({name: 'national_id', description: 'national_id', nullable: false})
  @PrimaryColumn()
  national_id: string;

  @ApiProperty({name: 'created at', description: 'created_at', nullable: false})
  created_at: number;

  constructor(partial: Partial<Account>) {
      if(partial) {
          Object.assign(this, partial)
          this.account_id = this.account_id || '';
          this.created_at = this.created_at || +new Date();
      }
  }
}
