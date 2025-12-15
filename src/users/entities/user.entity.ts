import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class User {

  @PrimaryGeneratedColumn('increment', { type: 'bigint' })
  id: string;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  dataNascimento: string;

  @Column({ unique: true })
  cpf: string;

  @Column()
  telefone: string;
}
