export default {
  state: {
    posts:[]
},
mutations: {
  updatePosts(state, posts){
    state.posts=posts
  }
},
  actions: {
     async fetchPosts(ctx){
        const res = await fetch(
            "http://jsonplaceholder.typicode.com/posts?_limit=4"
        );
        const posts = await res.json();
        ctx.commit('updatePosts' , posts)
      }
  },
  
  getters: {
      allPosts(state){
            return state.posts
      }
  },
}



