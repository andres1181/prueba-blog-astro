import { defineConfig } from 'astro/config'
import preact from '@astrojs/preact'

// https://astro.build/config
export default defineConfig({
  site: 'https://prueba-blog-astro.netlify.app',
  integrations: [preact()]
})
