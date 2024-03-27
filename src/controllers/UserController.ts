import { Request, Response } from "express";
import Usuario from "../database/db/models/usuario";

class UserController {
  async create(req: Request, res: Response) {
    const { name, email } = req.body;

    const user = await Usuario.create({ name, email });

    return res.json(user);
  }

  async index(req: Request, res: Response) {
    const users = await Usuario.findAll();

    return res.json(users);
  }

  async show(req: Request, res: Response) {
    const { id } = req.params;

    const user = await Usuario.findByPk(id);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    return res.json(user);
  }

  async update(req: Request, res: Response) {
    const { id } = req.params;
    const { name, email } = req.body;

    const user = await Usuario.findByPk(id);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    user.name = name;
    user.email = email;

    await user.save();

    return res.json(user);
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params;

    const user = await Usuario.findByPk(id);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    await user.destroy();

    return res.status(204).send();
  }
}

export default new UserController();
