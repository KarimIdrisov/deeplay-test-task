import {Entity, PrimaryGeneratedColumn, Column} from '../typeorm'
import {JoinColumn, OneToOne} from "typeorm";
import {UsersEntity} from "./user.entity";

@Entity('department_heads')
export class DepartmentHeadsEntity {
  @PrimaryGeneratedColumn()
  readonly id: number

  @OneToOne(() => UsersEntity)
  @JoinColumn()
  profile: UsersEntity

  @Column()
    title: string
}
