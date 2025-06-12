<template>
  <div class="mizuki-features">
    <!-- Hero Section -->
    <section class="features-hero">
      <v-container>
        <v-row align="center" justify="center">
          <v-col class="text-center" cols="12" md="8">
            <h1 class="hero-title mb-4">
              Discover <span class="highlight">Amazing Features</span>
            </h1>
            <p class="hero-subtitle mb-6">
              Mizuki ✨ comes packed with powerful features designed to enhance your Discord server experience
            </p>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Main Features Grid -->
    <section class="features-grid">
      <v-container>
        <v-row>
          <v-col
            v-for="feature in mainFeatures"
            :key="feature.title"
            cols="12"
            lg="4"
            md="6"
          >
            <v-card
              class="feature-card h-100"
              elevation="0"
              variant="outlined"
            >
              <v-card-text class="pa-6">
                <div class="feature-icon-wrapper mb-4">
                  <v-icon
                    :color="feature.color"
                    :icon="feature.icon"
                    size="48"
                  />
                </div>
                <h3 class="feature-title mb-3">{{ feature.title }}</h3>
                <p class="feature-description mb-4">{{ feature.description }}</p>
                <v-chip
                  v-for="tag in feature.tags"
                  :key="tag"
                  class="mr-2 mb-2 feature-tag"
                  color="primary"
                  size="small"
                  variant="outlined"
                >
                  {{ tag }}
                </v-chip>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </div>
</template>

<script setup>
  const mainFeatures = [
    {
      title: 'Funny Commands',
      description: 'Mizuki has a lot of funny commands that can make your server more fun and interactive.',
      icon: 'mdi-emoticon-happy',
      color: 'primary',
      tags: ['Funny', 'Interactive', 'Fun'],
    },
    {
      title: 'Smart URL Conversion',
      description: 'Automatically converts problematic URLs to ensure Discord can properly preview images and play videos without loading issues or broken embeds.',
      icon: 'mdi-link-variant',
      color: 'success',
      tags: ['URL', 'Preview', 'Auto-Fix'],
    },
    {
      title: 'AI Image Metadata Reader',
      description: 'Analyze AI-generated artwork to reveal hidden metadata including the AI tool used, model information, prompts, and generation parameters for artists and enthusiasts.',
      icon: 'mdi-image-search',
      color: 'purple',
      tags: ['AI', 'Metadata', 'Analysis'],
    },
    {
      title: 'Image Collection System',
      description: 'Save your favorite images with a simple emoji reaction! Mizuki will privately send collected images directly to your DMs for easy access and organization.',
      icon: 'mdi-heart-outline',
      color: 'pink',
      tags: ['Collection', 'Favorites', 'DM'],
    },
    {
      title: 'Reaction Role Management',
      description: 'Assign server roles automatically based on emoji reactions. Perfect for creating self-service role selection systems and community management (requires proper permissions).',
      icon: 'mdi-account-group',
      color: 'info',
      tags: ['Roles', 'Reactions', 'Auto-Assign'],
    },
    {
      title: 'Low Latency Performance',
      description: 'Optimized hosting infrastructure ensures fast response times and minimal delays for all commands and features, providing seamless user experience.',
      icon: 'mdi-server',
      color: 'orange',
      tags: ['Performance', 'Speed', 'Reliability'],
    },
  ]
</script>

<style scoped lang="scss">
@import '@/styles/features.scss';
</style>
