import Vuex from "vuex";

const API_URL = "https://api.jsonbin.io/b/61753cc09548541c29c7c0d5/2";

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
    resetLikes: (state) => {
      state.posts = state.posts.map((post) => {
        post.likes = 0;
        return post;
      })
    }
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

/*import { createStore } from "vuex";

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {},
});*/
