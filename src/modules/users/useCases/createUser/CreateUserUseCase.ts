import { User } from "modules/users/model/User";

import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): User {
    // Complete aqui
    const emailAlreadyExists = this.usersRepository.findByEmail(email);
    if (emailAlreadyExists) {
      throw new Error("Email already exists");
    } else {
      const user = this.usersRepository.create({ email, name });
      return user;
    }
  }
}

export { CreateUserUseCase };
