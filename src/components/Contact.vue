<template>
  <section id="contact" class="py-20 bg-gray-200">
    <div class="container mx-auto text-center">
      <h2 class="text-3xl font-bold mb-4">Contact Me</h2>
      <p class="mb-6">Feel free to reach out!</p>
      <form @submit.prevent="sendMessage" class="space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          class="w-full p-2 border rounded"
          v-model="name"
        />
        <input
          type="email"
          placeholder="Your Email"
          class="w-full p-2 border rounded"
          v-model="email"
        />
        <textarea
          placeholder="Your Message"
          class="w-full p-2 border rounded"
          rows="4"
          v-model="message"
        ></textarea>
        <button
          type="submit"
          class="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"
        >
          Send Message
        </button>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      message: "",
    };
  },
  methods: {
    sendMessage() {
      alert(`Message sent by ${this.name}`);
    },
  },
};
</script>

