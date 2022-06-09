<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/jokeApp">Joke App</router-link> |
    <router-link to="/randomPerson">Random Person</router-link>
  </nav>
  <router-view />
</template>

<style lang="scss">
@import "./styles/App.scss";
</style>
