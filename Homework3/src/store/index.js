import Vuex from "vuex";

const API_URL = "https://api.jsonbin.io/b/61753cc09548541c29c7c0d5/2";
const CONTACT_URL = "https://api.jsonbin.io/b/619a93910ddbee6f8b0fc6e2";

export default new Vuex.Store({
  state: {
    posts: [],
    contacts: [],
  },
  mutations: {
    loadPosts: async (state) => {
      const { posts } = await fetch(API_URL).then((res) => res.json());
      state.posts = posts.map((post) => ({
        ...post,
        likes: 0,
      }));
    },
    loadContacts: async (state) => {
      const { contacts } = await fetch(CONTACT_URL).then((res) => res.json());
      state.contacts = contacts.map((contact) => contact);
      console.log(contacts);
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
    loadContacts({ commit }){
      commit("loadContacts");
    }
  },
  getters: {
    posts: (state) => state.posts,
    contacts: (state) => state.contacts,
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
