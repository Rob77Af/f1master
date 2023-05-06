// Camada de apresentação: define o controlador RegisterController que recebe as requisições HTTP e interage com o serviço RegisterService
class RegisterController {
    // Injeta a dependência do serviço RegisterService
    constructor(private registerService: RegisterService) { }

    // Método para tratar a requisição POST /register que cria um novo registro
    postRegister(req: Request, res: Response): void {
        // Extrai os dados do registro do corpo da requisição
        let registerData = req.body;
        // Cria uma instância da classe Register com os dados recebidos
        let register = new Register(
            registerData.firstName,
            registerData.lastName,
            registerData.email,
            registerData.password,
            registerData.secondPassword,
            registerData.phone
        );
        try {
            // Chama o método createRegister do serviço RegisterService com o registro criado
            this.registerService.createRegister(register);
            // Envia uma resposta de sucesso com o código HTTP 201 (Created)
            res.status(201).send("Register created successfully");
        } catch (error) {
            // Envia uma resposta de erro com o código HTTP 400 (Bad Request) e a mensagem da exceção
            res.status(400).send(error.message);
        }
    }

}
