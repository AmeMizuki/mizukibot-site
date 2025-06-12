<template>
  <v-app theme="mizuki">
    <v-app-bar
      class="mizuki-navbar"
      color="surface"
      elevation="0"
      height="64"
    >
      <!-- Logo Section -->
      <v-app-bar-title class="logo-section">
        <router-link class="logo-link" to="/">
          <div class="logo-container">
            <img
              alt="Mizuki Logo"
              class="logo-png"
              src="@/assets/logo.png"
            >
          </div>
        </router-link>
      </v-app-bar-title>

      <v-spacer />

      <!-- Navigation Menu -->
      <div class="nav-menu d-none d-md-flex">
        <v-btn
          v-for="item in navItems"
          :key="item.title"
          class="nav-item"
          :class="{ 'nav-item--active': $route.path === item.to }"
          :to="item.to"
          variant="text"
        >
          {{ item.title }}
        </v-btn>
      </div>

      <v-spacer />

      <!-- Invite Button -->
      <div class="invite-section">
        <v-btn
          class="invite-btn"
          color="primary"
          prepend-icon="mdi-plus"
          variant="elevated"
        >
          INVITE
        </v-btn>
      </div>

      <!-- Mobile Menu -->
      <v-app-bar-nav-icon
        class="d-md-none"
        @click="drawer = !drawer"
      />
    </v-app-bar>

    <!-- Mobile Navigation Drawer -->
    <v-navigation-drawer
      v-model="drawer"
      class="d-md-none"
      location="right"
      temporary
    >
      <v-list>
        <v-list-item
          v-for="item in navItems"
          :key="item.title"
          :to="item.to"
          @click="drawer = false"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main class="mizuki-background">
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup>
  import { ref } from 'vue'
  import { useRoute } from 'vue-router'

  const route = useRoute()
  const drawer = ref(false)

  const navItems = [
    { title: 'HOME', to: '/' },
    { title: 'FEATURES', to: '/features' },
    { title: 'COMMANDS', to: '/commands' },
    { title: 'SUPPORT', to: '/support' },
    { title: 'TERMS & SERVICE', to: '/terms' },
    { title: 'PRIVACY POLICY', to: '/privacy' },
  ]
</script>

<style scoped lang="scss">
@import '@/styles/app.scss';
</style>
