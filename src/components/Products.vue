<template>
  <section id="products" class="p-0 md-p-5">
    <div class="products-container flex flex-wrap">
      <div class="product w-100pc md-w-33pc p-10 md-p-0 lg-p-10" v-for="product in products">
        <a
          :href="product.url"
          class="block pointer no-underline p-5 br-8 lg-hover-bg-teal-lightest-10 lg-hover-scale-up-1 ease-300"
          target="_blank">
          <img class="w-100pc" :src="product.img" :alt="product.tite" />
          <p class="fw-600 white fs-m3 mt-3">{{ product.title }}</p>
          <div class="teal-lighter fs-s3 italic after-arrow-right my-4">Try Yourself</div>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import imgFirst from "@/assets/fabrice-villard-Jrl_UQcZqOc-unsplash.jpg";
import imgSecond from "@/assets/yoann-siloine-dyaxQ-aoGWY-unsplash.jpg";
import imgThird from "@/assets/florian-klauer-mk7D-4UCfmg-unsplash.jpg";

const products = [
  {
    title: "Evento",
    url: import.meta.env.VITE_COMPANY_URL,
    img: imgFirst,
  },
  {
    title: "Evento",
    url: import.meta.env.VITE_COMPANY_URL,
    img: imgSecond,
  },
  {
    title: "Evento",
    url: import.meta.env.VITE_COMPANY_URL,
    img: imgThird,
  },
];
</script>

<style lang="scss" scoped></style>
