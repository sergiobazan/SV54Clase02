<script setup>
import HelloWorld from './components/HelloWorld.vue'

import footerComponent from './components/footer-component.vue';

import SideBar from './components/SideBar.vue';
import Navbar from "./components/Navbar.vue";

</script>

<template>
  <Navbar title="Library UPC"/>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>

  </div> 
   
  

  
  <HelloWorld msg="Test title" />
  <footerComponent email="venta@library.com" number="981622558" direction="Los Manzanos 398"/>
  <SideBar title="Category 1" description="This section has description" />

</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
