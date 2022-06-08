import {Entity, PrimaryGeneratedColumn} from '../typeorm'
import {JoinColumn, OneToOne} from "typeorm";
import {UsersEntity} from "./user.entity";

@Entity('directors')
export class DirectorsEntity {
  @PrimaryGeneratedColumn()
  readonly id: number

  @OneToOne(() => UsersEntity)
  @JoinColumn()
  profile: UsersEntity
}
