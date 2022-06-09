<template>
  <section class="section">
    <div class="jokeApp">test</div>
  </section>
</template>

<style lang="scss">
@import "../styles/JokeApp.scss";
</style>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "JokeApp",
  data: () => ({
    people: "",
  }),
  methods: {
    kola() {
      this.people = "4";
    },
  },
});
</script>
