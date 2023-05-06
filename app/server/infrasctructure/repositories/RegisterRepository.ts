// Camada de infraestrutura: define o repositório de dados RegisterRepository que persiste os registros em um banco de dados
class RegisterRepository {
    // Injeta a dependência do banco de dados
    constructor(private db: Database) { }

    // Método para salvar um registro no banco de dados
    save(register: Register): void {
        // Converte o registro em um objeto compatível com o banco de dados
        let registerData = {
            firstName: register.firstName,
            lastName: register.lastName,
            email: register.email,
            password: register.password,
            phone: register.phone,
        };
        // Insere o registro na tabela correspondente
        this.db.insert("registers", registerData);
    }
}
