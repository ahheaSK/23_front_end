<script setup lang="ts">
// ts យើងនិងប្រើប្រាស់ TypeScript ដើម្បីកំណត់ប្រភេទទិន្នន័យ និងបង្កើតអនុគមន៍ដែលមានប្រសិទ្ធភាព។

//ref => reference
//reactive => reactive state management
import { reactive, ref } from 'vue';
// const ការពារ ការប្តូរ value តែវាមិនបានការពារ property ទេ។ ref គឺជាការបង្កើត reactive reference ដែលអាចប្រើប្រាស់បានក្នុង Vue 3
// Data types number
const count = ref(0); // ref គឺជាការបង្កើត reactive reference ដែលអាចប្រើប្រាស់បានក្នុង Vue 3
count.value = 1;
console.log(count); // ចេញតម្លៃដើមរបស់ count ដែលគឺ 0
// count ជា reference object 
// count.value គឺជាការចូលទៅកាន់តម្លៃក្នុង reference object
count.value = 10; // កំណត់តម្លៃដើមសម្រាប់ count
//Data types string
const name = ref('John Doe'); // បង្កើត reactive reference សម្រាប់ឈ្មោះ
//Data types boolean
const isVisible = ref(true); // បង្កើត reactive reference សម្រាប់ visibility state

const state = reactive({
  count: 0,
  name: 'John Doe',
  isVisible: true
});

function incrementCount() {
  state.count++;
}

function decrementCount() {
  state.count--;
}


//Arrow function
//() Parameters => function body
const incrementCountArrow = () => {
  state.count++;
};

const decrementCountArrow = () => {
  state.count--;
};

</script>

<template>
  <div>
    <h1>Count: {{ count }}</h1>
    <h2>Name: {{ name }}</h2>
    <h3>Is Visible: {{ isVisible }}</h3>
    <!-- <button @click="count++">Increment</button> -->

    <h1>Reactive State Management</h1>
    <h2>Count: {{ state.count }}</h2>
    <h3>Name: {{ state.name }}</h3>
    <h4>Is Visible: {{ state.isVisible }}</h4>

    <button @click="incrementCount">Increment</button>
    <button @click="decrementCount">Decrement</button>

    <button @click="incrementCountArrow">Increment (Arrow)</button>
    <button @click="decrementCountArrow">Decrement (Arrow)</button>
  </div>
</template>


// ref => reference
// reactive 