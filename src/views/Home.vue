<template>
<div>
    <div class="post" v-for="post in allPosts" :key="post.id">
        <h2>{{post.title}}</h2>
        <p>{{post.body}}</p>
    </div>
</div>
</template>




<script>
import {mapGetters, mapActions} from "vuex";

export default {
    computed:mapGetters(["allPosts"]),
    methods: mapActions(["fetchPosts"]),
       async mounted(){
        this.fetchPosts();
    }
};

</script>






<style scoped>
  .post{
      width: 400px;
      height: 250px;
      border: 2px solid grey;
      margin: 0 auto;
      margin-top: 5px;
  }
</style>
