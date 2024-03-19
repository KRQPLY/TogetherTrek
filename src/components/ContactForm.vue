<template>
  <section id="contact-us">
    <div class="w-100pc flex flex-column md-flex-row py-5">
      <div class="w-100pc md-w-60pc flex flex-column p-8 align-center">
        <h2 class="teal opacity-80 fs-l3 fw-900 lh-1 mb-3">Contact form</h2>
        <form ref="anyName" class="backdrop-blur-8 p-4" @submit="submit">
          <h4 class="teal opacity-80 mb-1">E-mail:</h4>
          <input class="w-100pc bg-transparent border-teal-lighter md-w-90pc custom-input" type="email" v-model="email" />
          <h4 class="teal opacity-80 mb-1">Topic:</h4>
          <input class="w-100pc bg-transparent border-teal-lighter md-w-90pc custom-input" type="topic" v-model="topic" />
          <h4 class="teal opacity-80 mb-1">Message:</h4>
          <textarea
            class="w-100pc bg-transparent border-teal-lighter md-w-90pc custom-input-big"
            rows="5"
            type="description"
            v-model="description" />
          <button class="button bg-teal-lighter fs-s1 gray no-underline ease-300 w-100pc md-w-90pc mt-2" @click="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      topic: "",
      description: "",
    };
  },
  methods: {
    submit() {
      this.$emit("submit", this.email.this.topic, this.description);
      this.$refs.anyName.reset();
    },
  },
};
</script>

<style lang="scss" scoped>
#contact-us {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url("../assets/contact-us-bg-sm.jpg");

  @include medium {
    background-image: url("../assets/contact-us-bg-md.jpg");
  }

  @include large {
    background-image: url("../assets/contact-us-bg-lg.jpg");
  }
}

.custom-input {
  outline: none;
  background-color: black;
  border: 2px solid gray;
  color: white;
  padding: 8px;
  border-radius: 4px;
  margin-bottom: 10px;
}

.custom-input:focus {
  border-color: teal !important; /* Change border color on focus */
}

.custom-input-big {
  outline: none;
  background-color: black;
  border: 2px solid gray;
  color: white;
  padding: 8px;
  border-radius: 4px;
  margin-bottom: 10px;
  height: 120px;
  white-space: pre-line;
}

.custom-input-big:focus {
  border-color: teal !important; /* Change border color on focus */
}
</style>
