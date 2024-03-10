<script setup>
import { useQuizStore } from "@/stores/quiz";
import { storeToRefs } from "pinia";

const { activePage, activeSubject, score } = storeToRefs(useQuizStore());
const { resetAll } = useQuizStore();
</script>

<template>
  <div v-if="activePage === 'end'" class="mx-auto max-w-[18rem] mt-[4.5rem] space-y-3">
    <p class="text-3xl dark:text-white">Quiz completed <span class="block font-semibold">Your score is...</span></p>
    <div class="w-full p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <h5 class="text-[4rem] text-center font-bold tracking-tight text-gray-900 dark:text-white">{{ score }}</h5>
      <p class="text-center dark:text-[#72829c]">out of 100</p>
    </div>
    <button type="button" @click="resetAll" class="w-full focus:outline-none text-[#f4f6f8] bg-[#9333ea] hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-lg px-5 py-4 dark:focus:ring-purple-900">Play again</button>
  </div>
</template>
