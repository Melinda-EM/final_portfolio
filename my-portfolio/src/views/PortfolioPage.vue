<template>
  <div class="bg-gray-100">
    <LandingPage />
    <ProjectsSection />
    <SkillsSection />
    <AboutSection />
  </div>
</template>

<script>
import LandingPage from '@/components/LandingPage.vue';
import ProjectsSection from '@/components/ProjectsSection.vue';
import SkillsSection from '@/components/SkillsSection.vue';
import AboutSection from '@/components/AboutSection.vue';

export default {
  name: 'PortfolioPage',
  components: {
    LandingPage,
    ProjectsSection,
    SkillsSection,
    AboutSection,
    // Ajoutez d'autres composants nécessaires ici
  },
};
</script>

<style scoped>
/* Styles spécifiques à PortfolioPage.vue */
/* Utilisez Tailwind CSS ou des styles personnalisés ici */
.bg-gray-100 {
  min-height: 100vh;
}
</style>
