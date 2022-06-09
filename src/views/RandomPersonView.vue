<template>
  <section class="section section__random">
    <div class="container">
      <div class="people">
        <div v-for="person in people" :key="person.id">
          <div class="person" :style="{ backgroundColor: `${person.random}` }">
            {{ person.name }}
          </div>
        </div>
      </div>
    </div>
    <button
      class="random__button"
      @click="colorGenerator() + numberGenerator() + show() + removePerson()"
    >
      Choose person
    </button>
    <div class="result">{{ result }}</div>
  </section>
</template>

<style lang="scss">
@import "../styles/RandomPerson.scss";
</style>

<script lang="ts">
import { defineComponent } from "vue";

type PersonType = {
  id: number;
  name: string;
  chosen: false;
  random: string;
};

export default defineComponent({
  name: "RandomPerson",
  data: () => ({
    result: "",
    randomNumber: 0,
    originalPeople: [
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
  }),
  methods: {
    colorGenerator() {
      this.people.map(
        (person) =>
          (person.random = "#" + ((Math.random() * 0xffffff) << 0).toString(16))
      );
    },
    numberGenerator() {
      this.randomNumber = Math.floor(Math.random() * this.people.length);
    },
    show() {
      this.result = this.people[this.randomNumber].name;
    },
    removePerson() {
      if (this.people.length === 1) {
        this.people = [...this.originalPeople];
      } else {
        this.people.splice(this.randomNumber, 1);
      }
    },
  },
});
</script>
