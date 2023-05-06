<template>
  <div>
    
    <h6>No arquivo que usa os componentes CustomerInputModel.vue e CustomerOutputModel.vue, 
    você precisa importar os componentes e registrá-los usando a função defineComponent2. 
    Você também precisa definir um estado reativo para armazenar os dados do cliente e 
    passá-los como props para os componentes. Você pode usar a função ref para criar um 
    estado reativo3. Por exemplo:</h6>
    
    <h1>Create a new customer</h1>
    <CustomerInputModel :name="customer.name" :email="customer.email" :password="customer.password" />
    <h1>Display an existing customer</h1>
    <CustomerOutputModel :id="customer.id" :name="customer.name" :email="customer.email" />
  </div>
</template>

<script setup lang="ts">
import { defineComponent, ref } from "vue";
import CustomerInputModel from "./viewmodels/CustomerInputModel.vue";
import CustomerOutputModel from "./viewmodels/CustomerOutputModel.vue";

// Define the component and register the imported components
export default defineComponent({
  components: {
    CustomerInputModel,
    CustomerOutputModel,
  },
});

// Define a reactive state for the customer data
const customer = ref({
  id: 1,
  name: "John Doe",
  email: "john.doe@example.com",
  password: "secret",
});
</script>