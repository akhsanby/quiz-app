<script setup>
import { useQuizStore } from "@/stores/quiz";
import { storeToRefs } from "pinia";

const { activePage, activeSubject, currentQuestion, selectedAnswer } = storeToRefs(useQuizStore());
const { getLetter, setSelectedAnswer, nextQuestion } = useQuizStore();
</script>

<template>
  <div v-if="activePage === 'process'" class="grid grid-cols-1 lg:grid-cols-2 gap-2 mt-[4.5rem]">
    <div class="w-full text-lg font-medium tracking-tight text-gray-900 justify-self-center lg:justify-self-start dark:text-white">
      <span class="block text-sm font-light tracking-wide mb-5">Question {{ currentQuestion + 1 }} of {{ activeSubject.data.length }}</span>
      <span class="text-2xl">{{ activeSubject.data[currentQuestion].question }}</span>
      <highlightjs :code="activeSubject.data[currentQuestion].code" class="my-3" />
    </div>
    <div class="w-full lg:w-[25rem] space-y-4 justify-self-center lg:justify-self-end">
      <div v-for="(answer, index) in activeSubject.data[currentQuestion].answers" @click="() => setSelectedAnswer(answer)" class="flex gap-x-4 items-center w-full px-4 py-3 bg-white hover:bg-gray-100 rounded-lg shadow dark:bg-gray-800 dark:hover:bg-gray-700 cursor-pointer" :class="selectedAnswer === answer ? 'dark:bg-[#9333ea]/50 dark:hover:bg-[#9333ea]/50' : ''">
        <div class="text-white bg-blue-700 font-medium rounded-lg text-xl px-4 py-2 dark:bg-[#f4f6f9] dark:text-black focus:outline-none">{{ getLetter(index) }}</div>
        <h5 class="text-lg font-bold tracking-tight text-gray-900 dark:text-white">{{ answer }}</h5>
      </div>
      <button v-if="selectedAnswer" type="button" @click="nextQuestion" class="w-full focus:outline-none text-[#f4f6f8] bg-[#9333ea] hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-lg px-5 py-4 dark:focus:ring-purple-900">Submit answer</button>
    </div>
  </div>
</template>
