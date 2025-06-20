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
    <div class="grid gap-8 place-content-center">
        <Card
            v-for="card in data"
            :key="card.title"
            :title="card.title"
            :description="card.description"
            :image="card.image"
            :color="card.color"
        />
    </div>
</template>
