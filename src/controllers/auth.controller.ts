import { Request, Response } from "express";
import prismaService from "./../prisma/prismaService";

import hashPassword from "./../middlewares/hashPassword";

export default new (class Controller {
  async registerRoute(req: Request, res: Response): Promise<void> {
    const { firstName, lastName, email, phone, password } = req.body;

    try {
      const user = await prismaService.users.findFirst({
        where: {
          OR: [
            {
              email,
            },
            { phone },
          ],
        },
      });

      if (!user) {
        const hashedPassword: string = await hashPassword(password);

        const newUser = await prismaService.users.create({
          data: {
            firstName: firstName,
            lastName: lastName,
            email: email,
            image: "",
            phone: phone,
            auth: {
              create: {
                password: hashedPassword,
                token: "",
              },
            },
          },
        });
        const response = {
          message: "Created",
          statusCode: 201,
          response: "The account has been successfully created.",
          data: newUser,
        };
        res.status(201).json(response);
      } else {
        const response = {
          message: "Conflict",
          statusCode: 409,
          response: "An account with similar information already exists.",
        };
        res.status(409).json(response);
      }
    } catch (error) {
      throw new Error("There is an error in registeration process." + error);
    }
  }
})();
