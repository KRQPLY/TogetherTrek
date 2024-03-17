<template>
  <section id="features" class="px-10 pt-10 lg-px-l5 lg-pt-l5">
    <div class="flex flex-column lg-flex-row mx-auto">
      <div class="w-100pc lg-w-40pc" v-for="service in services">
        <div class="br-8 m-5">
          <div class="flex justify-center items-center bg-indigo-lightest-10 white w-l5 h-l5 br-round mb-5">
            <vue-feather :type="service.icon" size="25px"></vue-feather>
          </div>
          <h4 class="teal opacity-80 fw-600 fs-m3 mb-5">{{ service.title }}</h4>
          <div class="indigo-lightest fw-600 fs-m1 lh-3 opacity-50">
            {{ service.description }}
          </div>
          <a
            href="#"
            class="mt-5 button bg-indigo-lightest-10 fs-s3 white no-underline hover-opacity-100 hover-scale-up-1 ease-300"
            >Read</a
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const services = [
  {
    title: "Corporate Events",
    icon: "briefcase",
    description:
      "We specialize in planning and executing corporate events that leave a lasting impression. From product launches to conferences, we handle every detail to ensure a successful event.",
  },
  {
    title: "Parties & Celebrations",
    icon: "gift",
    description:
      "Whether it's a birthday party, anniversary celebration, or any other special occasion, we'll take care of all the details so you can relax and enjoy the festivities with your guests.",
  },
  {
    title: "Conferences",
    icon: "mic",
    description:
      "From venue selection to speaker coordination, we have the expertise to organize successful conferences that inspire and engage attendees. Let us handle the logistics of a memorable experience for your audience.",
  },
];
</script>

<style lang="scss" scoped></style>
