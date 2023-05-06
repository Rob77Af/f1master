//import { Register } from "../entities/Register";
//import { RegisterRepository } from "../repositories/RegisterRepository";
//impor

// Define a classe RegisterService que implementa a interface IRegisterService e fornece a lógica concreta para cada método


class RegisterService implements IRegisterService {
    // Injeta a dependência do repositório de dados
    constructor(private registerRepository: RegisterRepository) {}
  
    // Implementa o método createRegister da interface IRegisterService
    createRegister(register: Register): void {
      // Valida os dados do registro
      if (register.validateEmail() && register.validatePassword()) {
        // Criptografa a senha do registro
        register.encryptPassword();
        // Salva o registro no repositório de dados
        this.registerRepository.save(register);
      } else {
        // Lança uma exceção se os dados não forem válidos
        throw new Error("Invalid register data");
      }
    }
  
    // Implementa o método updateRegister da interface IRegisterService
    updateRegister(register: Register): void {
      // Valida os dados do registro
      if (register.validateEmail() && register.validatePassword()) {
        // Criptografa a senha do registro
        register.encryptPassword();
        // Atualiza o registro no repositório de dados
        this.registerRepository.update(register);
      } else {
        // Lança uma exceção se os dados não forem válidos
        throw new Error("Invalid register data");
      }
    }
  
    // Implementa o método deleteRegister da interface IRegisterService
    deleteRegister(registerId: number): void {
      // Deleta o registro no repositório de dados pelo seu id
      this.registerRepository.delete(registerId);
    }
  
    // Implementa o método getRegister da interface IRegisterService
    getRegister(registerId: number): Register {
      // Obtém o registro no repositório de dados pelo seu id
      let register = this.registerRepository.get(registerId);
      // Retorna o registro encontrado ou null se não existir
      return register;
    }
  }
