import {Entity, PrimaryGeneratedColumn} from '../typeorm'
import {JoinColumn, OneToOne} from "typeorm";
import {UsersEntity} from "./user.entity";

@Entity('controllers')
export class ControllersEntity {
  @PrimaryGeneratedColumn()
  readonly id: number

  @OneToOne(() => UsersEntity)
  @JoinColumn()
  profile: UsersEntity
}
