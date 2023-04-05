<template>
<div class="header">
  <!--<img class="menu" alt="menu"/>-->
  <h1>{{title}}</h1>
  <div class="user_pic"> </div>
</div>
</template>

<script>
export default {
  name: "Navbar",
  props: {
    title: String
  }
}
</script>

<style scoped>
.header{
  display: flex;
  align-items: center;
}

.header h1{
  color: black;
}

</style>