import { json, Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    let { user_id } = request.headers;
    user_id = String(user_id);
    try {
      const all = this.listAllUsersUseCase.execute({ user_id });
      return response.json(all);
    } catch (e) {
      const { message } = e;
      return response.status(400).json({ error: message });
    }
  }
}

export { ListAllUsersController };
