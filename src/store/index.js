import { createStore } from "vuex";

const store = createStore({
  state: {
    rating: null,
    modalIsVisible: false,
  },
  mutations: {
    SELECT_RATING(state, rating) {
      state.rating = rating;
    },
    CHANGE_MODAL_STATUS(state, modalIsVisible) {
      state.modalIsVisible = modalIsVisible;
    },
  },
});

export default store;
