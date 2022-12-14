import { getConnection } from 'typeorm';
import createConnection from '../../database/database'
import createUserController from './createUserController';
import { Request } from 'express'
import { makeMockResponse } from '../../utils/mocks/mockResponse';

describe("Create User Controller", () => {
  beforeAll(async () => {
    const connection = await createConnection();
    await connection.runMigrations();
  });

  afterAll(async () => {
    const connection = getConnection();
    await connection.query("DELETE FROM usuarios");
    await connection.close();
  });

  const response = makeMockResponse()
    it('Deve retornar status 201 quando o usuário for criado', async()=>{
        const request = {
            body: {
                name: 'Algum usuário',
                email: 'email@email.com'
            }
        } as Request

        await createUserController.handle(request, response)

        expect(response.state.status).toBe(201)
    })

    it('Deve retornar status 400 quando o nome não for informado', async() => {
        const request = {
            body: {
                name: '',
                email: 'email@email.com'
            }
        } as Request

        await createUserController.handle(request, response)

        expect(response.state.status).toBe(400)
    })

    it('Deve retornar status 201 quando o email não for informado', async() => {
        const request = {
            body: {
                name: 'Algum usuário',
                email: ''
            }
        } as Request

        await createUserController.handle(request, response)

        expect(response.state.status).toBe(201)
    })

});
