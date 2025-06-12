<template>
  <div class="mizuki-home">
    <!-- Hero Section -->
    <section class="hero-section">
      <v-container class="hero-container">
        <v-row align="center" class="min-height-screen" justify="center">
          <v-col class="text-center text-md-left" cols="12" md="6">
            <div class="hero-content">
              <h1 class="hero-title">
                <span class="gradient-text">Mizuki is a cute and funny bot!</span>
              </h1>
              <p class="hero-subtitle">
                Click this button to add Mizuki to your server
              </p>
              <v-btn
                class="invite-btn"
                color="primary"
                href="https://discord.com/oauth2/authorize?client_id=1381902438168264734&permissions=8&scope=bot"
                prepend-icon="fa:fab fa-discord"
                size="x-large"
                variant="elevated"
              >
                ADD TO YOUR SERVER
              </v-btn>
            </div>
          </v-col>
          <v-col class="text-center" cols="12" md="6">
            <div class="hero-image">
              <div class="mizuki-avatar">
                <img
                  alt="Mizuki Avatar"
                  class="avatar-img"
                  src="@/assets/mizuki.webp"
                >
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Animated Top Wave Transition -->
    <div class="wave-transition top">
      <svg class="wave-svg" preserveAspectRatio="none" viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg">
        <!-- Layer 1 - Base wave -->
        <path
          class="wave-path wave-1"
          d="M0,60 C240,20 480,100 720,60 C960,20 1200,100 1440,60 L1440,120 L0,120 Z"
          fill="#DDAACC"
          opacity="1"
        />
        <!-- Layer 2 - Middle wave -->
        <path
          class="wave-path wave-2"
          d="M0,50 C360,10 720,90 1080,50 C1200,40 1320,70 1440,50 L1440,120 L0,120 Z"
          fill="#DDAACC"
          opacity="0.9"
        />
        <!-- Layer 3 - Top wave -->
        <path
          class="wave-path wave-3"
          d="M0,40 C480,0 960,80 1440,40 L1440,120 L0,120 Z"
          fill="#DDAACC"
          opacity="0.7"
        />
        <!-- Additional animated waves for movement effect -->
        <!-- <path
          class="wave-path wave-4"
          d="M-1440,60 C-1200,20 -960,100 -720,60 C-480,20 -240,100 0,60 L0,120 L-1440,120 Z"
          fill="#DDAACC"
          opacity="0.3"
        /> -->
        <!-- <path
          class="wave-path wave-5"
          d="M-1440,50 C-1080,10 -720,90 -360,50 C-240,40 -120,70 0,50 L0,120 L-1440,120 Z"
          fill="#E1B3CC"
          opacity="0.2"
        /> -->
      </svg>
    </div>

    <!-- Features Section -->
    <section class="features-section">
      <v-container>
        <div class="section-header text-center mb-12">
          <h2 class="section-title">What Mizuki can do for you?</h2>
        </div>

        <v-row>
          <v-col v-for="feature in features" :key="feature.title" cols="12" md="4">
            <v-card
              class="feature-card"
              elevation="0"
              variant="outlined"
            >
              <v-card-text class="text-center pa-8">
                <div class="feature-icon mb-4">
                  <v-icon
                    :class="feature.color"
                    :color="feature.color"
                    :icon="feature.icon"
                    size="48"
                  />
                </div>
                <h3 class="feature-title mb-4">{{ feature.title }}</h3>
                <p class="feature-description">{{ feature.description }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>

      <!-- Animated Bottom Wave Transition -->
      <div class="wave-transition bottom">
        <svg class="wave-svg" preserveAspectRatio="none" viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg">
          <!-- Layer 1 - Base wave -->
          <path
            class="wave-path wave-1"
            d="M0,60 C240,100 480,20 720,60 C960,100 1200,20 1440,60 L1440,0 L0,0 Z"
            fill="#F9E8F0"
            opacity="1"
          />
          <!-- Layer 2 - Middle wave -->
          <!-- <path
            class="wave-path wave-2"
            d="M0,70 C360,110 720,30 1080,70 C1200,80 1320,50 1440,70 L1440,0 L0,0 Z"
            fill="#F2DDE8"
            opacity="0.7"
          /> -->
          <!-- Layer 3 - Top wave -->
          <!-- <path
            class="wave-path wave-3"
            d="M0,80 C480,120 960,40 1440,80 L1440,0 L0,0 Z"
            fill="#EDD2E0"
            opacity="0.5"
          /> -->
          <!-- Additional animated waves for movement effect -->
          <!-- <path
            class="wave-path wave-4"
            d="M-1440,60 C-1200,100 -960,20 -720,60 C-480,100 -240,20 0,60 L0,0 L-1440,0 Z"
            fill="#F9E8F0"
            opacity="0.3"
          />
          <path
            class="wave-path wave-5"
            d="M-1440,70 C-1080,110 -720,30 -360,70 C-240,80 -120,50 0,70 L0,0 L-1440,0 Z"
            fill="#F2DDE8"
            opacity="0.2"
          /> -->
        </svg>
      </div>
    </section>
  </div>
</template>

<script setup>
  const features = [
    {
      title: 'Transfer Link',
      description: 'Mizuki can transfer link to embed preview so Discord don\'t having the trouble to load the link.',
      icon: 'mdi-link',
      color: 'cyan-accent-3',
    },
    {
      title: 'Image Metadata Finder',
      description: 'Mizuki can find the metadata of the image and show it to you.',
      icon: 'mdi-image-filter-none',
      color: 'pink-accent-3',
    },
    {
      title: 'Easy to Use',
      description: 'Mizuki every system and command is easy to use, but it comes with advanced options.',
      icon: 'mdi-heart',
      color: 'pink-accent-3',
    },

  ]
</script>

<style scoped lang="scss">
@import '@/styles/home.scss';
</style>
