import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.params;
    const user = { user_id };
    try {
      const userSend = this.turnUserAdminUseCase.execute(user);
      return response.json(userSend);
    } catch (e) {
      const { message } = e;
      return response.status(404).json({ error: message });
    }
  }
}

export { TurnUserAdminController };
