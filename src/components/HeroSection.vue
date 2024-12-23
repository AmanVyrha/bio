<template>
  <section
    class="min-h-screen bg-cover bg-center relative"
    style="background-image: url('@/assets/Portfolio-alternative.jpg');"
  >
    <div class="absolute inset-0 bg-white bg-opacity-70"></div>
    <div class="relative z-10 flex flex-col justify-center items-start p-16">
      <h1 class="text-6xl font-bold leading-tight">
        Welcome to <span class="text-indigo-600">My Portfolio</span>
      </h1>
      <p class="text-lg mt-8 mb-16">Explore my work, skills, and achievements.</p>
      <div class="flex space-x-6">
        <button
          class="bg-indigo-600 text-white py-3 px-8 rounded-lg hover:bg-indigo-700 transition"
        >
          Learn More
        </button>
        <button
          class="bg-transparent border border-indigo-600 text-indigo-600 py-3 px-8 rounded-lg hover:bg-indigo-600 hover:text-white transition"
        >
          Contact Me
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "HeroSection",
};
</script>

<style scoped>
/* Additional scoped styles for the hero section */
</style>
