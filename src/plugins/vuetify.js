/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Composables
import { createVuetify } from 'vuetify'
import { fa } from 'vuetify/iconsets/fa'
import { aliases, mdi } from 'vuetify/iconsets/mdi'

// Styles
import '@mdi/font/css/materialdesignicons.css'
import '@fortawesome/fontawesome-free/css/all.css'
import 'vuetify/styles'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
      fa,
    },
  },
  theme: {
    defaultTheme: 'mizuki',
    themes: {
      mizuki: {
        dark: false,
        colors: {
          'primary': '#DDAACC',
          'secondary': '#F4D2E7',
          'accent': '#E8B4CB',
          'error': '#FF5252',
          'info': '#2196F3',
          'success': '#4CAF50',
          'warning': '#FFC107',
          'surface': '#F9E8F0',
          'background': '#FEFCFD',
          'on-primary': '#FFFFFF',
          'on-secondary': '#5D4E75',
          'on-surface': '#2D1B3D',
          'on-background': '#2D1B3D',
        },
      },
      dark: {
        dark: true,
        colors: {
          primary: '#DDAACC',
          secondary: '#F4D2E7',
          accent: '#E8B4CB',
          surface: '#2D1B3D',
          background: '#1A1A1A',
        },
      },
    },
  },
})
