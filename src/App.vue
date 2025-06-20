<script setup lang="ts">
import Card from '@/components/Card.vue';
import data from '@/data.ts';
import Hero from '@/components/Hero.vue';
</script>

<template>
    <Hero
        title="Reliable, efficient delivery"
        subtitle="Powered by Technology"
        description="Our Artificial Intelligence powered tools use millions of project data points to enssure that your project is successful"
    />
    <section class="grid gap-8 place-content-center lg:grid-rows-2 lg:grid-flow-col p-8">
        <Card
            v-for="[index, card] of data.entries()"
            :key="card.title"
            :title="card.title"
            :description="card.description"
            :image="card.image"
            :color="card.color"
            :class="index === 0 || index === 3 ? 'lg:row-span-2 lg:self-center' : ''"
        />
    </section>
</template>
