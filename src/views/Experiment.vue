// -----------axios .post method-----------

<template>
  <div>
    <input type="text" v-model="text" />
    <p>{{ text }}</p>
    <ul>
      <li v-for="(value, index) in val" :key="index">{{ value.title }}></li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  data() {
    return {
      text: "",
    };
  },
  methods: {
    ...mapActions(["getText"]),
  },
  computed: {
    ...mapState({
      val: (state) => state.experiment.val,
    }),
  },

  created() {
    this.getText().then(() => {
      // debugger;
      console.log(this.val);
    });
  },
  
};
</script>
