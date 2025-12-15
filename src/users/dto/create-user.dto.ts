import { IsDateString, IsEmail, IsString } from 'class-validator';
import { IsCpf } from '../common/validators/is-cpf.validator';
import { IsCelular } from '../common/validators/is-celular.validator';

export class CreateUserDto {
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsDateString()
  dataNascimento: string;

  @IsCpf({ message: 'CPF inválido' })
  cpf: string;

  @IsCelular({ message: 'Telefone inválido' })
  telefone: string;
}
