## Agregar paginas principales.
Los archivos dentro de la carpeta pages seran considerador rutas.

npx nuxi add page index
npx nuxi add page contact
npx nuxi add page about
npx nuxi add page login

Agregamos <NuxtPage /> al app.vue para poder acceder a estas rutas.

## Agregar layouts

npx nuxi add layout default
npx nuxi add layout login

## Agregar sass

npm install sass

Agregamos nuestros estilos de la carpeta assets en nuxt.config.ts

export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/scss/index.scss']
})