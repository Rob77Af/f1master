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

const { id, name, email } = props;

</script>









