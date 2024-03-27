import { Request, Response } from "express";
import Atividade from "../database/db/models/atividade";

class AtividadeController {
  public async index(req: Request, res: Response): Promise<Response> {
    const atividades = await Atividade.findAll();

    return res.json(atividades);
  }

  public async show(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const atividade = await Atividade.findByPk(id);

    if (!atividade) {
      return res.status(404).json({ message: "Atividade not found" });
    }

    return res.json(atividade);
  }

  public async store(req: Request, res: Response): Promise<Response> {
    const atividade = await Atividade.create(req.body);

    return res.json(atividade);
  }

  public async update(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const atividade = await Atividade.findByPk(id);

    if (!atividade) {
      return res.status(404).json({ message: "Atividade not found" });
    }

    await atividade.update(req.body);

    return res.json(atividade);
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const atividade = await Atividade.findByPk(id);

    if (!atividade) {
      return res.status(404).json({ message: "Atividade not found" });
    }

    await atividade.destroy();

    return res.status(204).send();
  }
}

export default new AtividadeController();
