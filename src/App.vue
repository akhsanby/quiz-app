<script setup>
import { onMounted, ref } from "vue";
import { storeToRefs } from "pinia";
import StartVue from "@/components/Start.vue";
import ContentVue from "@/components/Content.vue";
import ScoreVue from "@/components/Score.vue";
import { useQuizStore } from "@/stores/quiz";

const { activeSubject } = storeToRefs(useQuizStore());
const darkMode = ref(true);

function themeToggleBtn(e) {
  const isChecked = e.target.checked;
  if (isChecked) {
    document.documentElement.classList.add("dark");
    darkMode.value = true;
  } else {
    document.documentElement.classList.remove("dark");
    darkMode.value = false;
  }
}

onMounted(() => {
  if (darkMode.value) {
    document.documentElement.classList.add("dark");
    darkMode.value = true;
  } else {
    document.documentElement.classList.remove("dark");
    darkMode.value = false;
  }
});
</script>

<template>
  <main class="px-[2rem] py-[3rem] md:px-[10rem] md:py-[3rem]">
    <div class="flex items-center justify-between gap-x-3">
      <div>
        <div v-if="activeSubject" class="flex items-center gap-x-3">
          <Icon :icon="activeSubject.icon" width="2rem" />
          <p class="text-lg font-semibold dark:text-white">{{ activeSubject.subject }}</p>
        </div>
      </div>
      <div class="flex items-center gap-x-3">
        <Icon icon="bi:sun-fill" width="1.3rem" class="dark:text-white" />
        <label class="inline-flex items-center cursor-pointer">
          <input type="checkbox" class="sr-only peer" v-model="darkMode" @click="themeToggleBtn" />
          <div class="relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-600"></div>
        </label>
        <Icon icon="bi:moon-fill" width="1rem" class="dark:text-white" />
      </div>
    </div>
    <StartVue />
    <ContentVue />
    <ScoreVue />
  </main>
</template>
