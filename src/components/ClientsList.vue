<template>
  <section id="customers">
    <div class="p-10 flex flex-wrap">
      <div class="w-100pc">
        <div class="p-5">
          <h4 class="white fw-800 fs-l3 mb-5">{{ references.title }}</h4>
          <div class="indigo-lightest fw-600 fs-m1 opacity-50">
            {{ references.description }}
          </div>
          <h4 class="white fw-600 fs-m2 mt-10">{{ references.subtitle }}</h4>
          <Swiper
            :modules="[Autoplay]"
            :slides-per-view="2"
            :breakpoints="{ 768: { slidesPerView: 4 }, 1024: { slidesPerView: 5 } }"
            :autoplay="{ delay: 1000 }"
            loop>
            <SwiperSlide v-for="company in references.companies" class="h-auto"><Icon :icon-type="company.icon" /></SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import Icon from "@/components/Icon.vue";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";

const references = {
  title: "Our Clients",
  description:
    "At Together Trek, we take pride in the trust and confidence placed in us by our valued clients. Here's what some of them have to say about their experiences with us. From outdoor recreation enthusiasts to corporate teams seeking adventure, our diverse clientele reflects our commitment to delivering exceptional service and unforgettable experiences. Browse through these testimonials to learn more about why companies around the world choose Together Trek for their travel and adventure needs.",
  subtitle: "They Trusted Us",
  companies: [
    {
      icon: 1,
    },
    {
      icon: 2,
    },
    {
      icon: 3,
    },
    {
      icon: 2,
    },
    {
      icon: 1,
    },
    {
      icon: 3,
    },
  ],
};
</script>

<style lang="scss" scoped></style>
