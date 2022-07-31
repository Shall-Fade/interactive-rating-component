<template>
  <RatingComponentModal v-if="modalIsVisible" />
  <RatingComponentGrade v-else />
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import RatingComponentGrade from "../components/RatingComponentGrade.vue";
import RatingComponentModal from "../components/RatingComponentModal.vue";
export default {
  components: {
    RatingComponentGrade,
    RatingComponentModal,
  },
  setup() {
    const store = useStore();
    const modalIsVisible = computed(() => store.state.modalIsVisible);

    return {
      modalIsVisible,
    };
  },
};
</script>

<style></style>
