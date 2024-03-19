<template>
  <section id="about-us">
    <div class="px-l4 pt-l4 lg-pt-l3 lg-px-l7">
      <div class="lg-w-75pc">
        <h2 class="white fs-l3 fw-900 lh-1">About Us</h2>
        <p class="teal-lightest fw-600 fs-m1 opacity-50 my-5">
          {{ aboutUsContent.description }}
        </p>
      </div>
    </div>

    <div class="py-10">
      <Swiper
        :modules="[Autoplay, Pagination]"
        :slides-per-view="1"
        :breakpoints="{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }"
        :autoplay="{ delay: 2000 }"
        pagination
        loop>
        <SwiperSlide v-for="member in aboutUsContent.team" class="h-auto">
          <div class="px-3 h-100pc">
            <div class="p-8 br-8 bg-indigo-lightest-10 relative h-100pc flex flex-column justify-between">
              <span class="fs-l5 lh-1 teal opacity-80 absolute top-0 z--1">&#10077;</span>
              <p class="fw-600 fs-m1 indigo-lightest opacity-80 italic ls-wider">
                {{ member.quote }}
              </p>
              <div class="flex items-center my-5">
                <vue-feather :type="member.icon" size="30px"></vue-feather>
                <div class="ml-4 fs-s1">
                  <div class="indigo-lightest">{{ member.name }}</div>
                  <div class="indigo-lightest opacity-40">{{ member.role }}</div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>

    <div class="p-l2 lg-py-l3 lg-px-l7">
      <div>
        <h2 class="white text-center fs-l1 fw-900 lh-1">Our History</h2>
      </div>
    </div>
    <div class="flex flex-wrap md-w-90pc mx-auto">
      <div
        class="w-100pc md-w-50pc"
        :class="[index === 2 ? 'md-w-100pc' : 'md-w-50pc']"
        v-for="(historyPart, index) in aboutUsContent.history">
        <div class="br-8 p-5 m-5 bg-teal-lightest-50 ease-300">
          <div class="inline-block bg-teal-lightest gray br-3 px-4 py-1 mb-10 fs-s4 uppercase">
            {{ historyPart.year }}
          </div>
          <div class="teal-lighter fw-600 fs-m1">
            {{ historyPart.event }}
            <div class="opacity-50">
              {{ historyPart.description }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";
import "swiper/css/pagination";

const aboutUsContent = {
  description:
    "At Together Trek, we are passionate about creating unforgettable experiences. With a dedicated team of experienced professionals, we strive to exceed our clients' expectations and bring their vision to life. Our attention to detail, creativity, and commitment to excellence set us apart in the industry.",
  team: [
    {
      name: "John Doe",
      role: "Founder & CEO",
      icon: "user",
      quote: "Adventure is not outside; it is within.",
    },
    {
      name: "Jane Smith",
      role: "Creative Director",
      icon: "users",
      quote: "In every walk with nature, one receives far more than he seeks.",
    },
    {
      name: "Michael Johnson",
      role: "Adventure Guide",
      icon: "compass",
      quote: "The best journeys in life are those that answer questions you never thought to ask.",
    },
    {
      name: "Emily Williams",
      role: "Marketing Manager",
      icon: "activity",
      quote: "Traveling – it leaves you speechless, then turns you into a storyteller.",
    },
  ],
  history: [
    {
      year: 2012,
      event: "Innovation",
      description:
        "Embracing innovation, Together Trek began incorporating sustainable and eco-friendly practices into its operations, leading the way in responsible tourism.",
    },
    {
      year: 2016,
      event: "Recognition",
      description:
        "Together Trek's dedication to quality and sustainability earned it recognition from industry experts, as well as awards for its outstanding service.",
    },
    {
      year: 2020,
      event: "Digital Transformation",
      description:
        "In response to changing global trends, Together Trek underwent a digital transformation, enhancing its online presence and offering virtual travel experiences.",
    },
    {
      year: 2023,
      event: "Community Engagement",
      description:
        "Driven by a commitment to give back, Together Trek launched several initiatives to support local communities in the destinations it operates.",
    },
    {
      year: 2025,
      event: "Future Vision",
      description:
        "Looking ahead, Together Trek remains dedicated to providing transformative travel experiences while championing sustainability and social responsibility.",
    },
  ],
};
</script>

<style lang="scss" scoped>
:deep(.swiper-pagination-bullet-active) {
  background-color: #edf9fa;
}
</style>
