>>Vamos conversar sobre programação. Considerando que através do comando "dotnet new classLib" 
>>criaremos um projeto C# do tipo class Library, faremos uma listagem das pastas que precisaremos 
>>criar considerando uma API Rest usando Clean Architecture e Domain Driven Design (DDD) para realizar 
>>criar uma aplicação do tipo Shopping, com produtos, clientes, fornecedores e todas as entidades 
>>envolvidas.

Shopping/
├── API/
│   ├── Controllers/
│   │   ├── CustomersController.cs
│   │   └── ...
│   └── ViewModels/ 
│       ├── CustomerInputModel.cs
│       ├── CustomerOutputModel.cs
│       └── ...
├── Application/
│   ├── Commands/
│   │   ├── CreateCustomerCommand.cs
│   │   ├── UpdateCustomerCommand.cs
│   │   └── DeleteCustomerCommand.cs
│   ├── Queries/
│   │   ├── GetCustomerByIdQuery.cs
│   │   ├── GetAllCustomersQuery.cs
│   │   └── ...
│   └── Services/
│       ├── CustomerService.cs
│       └── ...
├── Domain/
│   ├── Entities/
│   │   ├── Customer.cs
│   │   └── ...
│   ├── Interfaces/
│   │   ├── IRepository.cs
│   │   └── ...
│   ├── Services/
│   │   ├── ICustomerService.cs
│   │   └── ...
│   └── Exceptions/
│       └── ...
├── Infrastructure/
│   └── Repositories/
│       ├── CustomerRepository.cs
│       └── ...
└── Tests/
    └── Tests/
        ├── CustomerServiceTests.cs
        └── ...

Aqui está uma ordem recomendada para criação dos arquivos ao desenvolver uma única entidade (no caso, um "Customer") em uma aplicação web em .NET:

>>1. Na pasta Domain/Entities, crie um arquivo "Customer.cs" para definir a classe da entidade "Customer", que representa um cliente.

>>2. Na pasta Domain/Interfaces, crie um arquivo "IRepository.cs" para definir a interface IRepository, que especifica os métodos que devem ser implementados por qualquer repositório que lida com a entidade Customer.

//Dúvidas Aqui.
>>3. Na pasta Domain/Services, crie um arquivo "ICustomerService.cs" para definir a interface ICustomerService, que especifica os métodos que devem ser implementados por qualquer serviço que lida com a entidade Customer.

4. Na pasta Infrastructure/Repositories, crie um arquivo "CustomerRepository.cs" para implementar a interface IRepository, que gerencia o acesso a dados do objeto Customer.

5. Na pasta Application/Commands, crie um arquivo "CreateCustomerCommand.cs" para definir a classe CreateCustomerCommand, que representa o comando de criação de um novo objeto Customer.

6. Na pasta Application/Commands, crie um arquivo "UpdateCustomerCommand.cs" para definir a classe UpdateCustomerCommand, que representa o comando de atualização de um objeto Customer existente.

7. Na pasta Application/Commands, crie um arquivo "DeleteCustomerCommand.cs" para definir a classe DeleteCustomerCommand, que representa o comando de exclusão de um objeto Customer existente.

8. Na pasta Application/Queries, crie um arquivo "GetCustomerByIdQuery.cs" para definir a classe GetCustomerByIdQuery, que representa uma consulta para obter um objeto Customer por seu ID.

9. Na pasta Application/Queries, crie um arquivo "GetAllCustomersQuery.cs" para definir a classe GetAllCustomersQuery, que representa uma consulta para obter todos os objetos Customer existentes.

10. Na pasta Application/Services, crie um arquivo "CustomerService.cs" para implementar a interface ICustomerService e lidar com a lógica de negócios da entidade Customer.

11. Na pasta API/Controllers, crie um arquivo "CustomersController.cs" para implementar o controlador RESTful que lidará com as requisições HTTP relacionadas à entidade Customer.

12. Na pasta API/ViewModels, crie um arquivo "CustomerInputModel.cs" para definir a classe CustomerInputModel, que representa um modelo de entrada de dados para criar ou atualizar um objeto Customer.

13. Na pasta API/ViewModels, crie um arquivo "CustomerOutputModel.cs" para definir a classe CustomerOutputModel, que representa um modelo de saída de dados para exibir um objeto Customer.

14. Na pasta Tests, crie um arquivo "CustomerServiceTests.cs" para escrever testes de unidade para a classe CustomerService.

>>baseado na lista "Guia" que foi apresentada, estes são os principais pacotes NuGet a serem >>instalados para o projeto:
>>Microsoft.EntityFrameworkCore: Pacote que contém o Entity Framework Core, usado para mapeamento >>objeto-relacional e interação com bancos de dados relacionais.
>>Microsoft.EntityFrameworkCore.SqlServer: Pacote para uso do SQL Server como provedor de banco de >>dados no Entity Framework Core.
>>Microsoft.EntityFrameworkCore.Design: Pacote com ferramentas de design do Entity Framework Core, >>usado para geração de código e scaffolding de entidades e contextos de banco de dados.
>>Microsoft.EntityFrameworkCore.Tools: Pacote com ferramentas adicionais do Entity Framework Core, >>como migrações de banco de dados.
>>Microsoft.AspNetCore.Mvc: Pacote que contém o ASP.NET Core MVC, usado para construção de aplicativos >>Web.
>>Microsoft.AspNetCore.Mvc.NewtonsoftJson: Pacote para uso do Newtonsoft.Json como serializador padrão >>no ASP.NET Core MVC.
>>Microsoft.AspNetCore.TestHost: Pacote usado para criar um ambiente de teste HTTP para testar >>aplicativos ASP.NET Core.
>>Microsoft.NET.Test.Sdk: Pacote usado para executar testes unitários .NET Core.
>>xunit: Pacote para escrever e executar testes de unidade usando o framework de teste xUnit.
>>xunit.runner.visualstudio: Pacote usado para executar testes de unidade no Visual Studio usando o >>xUnit.