<template>
  <div
    class="text-center rounded-3xl font-normal bg-dark-blue text-[15px] w-[350px] h-[350px] px-[25px] py-[35px] flex flex-col justify-between items-center"
  >
    <img
      class="w-[150px]"
      src="../assets/images/illustration-thank-you.svg"
      alt="Illustration"
    />
    <p
      class="bg-dark-grey text-orange text-[13px] px-[18px] py-[7px] rounded-full"
    >
      You selected {{ rating }} out of 5
    </p>
    <div>
      <h2 class="text-white text-[22px] font-bold pb-[7px]">Thank you!</h2>
      <p class="text-[14px] text-medium-grey">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don't hesitate to get in touch!
      </p>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    const rating = computed(() => store.state.rating);

    return {
      rating,
    };
  },
};
</script>

<style></style>
