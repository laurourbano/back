import { Router, Request, Response } from "express";
import jwt from "jsonwebtoken";

const router = Router();
const SECRET = process.env.SECRET ?? "secret";

function verifyJWT(req: Request, res: Response, next: any) {
  const token = req.headers["x-access-token"];
  
  if (blacklist.includes(token as string))
    return res.status(401).json({ auth: false, message: "Token inválido." });

  if (!token)
    return res
      .status(401)
      .json({ auth: false, message: "Token não apresentado." });

  jwt.verify(token as string, SECRET.toString(), (err: any, decoded: any) => {
    if (err)
      return res
        .status(401)
        .json({ auth: false, message: "Falha ao autenticar o token." });

    req.body.usuarioId = decoded.usuarioId;
    next();
  });
}

router.get("/", (req: Request, res: Response) => {
  res.status(200).json({ message: "Bem vindo a Api!" });
});

router.get("/usuarios", verifyJWT, (req: Request, res: Response) => {
  console.log(`${req.body.usuario} foi quem fez o acesso`);
  res.json([{ id: 1, nome: "lauro" }]);
});

router.post("/login", (req: Request, res: Response) => {
  if (req.body.usuario === "lauro" && req.body.password === "123") {
    const token = jwt.sign({ usuarioId: 1 }, SECRET, {
      expiresIn: 300,
    });
    return res.status(200).json({ auth: true, token });
  }
  return res.status(401).end();
});

const blacklist: string[] = [];

router.post("/logout", (req: Request, res: Response) => {
  blacklist.push(req.headers["x-access-token"] as string);
  return res.end();
});

export default router;
