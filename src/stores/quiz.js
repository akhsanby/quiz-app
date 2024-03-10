import { defineStore } from "pinia";

export const useQuizStore = defineStore("quiz", {
  state: () => ({
    activePage: "start", // available page is start, process, end
    activeSubject: undefined,
    currentQuestion: 0, // by index
    totalCorrectAnswer: 0,
    selectedAnswer: undefined,
    score: undefined,
  }),
  actions: {
    getLetter(index) {
      return String.fromCharCode(65 + index); // convert number index into A, B, C, D, dst
    },
    setSubject(subject) {
      this.activePage = "process";
      this.activeSubject = subject;
      this.activeSubject.data.sort(() => Math.random() - 0.5); // randomize all question

      // randomize all answers
      this.activeSubject.data.map((item) => {
        return item.answers.sort(() => Math.random() - 0.5);
      });
    },
    setSelectedAnswer(answer) {
      this.selectedAnswer = answer;
    },
    nextQuestion() {
      const totalQuestion = this.activeSubject.data.length;
      const activeQuestion = this.activeSubject.data[this.currentQuestion];

      // if all question is already answered, calculate the score
      if (this.currentQuestion + 1 === totalQuestion) {
        this.activePage = "end";
        this.score = (this.totalCorrectAnswer / totalQuestion) * 100;
        return;
      }

      // if answer is correct
      if (this.selectedAnswer === activeQuestion.correctAnswer) {
        this.totalCorrectAnswer++;
      }

      this.currentQuestion++;
      this.selectedAnswer = undefined;
    },
    resetAll() {
      this.activePage = "start"; // available page is start, process, end
      this.activeSubject = undefined;
      this.currentQuestion = 0; // by index
      this.totalCorrectAnswer = 0;
      this.selectedAnswer = undefined;
      this.score = undefined;
    },
  },
});
