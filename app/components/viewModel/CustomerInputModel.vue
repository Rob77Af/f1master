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