<template>
  <div>
    <input id="firstName" v-model="firstName" placeholder="Name" />
    <input id="secondName" v-model="secondName" placeholder="Surname" />
    <input id="email" v-model="email" placeholder="email" type="email" />
    <input id="password" v-model="password" placeholder="password" type="password" />
    <input id="acceptTerms" v-model="acceptTerms" type="checkbox" />
    <button @click="submit">Submit</button>
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref } from "vue";

// Define the props of the component with types and validations
const props = defineProps({
  firstName: {
    type: String,
    required: true,
    validator: (value: string) => value.length > 2,
  },
  secondName: {
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
    type: String as PropType<string>,
    required: true,
    validator: (value: string) => /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(value),
  },
  acceptTerms: {
    type: Boolean,
    required: true,
    validator: (value: boolean) => value,
  },
  });

// Use refs to make the props reactive
const firstName = ref(props.firstName);
const email = ref(props.email);
const password = ref(props.password);
const acceptTerms = ref(props.acceptTerms);

// Define a function to submit the input model data
const submit = () => {
  // Do something with the input model data
};
</script>