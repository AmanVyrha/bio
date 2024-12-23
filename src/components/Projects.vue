<template>
  <section id="projects" class="bg-gray-100 py-20">
    <div class="container mx-auto">
      <h2 class="text-3xl font-bold mb-8">My Projects</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="project in projects" :key="project.id" class="bg-white rounded-md shadow-md p-4">
          <img :src="project.image" alt="Project Image" class="w-full h-48 object-cover rounded-t-md">
          <h3 class="text-xl font-bold mt-4">{{ project.title }}</h3>
          <p class="text-gray-700 mb-4">{{ project.description }}</p>
          <a :href="project.url" class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">View Project</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Projects',
  data() {
    return {
      projects: [
        {
          id: 1,
          title: 'Project 1',
          description: 'Description of Project 1',
          image: 'project1.jpg',
          url: '#'
        },
        {
          id: 2,
          title: 'Project 2',
          description: 'Description of Project 2',
          image: 'project2.jpg',
          url: '#'
        },
        {
          id: 3,
          title: 'Project 3',
          description: 'Description of Project 3',
          image: 'project3.jpg',
          url: '#'
        }
      ]
    }
  }
}
</script>