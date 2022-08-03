import createUserService from "../../services/usersServices/createUserService";
import { v4 as uuid } from "uuid";

class FakeData {
  //   createUserService = new CreateUserService();

  async execute() {
    await createUserService.execute({
      id: uuid(),
      name: "Algum usuario",
      email: "algumusuario@gmail.com",
    });

    await createUserService.execute({
      id: uuid(),
      name: "Outro usuario",
      email: "",
    });
  }

  async createUser() {
    const user = await createUserService.execute({
      id: uuid(),
      name: "Algum usuario",
      email: "algumusuario@gmail.com",
    });

    return user;
  }
}

export { FakeData };
