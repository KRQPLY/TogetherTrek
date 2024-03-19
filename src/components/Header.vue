<template>
  <nav class="w-100pc flex flex-column md-flex-row md-px-10 py-5 bg-black">
    <div class="flex justify-between">
      <a href="#" class="flex items-center p-2 mr-4 no-underline">
        <img class="max-h-l2 w-auto" src="../assets/logo-white.png" />
      </a>
      <a
        data-toggle="toggle-nav"
        data-target="#nav-items"
        href="#"
        @click="toggleMenu"
        class="flex items-center ml-auto md-hidden teal-lighter opacity-50 hover-opacity-100 ease-300 p-1 m-3">
        <vue-feather type="menu" size="30px"></vue-feather>
      </a>
    </div>
    <div
      id="nav-items"
      class="flex sm-w-100pc flex-column md-flex md-flex-row md-justify-end items-center"
      :class="{ hidden: isMenuHidden }">
      <a
        :href="navItem.href"
        class="nav-item mx-3 py-3 teal-lighter no-underline hover-underline"
        v-smooth-scroll
        v-for="navItem in navItems"
        >{{ navItem.text }}</a
      >
    </div>
  </nav>
</template>

<script setup>
import { ref } from "vue";

const isMenuHidden = ref(true);
const navItems = [
  { href: "#home", text: "Home" },
  { href: "#features", text: "Features" },
  { href: "#about-us", text: "About Us" },
  { href: "#products", text: "Products" },
  { href: "#contact-us", text: "Contact Us" },
];

function toggleMenu() {
  isMenuHidden.value = !isMenuHidden.value;
}
</script>

<style lang="scss" scoped>
.nav-item {
  font-size: 1rem;
}
</style>
