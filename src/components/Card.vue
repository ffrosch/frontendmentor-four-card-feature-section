<script setup lang="ts">
import type { CardData } from '@/types';

defineProps<CardData>();
</script>

<template>
    <article
        class="flex flex-col gap-3 min-w-[320px] max-w-[560px] lg:max-w-[420px] p-10 pb-12 border-t-4 rounded-lg shadow-2xl bg-neutral-white"
        :class="{
            'border-primary-red': color === 'red',
            'border-primary-blue': color === 'blue',
            'border-primary-orange': color === 'orange',
            'border-primary-cyan': color === 'cyan',
        }"
    >
        <h3 class="text-neutral-grey-500 text-2xl font-bold">{{ title }}</h3>
        <p class="text-neutral-grey-400 mb-8">{{ description }}</p>
        <img
            :src="image"
            :alt="alt"
            class="self-end w-16 h-16"
        />
    </article>
</template>
