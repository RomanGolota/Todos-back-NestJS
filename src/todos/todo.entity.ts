import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity({ name: 'Post' })
export class TodoEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ type: 'text' })
  title: string

  @Column()
  userName: string

  @Column()
  isDone: boolean
}