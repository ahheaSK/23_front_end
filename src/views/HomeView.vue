<script setup lang="ts">
import { onMounted } from 'vue';
import { getCaptcha } from '../api/captcha';
import { useCounter } from '../composable/useCounter';

const { countNumber, increment, decrement } = useCounter();

const fetchCaptcha = async () => {
  try {
    const captchaData = await getCaptcha();
    console.log('Captcha Data:', captchaData);
  } catch (error) {
    console.error('Error fetching captcha:', error);
  }
};

onMounted(() => {
  fetchCaptcha();
});

</script>
//Props = Properties

<template>
  <div>
    <h1>Counter</h1>
    <p>Count: {{ countNumber }}</p>
    <button @click="increment">Increment</button>
    <button @click="decrement">Decrement</button>
   
  </div>
</template>


// ref => reference
// reactive


