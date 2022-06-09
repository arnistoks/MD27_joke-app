import { createStore } from "vuex";

type PersonType = {
  id: number;
  name: string;
  chosen: false;
  random: string;
};

export default createStore({
  modules: {
    randomPersonGenerator: {
      namespaced: true,
      state: {
        people: [
          {
            id: 1,
            name: "Alberts",
            chosen: false,
            random: "#" + ((Math.random() * 0xffffff) << 0).toString(16),
          },
          {
            id: 2,
            name: "Arnis",
            chosen: false,
            random: "#" + ((Math.random() * 0xffffff) << 0).toString(16),
          },
          {
            id: 3,
            name: "Artis",
            chosen: false,
            random: "#" + ((Math.random() * 0xffffff) << 0).toString(16),
          },
          {
            id: 4,
            name: "Artūrs",
            chosen: false,
            random: "#" + ((Math.random() * 0xffffff) << 0).toString(16),
          },
          {
            id: 5,
            name: "Bogdans",
            chosen: false,
            random: "#" + ((Math.random() * 0xffffff) << 0).toString(16),
          },
          {
            id: 6,
            name: "Edgars",
            chosen: false,
            random: "#" + ((Math.random() * 0xffffff) << 0).toString(16),
          },
          {
            id: 7,
            name: "Elvis",
            chosen: false,
            random: "#" + ((Math.random() * 0xffffff) << 0).toString(16),
          },
          {
            id: 8,
            name: "Haralds",
            chosen: false,
            random: "#" + ((Math.random() * 0xffffff) << 0).toString(16),
          },
          {
            id: 9,
            name: "Ieva",
            chosen: false,
            random: "#" + ((Math.random() * 0xffffff) << 0).toString(16),
          },
          {
            id: 10,
            name: "Inta",
            chosen: false,
            random: "#" + ((Math.random() * 0xffffff) << 0).toString(16),
          },
          {
            id: 11,
            name: "Ilona",
            chosen: false,
            random: "#" + ((Math.random() * 0xffffff) << 0).toString(16),
          },
          {
            id: 12,
            name: "Jānis",
            chosen: false,
            random: "#" + ((Math.random() * 0xffffff) << 0).toString(16),
          },
          {
            id: 13,
            name: "Niklāvs",
            chosen: false,
            random: "#" + ((Math.random() * 0xffffff) << 0).toString(16),
          },
          {
            id: 14,
            name: "Ņikita",
            chosen: false,
            random: "#" + ((Math.random() * 0xffffff) << 0).toString(16),
          },
          {
            id: 15,
            name: "Regīna",
            chosen: false,
            random: "#" + ((Math.random() * 0xffffff) << 0).toString(16),
          },
          {
            id: 16,
            name: "Ričards",
            chosen: false,
            random: "#" + ((Math.random() * 0xffffff) << 0).toString(16),
          },
          {
            id: 17,
            name: "Rihards",
            chosen: false,
            random: "#" + ((Math.random() * 0xffffff) << 0).toString(16),
          },
          {
            id: 18,
            name: "Roberts",
            chosen: false,
            random: "#" + ((Math.random() * 0xffffff) << 0).toString(16),
          },
        ] as PersonType[],
      },
      actions: {},
      mutations: {},
    },
  },
});
