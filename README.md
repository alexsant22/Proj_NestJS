# NestAPI - Gerenciamento de Usuários

Este projeto é uma API RESTful desenvolvida com [NestJS](https://nestjs.com/) para gerenciamento de usuários. Ele utiliza PostgreSQL como banco de dados e TypeORM para ORM.

## Tecnologias

- **Framework:** NestJS
- **Linguagem:** TypeScript
- **Banco de Dados:** PostgreSQL
- **ORM:** TypeORM
- **Validação:** class-validator, class-transformer

## Pré-requisitos

Antes de começar, certifique-se de ter instalado em sua máquina:

- [Node.js](https://nodejs.org/) (versão compatível com NestJS 11)
- [PostgreSQL](https://www.postgresql.org/)

## Instalação

1. Instale as dependências:

```bash
npm install
```

## Configuração do Banco de Dados

O projeto está configurado para conectar a um banco de dados PostgreSQL local. As credenciais padrão estão definidas em `src/app.module.ts`:

- **Host:** localhost
- **Porta:** 5432
- **Usuário:** postgres
- **Senha:** root
- **Banco de Dados:** nestapi

Certifique-se de criar o banco de dados `nestapi` no seu PostgreSQL antes de rodar a aplicação.

## Executando a Aplicação

```bash
# desenvolvimento
npm run start

# modo watch (desenvolvimento)
npm run start:dev

# modo produção
npm run start:prod
```

A API estará rodando em `http://localhost:3000` (porta padrão do NestJS).

## Endpoints

### Usuários (`/users`)

| Método | Rota | Descrição |
| --- | --- | --- |
| POST | `/users/criar` | Cria um novo usuário |
| GET | `/users/buscar` | Lista todos os usuários |
| GET | `/users/buscar/:id` | Busca um usuário pelo ID |
| PATCH | `/users/atualizar/:id` | Atualiza um usuário pelo ID |
| DELETE | `/users/deletar/:id` | Remove um usuário pelo ID |

### Exemplo de JSON para criação de usuário:

```json
{
  "name": "João da Silva",
  "email": "joao@example.com",
  "dataNascimento": "1990-01-01",
  "cpf": "12345678900",
  "telefone": "11999999999"
}
```

## Testes

```bash
# testes unitários
npm run test

# testes e2e
npm run test:e2e

# cobertura de testes
npm run test:cov
```
