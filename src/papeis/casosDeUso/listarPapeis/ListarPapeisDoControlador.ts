import { Request, Response } from "express";
import { ListarPapeisDeCasoDeUso } from "./ListarPapeisDeCasoDeUso";

export class ListarPapeisDoControlador {
  constructor(private listarPapeisDeCasoDeUso: ListarPapeisDeCasoDeUso) {}

  executar(request: Request, response: Response): Response {
    const papeis = this.listarPapeisDeCasoDeUso.execute()
    return response.json(papeis)
  }
}
