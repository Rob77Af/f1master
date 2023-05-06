import { Register } from "../entities/Register";

// Define a interface IRegisterService que declara os métodos que o serviço de registro deve implementar
interface IRegisterService {
    // Método para criar um novo registro
    createRegister(register: Register): void;
    // Método para atualizar um registro existente
    updateRegister(register: Register): void;
    // Método para deletar um registro existente
    deleteRegister(registerId: number): void;
    // Método para obter um registro pelo seu id
    getRegister(registerId: number): Register;
  }
  
  