<template>
  <section id="footer">
    <div class="flex flex-row justify-center bg-black w-100pc py-5">
      <div>
        <a href="#" class="flex items-center p-2 mr-10 no-underline mb-4">
          <img class="max-h-l2 w-auto" src="../assets/logo-white.png" />
        </a>
        <div class="flex flex-column">
          <a class="o-underline hover-underline teal fw-500">{{companyData.mail}}</a>
          <a class="o-underline hover-underline teal fw-500">{{companyData.phone}}</a>
          <a class="o-underline hover-underline teal fw-500">{{companyData.addressStreet}}</a>
          <a class="o-underline hover-underline teal fw-500">{{companyData.addressCountry}}</a>
        </div>
        <div class="flex flex-row mt-2 w-25pc justify-between">
          <vue-feather type="facebook" size="30px" stroke="lightgray"></vue-feather>
          <vue-feather type="instagram" size="30px" stroke="lightgray"></vue-feather>
          <vue-feather class="ml-2" type="linkedin" size="30px" stroke="lightgray"></vue-feather>
        </div>
      </div>

      <div class="flex flex-column md-flex md-justify-center right-border pl-10">
        <h4 class="teal-lighter fw-600 fs-m1 mb-3">Opening hours</h4>
        <span
          class="nav-item no-underline fw-400 day-color"
          v-smooth-scroll
          v-for="navItem in companyData.openingHours"
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
        closingHour: "20:00"
      },
      {
        day: "Tuesday",
        startHour: "8:00",
        closingHour: "20:00"
      },
      {
        day: "Wednesday",
        startHour: "8:00",
        closingHour: "20:00"
      },
      {
        day: "Thursday",
        startHour: "8:00",
        closingHour: "20:00"
      },
      {
        day: "Friday",
        startHour: "8:00",
        closingHour: "18:00"
      },
    ]
  }
</script>

<style>
.right-border {
  border-left: 2px solid white;
}

.day-color {
  color: lightgray
}
</style>

