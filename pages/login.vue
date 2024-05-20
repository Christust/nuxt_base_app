<script setup lang="ts">
import authService from "@/api/factories/auth.js";

definePageMeta({
  layout: "login",
});

const email = ref("");
const password = ref("");
const authStore = useAuthStore();

function login() {
  const payload = {
    email: email.value,
    password: password.value,
  };
  authService.login(payload).then((res: any) => {
    authStore.login(res);
  });
}
</script>

<template>
  <div class="login-page">
    <div
      class="flex flex-col columns-1 border border-slate-300 py-8 px-8 max-w-xl mx-auto bg-white rounded-xl shadow-xl"
    >
      <div class="flex flex-col w-full">
        <label class="" htmlFor="email"> Usuario </label>
        <input
          class="border border-slate-300 hover:border-slate-400 focus:border-slate-400 focus:outline-none rounded-sm"
          v-model="email"
          name="email"
        />
      </div>
      <div class="flex flex-col w-full my-8">
        <label class="" htmlFor="password"> Contraseña </label>
        <input
          class="border border-slate-300 hover:border-slate-400 focus:border-slate-400 focus:outline-none rounded-sm"
          v-model="password"
          name="password"
          type="password"
        />
      </div>
      <div class="flex flex-col w-full">
        <button
          class="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
          @click="login"
        >
          Enviar
        </button>
      </div>
    </div>
  </div>
</template>
