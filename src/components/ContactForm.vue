<template>
  <section id="contact-form">
    <div class="w-100pc bg-black flex flex-row py-5">
      <div class="w-50pc mr-10">
        <img class="w-auto" src="../assets/close-up-balloons-party.jpg" />
      </div>
      <div class="w-40pc flex flex-column p-8 align-center">
        <h2 class="white fs-l3 fw-900 lh-1 mb-3 ml-10">Contact form</h2>
        <form ref="anyName" @submit="submit">
          <h4 class="teal ml-10 mb-1">E-mail:</h4>
          <input class="w-90pc ml-10 custom-input" type="email" v-model="email" />
          <h4 class="teal ml-10 mb-1">Topic:</h4>
          <input class="w-90pc ml-10 custom-input" type="topic" v-model="topic" />
          <h4 class="teal ml-10 mb-1">Message:</h4>
          <textarea
            class="w-90pc ml-10 custom-input-big" rows="5"
            type="description"
            v-model="description"
          />
          <button
            class="button bg-teal fs-s1 white no-underline hover-opacity-100 hover-scale-up-1 ease-300 w-90pc ml-10 mt-2"
            @click="submit"
          >
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
.custom-input {
  background-color: black;
  border: 2px solid gray;
  color: lightgray;
  padding: 8px;
  border-radius: 4px;
  margin-bottom: 10px;
}

.custom-input:focus {
  border-color: teal !important; /* Change border color on focus */
}

.custom-input-big {
  background-color: black;
  border: 2px solid gray;
  color: lightgray;
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
