<template>
  <div class="mizuki-support">
    <v-container>
      <v-row align="center" class="min-height-screen" justify="center">
        <v-col class="text-center" cols="12" lg="6" md="8">
          <div class="support-content">
            <v-icon
              class="mb-6"
              color="primary"
              icon="mdi-help-circle"
              size="80"
            />

            <h1 class="support-title mb-6">
              Need <span class="highlight">Help</span>?
            </h1>

            <p class="support-description mb-8">
              Join Mizuki bot's support server! If you have any questions about using the bot or have new ideas to share, feel free to join our community.
            </p>

            <v-btn
              class="support-btn"
              color="primary"
              href="https://discord.gg/avMvrhdX3r"
              prepend-icon="fa:fab fa-discord"
              size="x-large"
              target="_blank"
              variant="elevated"
            >
              JOIN SUPPORT SERVER
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
//
</script>

<style scoped lang="scss">
.mizuki-support {
  background: #F9E8F0;
  min-height: 100vh;
  display: flex;
  align-items: center;
}

.min-height-screen {
  min-height: 80vh;
}

.support-content {
  animation: fadeInUp 1s ease-out;
}

.support-title {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  color: var(--mizuki-dark);

  .highlight {
    color: var(--mizuki-primary);
    background: linear-gradient(to bottom, var(--mizuki-primary), var(--mizuki-accent));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
}

.support-description {
  font-size: 1.2rem;
  color: rgba(var(--v-theme-on-surface), 0.8);
  line-height: 1.6;
  max-width: 600px;
  margin: 0 auto;
}

.support-btn {
  font-size: 1.1rem;
  font-weight: 600;
  padding: 16px 32px !important;
  border-radius: 12px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  box-shadow: var(--mizuki-shadow);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: var(--mizuki-shadow-hover);
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

// Responsive design
@media (max-width: 960px) {
  .support-title {
    text-align: center;
  }

  .support-description {
    text-align: center;
  }
}
</style>
