<template>
  <div>
    <Navbar />
    <HeroSection />
    <About />
    <Projects />
    <Contact />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import HeroSection from './components/HeroSection.vue';
import About from './components/About.vue';
import Projects from './components/Projects.vue';
import Contact from './components/Contact.vue';

export default {
  components: { Navbar, HeroSection, About, Projects, Contact },
};
</script>

