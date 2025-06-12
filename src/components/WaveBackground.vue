<template>
  <div class="wave-background" :class="{ animated: animated }">
    <svg
      class="wave-svg"
      preserveAspectRatio="none"
      viewBox="0 0 1440 320"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient
          id="waveGradient"
          x1="0%"
          x2="100%"
          y1="0%"
          y2="0%"
        >
          <stop offset="0%" :style="`stop-color:${color1};stop-opacity:${opacity}`" />
          <stop offset="50%" :style="`stop-color:${color2};stop-opacity:${opacity * 0.8}`" />
          <stop offset="100%" :style="`stop-color:${color3};stop-opacity:${opacity}`" />
        </linearGradient>
      </defs>
      <path
        class="wave-path"
        :d="wavePath"
        :fill="useGradient ? 'url(#waveGradient)' : color1"
      />
    </svg>
  </div>
</template>

<script setup>
  import { computed, onMounted, ref } from 'vue'

  const props = defineProps({
    // Wave colors
    color1: {
      type: String,
      default: 'var(--mizuki-primary)',
    },
    color2: {
      type: String,
      default: 'var(--mizuki-accent)',
    },
    color3: {
      type: String,
      default: 'var(--mizuki-secondary)',
    },
    // Wave opacity
    opacity: {
      type: Number,
      default: 1,
    },
    // Use gradient
    useGradient: {
      type: Boolean,
      default: true,
    },
    // Animation
    animated: {
      type: Boolean,
      default: true,
    },
    // Wave type
    type: {
      type: String,
      default: 'smooth', // smooth, sharp, gentle
      validator: value => ['smooth', 'sharp', 'gentle'].includes(value),
    },
    // Position
    position: {
      type: String,
      default: 'bottom', // top, bottom
      validator: value => ['top', 'bottom'].includes(value),
    },
  })

  const waveVariations = {
    smooth: 'M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,138.7C960,139,1056,117,1152,122.7C1248,128,1344,160,1392,176L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z',
    sharp: 'M0,224L48,208C96,192,192,160,288,165.3C384,171,480,213,576,213.3C672,213,768,171,864,165.3C960,160,1056,192,1152,197.3C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z',
    gentle: 'M0,160L48,170.7C96,181,192,203,288,197.3C384,192,480,160,576,154.7C672,149,768,171,864,181.3C960,192,1056,192,1152,181.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z',
  }

  const wavePath = computed(() => {
    let path = waveVariations[props.type]

    // Flip the wave if position is top
    if (props.position === 'top') {
      // Transform the path to flip it vertically
      path = path.replace(/(\d+),(\d+)/g, (match, x, y) => {
        const newY = 320 - Number.parseInt(y)
        return `${x},${newY}`
      })
    }

    return path
  })
</script>

<style scoped lang="scss">
.wave-background {
  position: relative;
  width: 100%;
  overflow: hidden;
  line-height: 0;
}

.wave-svg {
  position: relative;
  display: block;
  width: calc(100% + 1.3px);
  height: 100px;

  @media (max-width: 768px) {
    height: 60px;
  }
}

.wave-path {
  transition: all 0.3s ease;
}

.animated {
  .wave-path {
    animation: waveAnimation 8s ease-in-out infinite;
  }
}

@keyframes waveAnimation {
  0%, 100% {
    transform: translateX(0px);
  }
  25% {
    transform: translateX(-10px) scaleY(1.02);
  }
  50% {
    transform: translateX(5px) scaleY(0.98);
  }
  75% {
    transform: translateX(-5px) scaleY(1.01);
  }
}

// Position variants
.wave-background {
  &.top {
    transform: rotate(180deg);
  }
}
</style>
