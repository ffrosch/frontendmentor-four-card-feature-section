<script setup lang="ts">
import { defineProps } from 'vue';

defineProps<{
    title: string;
    subtitle: string;
    description: string;
}>();
</script>

<template>
    <section class="my-12 sm:mt-24 sm:mb-16 max-w-[620px] mx-auto text-center flex flex-col gap-3 p-6">
        <h1 class="text-neutral-grey-400 text-4xl font-light">{{ title }}</h1>
        <h2 class="text-neutral-grey-500 text-4xl font-bold mb-2">{{ subtitle }}</h2>
        <p class="text-neutral-grey-500">{{ description }}</p>
    </section>
</template>
