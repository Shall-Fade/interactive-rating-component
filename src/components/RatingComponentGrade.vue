<template>
  <div
    class="rounded-3xl font-normal bg-dark-blue text-[15px] w-[350px] h-[350px] p-[25px] flex flex-col justify-between"
  >
    <div>
      <img
        class="bg-dark-grey p-[10px] rounded-full"
        src="../assets/images/icon-star.svg"
        alt="Star"
      />
    </div>
    <div>
      <h2 class="text-white text-[24px] pb-[7px] font-bold">How did we do?</h2>
      <p class="text-medium-grey text-[14px]">
        Please let us know how we did with your support request. All feedback is
        apprecialated to help us improve our offering!
      </p>
    </div>
    <div class="flex justify-between">
      <p
        :class="{
          'text-very-dark-blue': currentRating === item,
          'bg-orange': currentRating === item,
        }"
        class="hover:bg-medium-grey hover:text-white cursor-pointer text-[17px] bg-dark-grey text-medium-grey px-[18px] py-[9px] rounded-full"
        v-for="item in 5"
        :key="item"
        @click="selectRating(item)"
      >
        {{ item }}
      </p>
    </div>
    <button
      @click="changeModalStatus"
      class="hover:bg-white hover:text-orange font-bold text-[14px] tracking-widest cursor-pointer uppercase text-white bg-orange p-[8px] rounded-full"
    >
      Submit
    </button>
  </div>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    const currentRating = ref();

    // Выбор рейтинга
    function selectRating(item) {
      currentRating.value = item;
      store.commit("SELECT_RATING", item);
    }

    // Отобразить модальное окно
    function changeModalStatus() {
      store.commit("CHANGE_MODAL_STATUS", true);
    }

    return {
      selectRating,
      changeModalStatus,
      currentRating,
    };
  },
};
</script>

<style></style>
