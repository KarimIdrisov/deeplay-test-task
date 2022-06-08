import {Entity, Column, PrimaryGeneratedColumn} from '../typeorm'

@Entity('users')
export class UsersEntity {
  @PrimaryGeneratedColumn()
  readonly id: number

  @Column()
    fullname: string

  @Column()
    birthday: string

  @Column()
    sex: string

  @Column()
    role:  string
}
