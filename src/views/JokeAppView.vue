<template>
  <section class="section">
    <div class="joke" v-for="joke in getAllJokes" :key="joke.id">
      {{ joke.joke }}
    </div>
  </section>
</template>

<style lang="scss">
@import "../styles/JokeApp.scss";
</style>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions, mapGetters, mapMutations, mapState } from "vuex";

export default defineComponent({
  name: "JokeApp",
  mounted() {
    this.fetchJokes();
  },
  computed: {
    ...mapState("jokeApp", ["jokes"]),
    ...mapGetters("jokeApp", ["getAllJokes"]),
  },
  methods: {
    ...mapActions("jokeApp", ["fetchJokes"]),
    ...mapMutations("jokeApp", ["updateJokes"]),
  },
});
</script>
