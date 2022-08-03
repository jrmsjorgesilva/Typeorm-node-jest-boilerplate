import { getRepository } from "typeorm";
import { User } from "../../entities/user";

interface IUser {
  id: string;
  name: string;
  email?: string;
}

class CreateUserService {
  async execute({ id, name, email }: IUser) {
    const user = await getRepository(User)
      .createQueryBuilder()
      .insert()
      .into(User)
      .values([
        {
          id,
          name,
          email,
        },
      ])
      .execute();

    console.log(user.identifiers[0]);

    return user.identifiers[0];
  }
}

export default new CreateUserService();
