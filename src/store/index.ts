import { Commit, createStore } from "vuex";
import axios from "axios";

export type OneJoke = {
  category: string;
  type: string;
  joke: string;
  flags: {
    nsfw: boolean;
    religious: boolean;
    political: boolean;
    racist: boolean;
    sexist: boolean;
    explicit: boolean;
  };
  id: number;
  safe: boolean;
  lang: string;
};

export type BlackFlags = {
  flags: ["nsfw", "religious", "political", "racist", "sexist", "explicit"];
};

export type Jokes = {
  jokes: OneJoke[];
};

export default createStore({
  modules: {
    jokeApp: {
      namespaced: true,
      state: {
        jokes: {} as Jokes,
      },
      actions: {
        async fetchJokes({ commit }: { commit: Commit }) {
          try {
            const result = await axios.get(
              "https://v2.jokeapi.dev/joke/Programming?type=single&amount=10"
            );
            commit("updateJokes", result.data);
          } catch (error) {
            alert(error);
          }
        },
      },
      mutations: {
        updateJokes(state: { jokes: Jokes }, jokes: Jokes) {
          state.jokes = jokes;
        },
      },
      getters: {
        getAllJokes(state: { jokes: Jokes }) {
          return state.jokes.jokes;
        },
      },
    },
  },
});
