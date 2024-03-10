<script setup>
import quiz from "@/assets/quiz";
import { useQuizStore } from "@/stores/quiz";
import { storeToRefs } from "pinia";

const { activePage } = storeToRefs(useQuizStore());
const { setSubject } = useQuizStore();
</script>

<template>
  <div v-if="activePage === 'start'" class="grid grid-cols-1 lg:grid-cols-2 gap-2 justify-items-center mt-[4.5rem]">
    <div class="w-full md:w-[25rem] dark:text-white">
      <p class="text-3xl md:text-4xl font-thin">Welcome to the <span class="font-bold block">Programming Quiz!</span></p>
      <p class="mt-[3rem]">Pick a subject to get started.</p>
    </div>
    <div class="w-full md:w-[25rem] space-y-4">
      <div v-for="data in quiz" @click="() => setSubject(data)" class="flex gap-x-4 items-center w-full px-6 py-4 bg-white cursor-pointer hover:bg-gray-100 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <Icon :icon="data.icon" width="2rem" />
        <h5 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ data.subject }}</h5>
      </div>
    </div>
  </div>
</template>
