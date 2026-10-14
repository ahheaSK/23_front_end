<script setup lang="ts">
import { ref, onMounted } from 'vue';
import type { CaptchaModel } from '../model/captcha.model';
import { getCaptcha } from '../api/captcha';
const form = ref({
  username: '',
  password: ''
});
const captcha = ref<CaptchaModel | null>(null);
    
const fetchCaptcha = () => {
    getCaptcha().then(response => {
        console.log('Captcha fetched:', response.data);
        captcha.value = response.data.data;
    }).catch(error => {
        console.error('Failed to fetch captcha:', error);
    });
};

onMounted(() => {
  fetchCaptcha();
});

</script>
<template>
    <div class="login-container">
        <h1>Login</h1>
        <form @submit.prevent="">
            <div>
                <label for="username">Username:</label>
                <input 
                    type="text" 
                    id="username" 
                    v-model="form.username" 
                    required 
                />
            </div>
            <div>
                <label for="password">Password:</label>
                <input 
                    type="password" 
                    id="password" 
                    v-model="form.password" 
                    required 
                />
            </div>
            <img
                :src="`data:image/png;base64,${captcha?.imageBase64}`"
                alt="Captcha"
                />
            <button type="submit">Login</button>
        </form>
    </div>
</template>


<style scoped>
.login-container {
  width: 350px;
  margin: 100px auto;
}

form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

input {
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  box-sizing: border-box;
}

button {
  padding: 10px;
  cursor: pointer;
}

.error {
  color: red;
}

</style>