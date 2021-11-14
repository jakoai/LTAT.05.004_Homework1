import Vue from "vue";
import Vuex from "vuex";

const API_URL = "https://api.jsonbin.io/b/61753cc09548541c29c7c0d5/1";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    posts: [],
  },
  mutations: {
    loadPosts: async (state) => {
      const { posts } = await fetch(API_URL).then((res) => res.json());
      state.posts = posts.map((post) => ({
        ...post,
        likes: 0,
      }));
    },
    increaseLikes: (state, id) => {
      state.posts = state.posts.map((post) => {
        if (post.id === id) {
          post.likes++;
        }
        return post;
      });
    },
  },
  actions: {
    loadPosts({ commit }) {
      commit("loadPosts");
    },
  },
  getters: {
    posts: (state) => state.posts,
  },
  modules: {},
});
