<template>
  <section id="contact" class="bg-gradient-to-r from-gray-900 to-blue-900 text-white py-24">
    <div class="container mx-auto">
      <h2 class="text-4xl font-bold mb-8 tracking-wide">Get in Touch</h2>
      <form class="max-w-md mx-auto">
        <div class="mb-6">
          <label for="name" class="block text-gray-400 font-bold mb-2 tracking-wide">Name</label>
          <input type="text" id="name" class="border-2 border-gray-700 rounded-full px-6 py-4 w-full bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300" required>
        </div>
        <div class="mb-6">
          <label for="email" class="block text-gray-400 font-bold mb-2 tracking-wide">Email</label>
          <input type="email" id="email" class="border-2 border-gray-700 rounded-full px-6 py-4 w-full bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300" required>
        </div>
        <div class="mb-6">
          <label for="message" class="block text-gray-400 font-bold mb-2 tracking-wide">Message</label>
          <textarea id="message" class="border-2 border-gray-700 rounded-2xl px-6 py-4 w-full bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300" rows="4" required></textarea>
        </div>
        <button type="submit" class="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors duration-300">Send Message</button>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Contact'
}
</script>

<style scoped>
.bg-gradient-to-r {
  background: linear-gradient(to right, #1a202c, #2b6cb0);
}

.text-4xl {
  font-size: 2.25rem;
}

.font-bold {
  font-weight: 700;
}

.tracking-wide {
  letter-spacing: 0.025em;
}

.max-w-md {
  max-width: 28rem;
}

.mx-auto {
  margin-left: auto;
  margin-right: auto;
}

.mb-6 {
  margin-bottom: 1.5rem;
}

.block {
  display: block;
}

.text-gray-400 {
  color: #cbd5e0;
}

.font-bold {
  font-weight: 700;
}

.mb-2 {
  margin-bottom: 0.5rem;
}

.border-2 {
  border-width: 2px;
}

.border-gray-700 {
  border-color: #4a5568;
}

.rounded-full {
  border-radius: 9999px;
}

.px-6 {
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}

.py-4 {
  padding-top: 1rem;
  padding-bottom: 1rem;
}

.w-full {
  width: 100%;
}

.bg-gray-800 {
  background-color: #2d3748;
}

.focus\:outline-none:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
}

.focus\:ring-2:focus {
  box-shadow: 0 0 0 2px rgba(66, 153, 225, 0.5);
}

.focus\:ring-blue-500:focus {
  --tw-ring-color: #4299e1;
}

.transition-colors {
  transition-property: color, background-color, border-color, text