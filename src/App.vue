<template>
  <div id="app">
    <Navbar />
    <HeroSection />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import HeroSection from "./components/HeroSection.vue";

export default {
  name: "App",
  components: {
    Navbar,
    HeroSection,
  },
};
</script>

<style>
/* Add global styles if needed */
body {
  @apply bg-white text-indigo-800 font-poppins;
}
</style>
