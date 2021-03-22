<template>
  <div>
    <input type="text" v-model="text" />
    <button v-if="showCreateTexts" type="submit" @click="handleClick">
      Create
    </button>

    <ol>
      <li
        :class="[value.isActive ? 'isblack' : 'isblue']"
        v-for="(value, index) in list"
        :key="index"
      >
       <h3 v-if="!editing">{{ value.text }}</h3> 
        <input v-else type="text"/>
        <!-- <p></p> -->
        <button @click="dellText(index)">Remove</button>
        <button @click="changeTextStatus(index)">Change Colour</button>
        <button @click="pushText(index), edit(index)">Push To Up Input</button>
        <button @click="UpdateTodo">{{ editing ? "Update" : "Edit" }}</button>
      </li>
    </ol>
  </div>
</template>
<script>
import { mapState, mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      text: "",
      isActive: true,
      editing: false,
    };
  },
  computed: {
    ...mapState({
      list: (state) => state.inputAddDelete.list,
    }),
    ...mapGetters(["showCreateTexts"]),
  },

  destroyed() {
    this.clearList();
  },

  methods: {
    ...mapActions([
      "addText",
      "dellText",
      "changeTextStatus",
      "pushText",
      "clearList",
      "edit",
    ]),
    handleClick() {
      this.addText(this.text);
      this.text = " ";
    },

    pushText(index) {
      this.list.forEach((e, i) => {
        if (i === index) {
          this.text = this.list[i].text;
        }
      });
    },
    UpdateTodo() {
      this.editing = this.editing == true ? false : true;
    },
  },
};
</script>

<style scoped>
.isblack {
  color: black;
}
.isblue {
  color: blue;
}
</style>
