<script setup lang="ts">
const frontendTecnologies = ref([
  "Nuxt 3",
  "Pinia",
  "Tailwind",
  "Axios",
  "Authgrads",
]);
const backendTecnologies = ref([
  "Django",
  "DjangoRestFramework",
  "SimpleJWT",
  "Swagger",
  "Sistema de autenticación",
  "CRUDs completos",
]);

const authStore = useAuthStore();
</script>

<template>
  <div>
    {{ authStore.current_user }}
    <main>
      <div>
        <p>
          Este proyecto fue construido con la intención de que sirviera de
          practica para la implementación de diferentes tecnologias y
          herramientas de una forma concentrada.
        </p>
        <div class="">
          <div class="">
            <div class="">
              <h5 class="">Frontend</h5>
              <p class="">
                Para el frontend hasta el momento se esta utilizando lo
                siguiente:
              </p>
              <ul>
                <li
                  v-for="(tecnologie, index) in frontendTecnologies"
                  :key="tecnologie + index"
                  v-text="tecnologie"
                ></li>
              </ul>
            </div>
          </div>

          <div class="">
            <div class="">
              <h5 class="">Backend</h5>
              <p class="">
                Para el backend hasta el momento se esta utilizando lo
                siguiente:
              </p>
              <ul>
                <li
                  v-for="(tecnologie, index) in backendTecnologies"
                  :key="tecnologie + index"
                  v-text="tecnologie"
                ></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
