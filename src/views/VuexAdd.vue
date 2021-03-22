<template>
  <div>
    <input type="text" v-model="text" />
    <button v-if="limitText" type="submit" @click="onPush">Create</button>

    <ul>
      <li
        :class="[value.colour ? 'red' : 'black']"
        v-for="(value, index) in list"
        :key="index"
      >
        <!-- <input type="text" v-if="editing"> -->
        {{ value.text }}
        <button @click="dell(index)">dell</button>
        <button @click="colour(index)">colour</button>
        <button @click="mooveUp(index)">mooveUp</button>
        <!-- <button @click="UpdateTodo">{{ editing ? "Update" : "Edit" }}</button> -->
      </li>
    </ul>

    <div v-if="!editing">
      <span class="text" @click="enableEditing">{{ text }}</span>
    </div>
    <div v-if="editing">
      <input v-model="tempValue" class="input" />
      <button @click="disableEditing">Cancel</button>
      <button @click="saveEdit">Save</button>
    </div>
   <!-- axiso -->
    <ul>
      <li v-for="(arrr, index) in arr" :key="index">
        {{arrr.body}}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from "vuex";
import axios from "axios";

export default {
  data() {
    return {
      value: "Davit",
      text: " ",
      tempValue: null,
      editing: false,
      // editing: false,
      arr: [],
    };
  },
  computed: {
    ...mapState({
      list: (state) => state.VuexAdd.list,
    }),
    ...mapGetters(["limitText"]),
  },
  destroyed() {
    this.clear();
  },
 mounted() {
      axios
        .get("http://jsonplaceholder.typicode.com/posts?_limit=3")
        .then((response) => (this.arr = response.data));
    },
  methods: {
    ...mapActions(["addText1", "clear", "dell", "colour"]),
    enableEditing: function() {
      this.tempValue = this.text;
      this.editing = true;
    },
    disableEditing: function() {
      this.tempValue = null;
      this.editing = false;
    },
    saveEdit: function() {
      // However we want to save it to the database
      this.text = this.tempValue;
      this.disableEditing();
    },

    onPush() {
      this.addText1(this.text);
      this.text = " ";
    },
   
    mooveUp(index) {
      this.list.forEach((e, i) => {
        if (i === index) {
          this.text = this.list[i].text;
        }
      });
    },
    // UpdateTodo() {
    //   this.editing = this.editing == true ? false : true;
    // },

    // saveEdited() {
    //   const params = {
    //     ...this.editingItem,
    //     text: this.text,
    //     isEditing: false,
    //   };
    //   this.saveAndCancelAction(params);
    // },
    // cancel() {
    //   const params = {
    //     ...this.editingItem,
    //     isEditing: false,
    //   };
    //   this.saveAndCancelAction(params);
    // },
    // saveAndCancelAction(params) {
    //   this.saveEditedData(params);
    //   this.text = "";
    //   this.editingItem = {};
    // },
  },
};
</script>

<style>
.black {
  color: black;
}
.red {
  color: red;
}
</style>
