<template>
  <Navbar />
  <h1 class="text-2xl font-bold underline"> Admin dashboard! </h1>
  <router-view />
</template>

<script setup>
import Navbar from '../components/Navbar.vue';
import { useRouter } from 'vue-router';

const router = useRouter();
</script>