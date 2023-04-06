<script setup>

import footerComponent from './components/footer-component.vue';

import SideBar from './components/SideBar.vue';
import Navbar from "./components/Navbar.vue";
import TutorialCard from "./components/TutorialCard.vue"
import LeftSide from './components/LeftSide.vue';

</script>

<template>

  <main>

    <Navbar title="Library UPC"/>

    <div class="container">
      <div class="left-container">
        <LeftSide />
      </div>
      <div class="right-container">
        <TutorialCard title="Tutorial 1" description="Full Description Category" image="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/511RGYIWCJL.jpg" /> 
        <TutorialCard title="Tutorial 2" description="Full Description Category" image="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/511RGYIWCJL.jpg" /> 
        <TutorialCard title="Tutorial 3" description="Full Description Category" image="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/511RGYIWCJL.jpg" /> 
        <TutorialCard title="Tutorial 4" description="Full Description Category" image="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/511RGYIWCJL.jpg" /> 
      </div>
    </div>
    
    <footerComponent email="venta@library.com" number="981622558" direction="Los Manzanos 398"/>

  </main>

</template>

<style scoped>

main {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.container {
  flex: 1;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid black;
}

.left-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  border-right: 1px solid black;
  padding: 0 .5rem;
}

.right-container {
  flex: 1;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}
</style>
