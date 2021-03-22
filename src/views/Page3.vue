<template>
  
    <div class="form">
      <h1>Product : {{ name }}</h1>
      <p>Price : {{ price }}</p>
      <h6>City : {{ city }}</h6>
      <button>Buy</button>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    price: String,
    city: String,
  },
};
</script>

<style>

.form {
  flex-basis: 25%;
   /* width: 250px;  */
   /* height: 200px;  */
  border: 2px solid black;
  background: rgb(138, 138, 119);
  margin-bottom: 20px;
}
</style>
