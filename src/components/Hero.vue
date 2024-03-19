<template>
  <section id="home" class="hero min-h-75vh flex justify-start items-center">
    <div class="mx-5 md-mx-l5">
      <div>
        <h1 class="teal opacity-80 fs-l3 lh-2 md-fs-xl1 md-lh-1 fw-900">Elevate Your <br />Events Now</h1>
        <div class="br-8 mt-10 inline-flex">
          <input
            type="text"
            class="input-lg half bw-0 fw-200 bg-indigo-lightest-10 backdrop-blur-10 white ph-white focus-white opacity-80 fs-s3 py-5 min-w-25vw br-r-0"
            placeholder="Email Address" />
          <button class="button-lg bg-indigo-lightest-10 backdrop-blur-10 white focus-white fw-300 fs-s3 mr-0 br-l-0">
            Get Started
          </button>
        </div>
        <div class="white opacity-40 fs-s3 mt-3">No credit card required</div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
.hero {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url("../assets/hero-img-sm.jpg");

  @include medium {
    background-image: url("../assets/hero-img-md.jpg");
  }

  @include large {
    background-image: url("../assets/hero-img-lg.jpg");
  }
}
</style>
