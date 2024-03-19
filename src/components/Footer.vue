<template>
  <section id="footer">
    <div class="flex flex-column md-flex-row justify-center bg-black w-100pc px-10 py-5">
      <div class="w-100pc md-w-60pc mb-10 md-mb-0">
        <a href="#" class="flex items-center p-2 mr-10 no-underline mb-4">
          <img class="max-h-l2 w-auto" src="../assets/logo-white.png" />
        </a>
        <div class="flex flex-column">
          <div class="flex flex-column">
            <div class="o-underline hover-underline teal opacity-80 fw-500 mr-5">{{ companyData.mail }}</div>
            <div class="o-underline hover-underline teal opacity-80 fw-500">{{ companyData.phone }}</div>
          </div>
          <div class="flex flex-row">
            <div class="o-underline hover-underline teal opacity-80 fw-500 mr-1">{{ companyData.addressStreet }}</div>
            <div class="o-underline hover-underline teal opacity-80 fw-500">{{ companyData.addressCountry }}</div>
          </div>
        </div>
        <div class="flex flex-row mt-2">
          <vue-feather class="mr-3" type="facebook" size="30px" stroke="lightgray"></vue-feather>
          <vue-feather class="mr-3" type="instagram" size="30px" stroke="lightgray"></vue-feather>
          <vue-feather class="ml-2" type="linkedin" size="30px" stroke="lightgray"></vue-feather>
        </div>
      </div>

      <div class="opening-hours w-auto flex flex-column md-flex md-justify-center pt-10 md-pt-0 md-pl-10">
        <h4 class="teal-lighter fw-600 fs-m1 mb-3">Opening hours</h4>
        <span class="nav-item no-underline fw-400 gray-lighter" v-smooth-scroll v-for="navItem in companyData.openingHours"
          >{{ navItem.day }}: {{ navItem.startHour }}-{{ navItem.closingHour }}</span
        >
      </div>
    </div>
  </section>
</template>

<script setup>
const companyData = {
  phone: "+48 123456789",
  mail: "togethertrek@gmail.com",
  addressStreet: "Piotrowo 2,",
  addressCountry: "60-965 Poznań",
  facebook: "https://www.facebook.com/Politechnika.Poznanska",
  instagram: "https://www.instagram.com/politechnika.poznanska/",
  linkedIn: "https://www.linkedin.com/school/politechnika-pozna%C5%84ska/",
  openingHours: [
    {
      day: "Monday",
      startHour: "8:00",
      closingHour: "20:00",
    },
    {
      day: "Tuesday",
      startHour: "8:00",
      closingHour: "20:00",
    },
    {
      day: "Wednesday",
      startHour: "8:00",
      closingHour: "20:00",
    },
    {
      day: "Thursday",
      startHour: "8:00",
      closingHour: "20:00",
    },
    {
      day: "Friday",
      startHour: "8:00",
      closingHour: "18:00",
    },
  ],
};
</script>

<style lang="scss">
.opening-hours {
  border-top: 2px solid white;

  @include medium {
    border: 0;
    border-left: 2px solid white;
  }
}
</style>
