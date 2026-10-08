import { ref } from 'vue'

export function useCounter() {
  const countNumber = ref(0)

  const increment = () => {
    countNumber.value++
  }

  const decrement = () => {
    countNumber.value--
  }

  return {
    countNumber,
    increment,
    decrement
  }
}