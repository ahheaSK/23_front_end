<script setup lang="ts">

// defineProps({
//   name: String,
//     age: Number,
// })
const props = defineProps({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    default: 18
  }
});

</script>

<template>
    <div>
        <h2> This is Component</h2>
        <p>Name: {{ props.name }}</p>
        <p>Age: {{ props.age }}</p>
    </div>
</template>