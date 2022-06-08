import {Entity, PrimaryGeneratedColumn, Column } from '../typeorm'
import {JoinColumn, OneToOne} from "typeorm";
import {UsersEntity} from "./user.entity";

@Entity('workers')
export class WorkersEntity {
  @PrimaryGeneratedColumn()
  readonly id: number

  @OneToOne(() => UsersEntity)
  @JoinColumn()
  profile: UsersEntity

  @Column()
    head_fullname: string
}
