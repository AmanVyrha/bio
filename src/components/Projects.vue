<template>
  <section id="projects" class="py-20 bg-white">
    <div class="container mx-auto">
      <h2 class="text-3xl font-bold text-center mb-6">Projects</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div
          v-for="project in projects"
          :key="project.id"
          class="p-4 border rounded shadow hover:shadow-lg transition"
        >
          <img :src="project.image" alt="" class="w-full h-32 object-cover mb-4 rounded" />
          <h3 class="text-lg font-bold">{{ project.title }}</h3>
          <p class="text-gray-600">{{ project.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          id: 1,
          title: "Project 1",
          description: "This is a project description.",
          image: "https://via.placeholder.com/300",
        },
        // Add more projects here
      ],
    };
  },
};
</script>

