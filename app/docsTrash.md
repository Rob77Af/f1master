<!-- 20230506 -->

Para criar um documento CustomerInputModel.vue e CustomerOutputModel.vue usando Nuxt 3 com TypeScript, você poderia seguir os seguintes passos:

- Instale o módulo @nuxt/typescript-build e os tipos @nuxt/types como dependências de desenvolvimento².
- Crie um arquivo tsconfig.json na raiz do seu projeto com a configuração básica do TypeScript para o Nuxt 3¹.
- Crie uma pasta viewmodels dentro da pasta components do seu projeto.
- Dentro da pasta viewmodels, crie dois arquivos: CustomerInputModel.vue e CustomerOutputModel.vue.
- No arquivo CustomerInputModel.vue, defina um componente Vue usando a sintaxe <script setup> com a propriedade lang="ts" para habilitar o TypeScript. Em seguida, defina as propriedades do modelo de entrada do cliente, como nome, email, senha e etc. Você pode usar a função defineProps para declarar as propriedades do componente com tipos e validações³. Por exemplo:

```vue
<template>
  <div>
    <label for="name">Name</label>
    <input id="name" v-model="name" />
    <label for="email">Email</label>
    <input id="email" v-model="email" type="email" />
    <label for="password">Password</label>
    <input id="password" v-model="password" type="password" />
    <button @click="submit">Submit</button>
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref } from "vue";

// Define the props of the component with types and validations
const props = defineProps({
  name: {
    type: String,
    required: true,
    validator: (value: string) => value.length > 2,
  },
  email: {
    type: String,
    required: true,
    validator: (value: string) => value.includes("@"),
  },
  password: {
    type: String,
    required: true,
    validator: (value: string) => value.length > 6,
  },
});

// Use refs to make the props reactive
const name = ref(props.name);
const email = ref(props.email);
const password = ref(props.password);

// Define a function to submit the input model data
const submit = () => {
  // Do something with the input model data
};
</script>
```

- No arquivo CustomerOutputModel.vue, defina um componente Vue usando a sintaxe <script setup> com a propriedade lang="ts" para habilitar o TypeScript. Em seguida, defina as propriedades do modelo de saída do cliente, como id, nome, email e etc. Você pode usar a função defineProps para declarar as propriedades do componente com tipos e validações³. Por exemplo:

```vue
<template>
  <div>
    <p>ID: {{ id }}</p>
    <p>Name: {{ name }}</p>
    <p>Email: {{ email }}</p>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

// Define the props of the component with types and validations
const props = defineProps({
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

// Destructure the props for convenience
const { id, name, email } = props;
</script>
```

- Agora você pode usar os componentes CustomerInputModel.vue e CustomerOutputModel.vue em qualquer lugar do seu projeto, passando os dados apropriados como props. Por exemplo:

```vue
<template>
  <div>
    <h1>Create a new customer</h1>
    <CustomerInputModel name="" email="" password="" />
    <h1>Display an existing customer</h1>
    <CustomerOutputModel

Origem: conversa com o Bing, 06/05/2023(1) TypeScript · Nuxt Concepts. https://nuxt.com/docs/guide/concepts/typescript Acessado 06/05/2023.
(2) Nuxt TypeScript. https://typescript.nuxtjs.org/ Acessado 06/05/2023.
(3) [Day 04] Nuxt 3 + TypeScript + ESLint + Prettier 環境建置. https://ithelp.ithome.com.tw/articles/10293758 Acessado 06/05/2023.
(4) Setup - Nuxt TypeScript. https://typescript.nuxtjs.org/guide/setup/ Acessado 06/05/2023.

<!-- Past Conversations -->

