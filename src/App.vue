<script setup lang="ts">
import Card from '@/components/Card.vue';
import data from '@/data.ts';
import Hero from '@/components/Hero.vue';
</script>

<template>
    <Hero
        class="animate-hero"
        title="Reliable, efficient delivery"
        subtitle="Powered by Technology"
        description="Our Artificial Intelligence powered tools use millions of project data points to enssure that your project is successful"
    />

    <section class="grid gap-8 place-content-center lg:grid-rows-2 lg:grid-flow-col p-8 animate-cards">
        <Card
            v-for="[index, card] of data.entries()"
            :key="card.title"
            :title="card.title"
            :description="card.description"
            :image="card.image"
            :color="card.color"
            :alt="`Icon of ${card.alt}`"
            :class="index === 0 || index === 3 ? 'lg:row-span-2 lg:self-center' : ''"
        />
    </section>
</template>

<style scoped>
.animate-hero {
    animation: slideInFromTop 0.7s ease-in forwards;
    transform: translateY(-32px);
    opacity: 0;
}

.animate-cards {
    animation: slideInFromTop 0.7s ease-in 0.7s forwards;
    transform: translateY(-32px);
    opacity: 0;
}

@keyframes slideInFromTop {
    to {
        transform: translateY(0);
        opacity: 1;
    }
}
</style>
