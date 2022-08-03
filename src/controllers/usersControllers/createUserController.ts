import { Request, Response } from "express";
import { v4 as uuid } from "uuid";
import createUserService from "../../services/usersServices/createUserService";

class createUserController {
  async handle(req: Request, res: Response) {
    try {
      const { name, email } = req.body;
      const id = uuid();

      if (!name) return res.status(400).json({ message: `Name must be valid` });

      const user = await createUserService.execute({ id, name, email });

      return res.status(201).json({ message: `Created User succesfully` });
    } catch (error: any) {
      return error;
    }
  }
}

export default new createUserController();
