<template>
  <section id="awards">
    <div class="p-l2 lg-py-l3 lg-px-l7">
      <div>
        <h2 class="white text-center fs-l1 fw-900 lh-1">Achievements</h2>
      </div>
    </div>
    <div class="flex flex-wrap md-w-90pc mx-auto">
      <div class="w-100pc md-w-50pc" :class="[index === 2 ? 'md-w-100pc' : 'md-w-50pc']" v-for="(award, index) in awards">
        <div class="br-8 p-5 m-5 bg-teal-lightest-50 pointer ease-300">
          <div class="inline-block bg-teal-lightest gray br-3 px-4 py-1 mb-10 fs-s4 uppercase">
            {{ award.year }}
          </div>
          <div class="teal-lighter fw-600 fs-m1">
            {{ award.prize }}
            <div class="opacity-50">
              {{ award.description }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const awards = [
  {
    year: 2017,
    prize: "Adventure Travel Excellence Award",
    description:
      "Together Trek was honored with the Adventure Travel Excellence Award for its outstanding contribution to the adventure travel industry. This prestigious award recognizes our commitment to providing exceptional adventure experiences while promoting sustainability and responsible tourism.",
  },
  {
    year: 2019,
    prize: "Best Eco-Friendly Tour Operator",
    description:
      "Together Trek received the Best Eco-Friendly Tour Operator award in recognition of our efforts to promote environmental conservation and minimize our ecological footprint. This award highlights our dedication to sustainable practices and our role as a leader in eco-friendly tourism.",
  },
  {
    year: 2021,
    prize: "Customer Satisfaction Award",
    description:
      "Together Trek was honored with the Customer Satisfaction Award for consistently delivering exceptional service and exceeding customer expectations. This award is a testament to our unwavering commitment to providing memorable and rewarding travel experiences for our clients.",
  },
];
</script>

<style lang="scss" scoped></style>
