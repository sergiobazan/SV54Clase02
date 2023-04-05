
<template>
<div class="tutorial">
    <h1>{{title}}</h1>
    <img :src="image" alt="">
    <p>{{description}}</p>
</div>
</template>

<script>
export default {
  name: "TutorialCard",
  props: {
    title: String,
    image: String,
    description: String
  }
}
</script>

<style scoped>

.tutorial {
    margin: auto;
}

img {
    width: 150px;
    height: 120px;
}

</style>