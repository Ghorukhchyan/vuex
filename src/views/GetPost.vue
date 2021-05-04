<template>
  <div>
    <div class="divs" v-for="(post, value) in posts" :key="value">
      <ul>
        <li>
          <p>
            Title ` <strong>{{ post.title }}</strong> <br />
            id ` <strong>{{ post.id }}</strong> <br />
            userId `<strong>{{ post.userId }}</strong> <br />
            completed `<strong>{{ post.completed }}</strong> <br />
          </p>
        </li>
      </ul>
    </div>

    <div class="inputs">
      <p>Title: <input type="text" v-model="postBody.title" /></p>
      <p>Id: <input type="text" v-model="postBody.id" ></p>
      <p>userId: <input type="text" v-model="postBody.userId" /></p>
      <p>completed: <input type="text" v-model="postBody.completed" /></p>

      <button @click="postPost()">Add</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      posts: [],
      postBody: {
        title: " ",
        id: " ",
        userId: " ",
        completed: " ",
      },
    };
  },

  created() {
    axios
      .get(`https://jsonplaceholder.typicode.com/todos?_limit=3`)
      .then((response) => {
        this.posts = response.data;
        console.log(response.data);
      });
  },
  methods: {
    async postPost() {
      await axios
        .post(
          `https://jsonplaceholder.typicode.com/todos?_limit=3`,
          this.postBody
        )

        .then((response) => {
          console.log(response);
          this.posts.push(response.data);
          this.postBody = {};
        });
    },
  },
};
</script>

<style scoped>
.inputs {
  height: auto;
  width: 300px;
  margin: 0 auto;
  text-align: center;
  background-color: rgb(190, 173, 173);
}

.divs {
  margin: 0 auto;
  width: 350px;
  border: 2px solid black;
  background-color: yellow;
  text-align: left;
}
</style>
