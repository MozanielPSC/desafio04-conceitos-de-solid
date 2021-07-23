import { Request, Response } from "express";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.params;
    try {
      const userSend = this.showUserProfileUseCase.execute({ user_id });
      return response.json(userSend);
    } catch (e) {
      const { message } = e;
      return response.status(404).json({ error: message });
    }
  }
}

export { ShowUserProfileController };
