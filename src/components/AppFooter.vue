<template>
  <v-footer
    class="mizuki-footer"
    height="60"
  >
    <v-container class="d-flex justify-center align-center">
      <div class="social-links">
        <a
          v-for="item in items"
          :key="item.title"
          class="social-link mx-3"
          :href="item.href"
          rel="noopener noreferrer"
          target="_blank"
          :title="item.title"
        >
          <v-icon
            color="primary"
            :icon="item.icon"
            size="24"
          />
          <span class="link-text ml-2">{{ item.text }}</span>
        </a>
      </div>
    </v-container>
  </v-footer>
</template>

<script setup>
  const items = [
    {
      title: 'GitHub Repository',
      text: 'GitHub',
      icon: 'fa:fab fa-github',
      href: 'https://github.com/AmeMizuki/mizuki-discord-bot',
    },
    {
      title: 'Discord Server',
      text: 'Discord',
      icon: 'fa:fab fa-discord',
      href: 'https://discord.gg/avMvrhdX3r',
    },
  ]
</script>

<style scoped lang="scss">
.mizuki-footer {
  background: transparent !important;
  border-top: none;
}

.social-links {
  display: flex;
  gap: 24px;
  align-items: center;
}

.social-link {
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 8px 16px;
  border-radius: 8px;
  transition: all 0.3s ease;
  color: rgb(var(--v-theme-primary));

  &:hover {
    background-color: rgba(var(--v-theme-primary), 0.1);
    transform: translateY(-2px);
  }

  .link-text {
    font-weight: 500;
    font-size: 0.875rem;
    letter-spacing: 0.5px;
    color: rgb(var(--v-theme-primary));
  }
}

// Mobile responsive
@media (max-width: 600px) {
  .social-links {
    flex-direction: column;
    gap: 12px;
  }

  .social-link {
    padding: 12px 20px;
    width: 100%;
    justify-content: center;
  }
}
</style>
