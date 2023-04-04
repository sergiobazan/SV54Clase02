<template>
<div class="header">
  <!--<img class="menu" alt="menu"/>-->
  <h1>{{title}}</h1>
  <div class="user_pic"> </div>
</div>
</template>

<script>
export default {
  name: "Navbar"
}
</script>

<style scoped>
.header{
  display: flex;
  height: 150px;
  align-items: center;
}

.header h1{
  color: black;
}

.user_pic{
  width:100px;
  height:100px;
  color: grey;
  border-radius:100%
}
</style>