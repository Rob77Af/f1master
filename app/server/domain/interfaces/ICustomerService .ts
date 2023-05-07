interface ICustomerService {
  getCustomerByIdAsync(id: any): Promise<CustomerOutputModel>;
  getAllCustomersAsync(query: any): Promise<Array<CustomerOutputModel>>;
  createCustomerAsync(customerInputModel: any): Promise<CustomerOutputModel>;
  updateCustomerAsync(id: any, customerInputModel: any): Promise<void>;
  removeCustomerAsync(id: any): Promise<void>;
  createCustomerAsync(command: any): Promise<void>;
}