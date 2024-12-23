<template>
  <header
    class="fixed top-0 left-0 w-full p-8 bg-transparent flex justify-between items-center z-50 transition-all duration-300"
  >
    <div class="text-2xl font-semibold">Logo</div>
    <nav class="flex space-x-14">
      <a href="#" class="text-lg hover:text-indigo-600">Home</a>
      <a href="#" class="text-lg hover:text-indigo-600">About</a>
      <a href="#" class="text-lg hover:text-indigo-600">Projects</a>
    </nav>
    <div class="hidden md:block text-3xl cursor-pointer">☰</div>
  </header>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style scoped>
/* Any additional specific styles can go here */
</style>
