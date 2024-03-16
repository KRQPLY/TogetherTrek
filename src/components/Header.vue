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
        class="flex items-center ml-auto md-hidden indigo-lighter opacity-50 hover-opacity-100 ease-300 p-1 m-3">
        <vue-feather type="menu"></vue-feather>
      </a>
    </div>
    <div
      id="nav-items"
      class="flex sm-w-100pc flex-column md-flex md-flex-row md-justify-end items-center"
      :class="{ hidden: isMenuHidden }">
      <a href="#home" class="fs-s1 mx-3 py-3 indigo no-underline hover-underline" v-smooth-scroll>Home</a>
      <a href="#features" class="fs-s1 mx-3 py-3 indigo no-underline hover-underline" v-smooth-scroll>Features</a>
      <a href="#pricing" class="fs-s1 mx-3 py-3 indigo no-underline hover-underline" v-smooth-scroll>Pricing</a>
      <a href="#blog" class="fs-s1 mx-3 py-3 indigo no-underline hover-underline" v-smooth-scroll>Blog</a>
    </div>
  </nav>
</template>

<script setup>
import { ref } from "vue";

const isMenuHidden = ref(true);

function toggleMenu() {
  isMenuHidden.value = !isMenuHidden.value;
}
</script>

<style lang="scss" scoped></style>
