<template>
  <div class="all">
    <page-3
      v-for="(list, index) in lists"
      :key="index"
      :name="list.name"
      :price="list.price"
      :city="list.city"
    />
  </div>
</template>

<script>
import Page3 from "./Page3.vue";
export default {
  components: {
    Page3,
  },
  data() {
    return {
      lists: [
        {
          name: "Apple",
          price: "25$",
          city: "Yerevan",
        },
        {
          name: "Banana",
          price: "10$",
          city: "Madrid",
        },
        {
          name: "Orange",
          price: "5$",
          city: "Barcelona",
        },
        {
          name: "Lemon",
          price: "14$",
          city: "London",
        },
      ],
    };
  },
};
</script>



<style scoped>
.all {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}
</style>