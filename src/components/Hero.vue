<script setup lang="ts">
defineProps<{
    title: string;
    subtitle: string;
    description: string;
}>();
</script>

<template>
    <section class="grid py-12 p-6 sm:pt-24 sm:pb-16 max-w-[620px] text-center gap-3">
        <h1 class="text-neutral-grey-400 text-4xl font-light">{{ title }}</h1>
        <h2 class="text-neutral-grey-500 text-4xl font-bold pb-2">{{ subtitle }}</h2>
        <p class="text-neutral-grey-500">{{ description }}</p>
    </section>
</template>
