<script setup>
import { container as headerContainer } from "styles/header.css";
import { grid } from "./App.css";

import Card from "./components/Card.vue";
</script>

<template>
  <div>
    <!-- :class is used to reference the classNamesas local variables, instead of using {} -->
    <div :class="headerContainer">
      <img
        src="./assets/vue.svg"
        alt="Vue logo"
        style="width: 25px; height: 25px"
      />
      <div>Vue on Vite</div>
    </div>
    <div :class="grid">
      <Card
        imageSrc="ghost.jpeg"
        imageAlt="Ghost of Tsushima"
        title="Ghost of Tsushima"
        description="Uncover the hidden wonders of Tsushima in this open-world action adventure from Sucker Punch Productions and PlayStation Studios."
      />
      <Card
        imageSrc="gog.jpeg"
        imageAlt="Marvel's Guardians of the Galaxy"
        title="Marvel's Guardians of the Galaxy"
        description="Marvel's Guardians of the Galaxy is a 2021 action-adventure game developed by Eidos-Montréal and published by Square Enix."
      />
    </div>
  </div>
</template>