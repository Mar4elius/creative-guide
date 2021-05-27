<template>
    <app-layout>
        <template v-slot:main>
            <div class="px-2 sm:px-6 lg:px-8 max-w-7xl mx-auto max-h-full">
                <h1>Looking for Photographer?</h1>
                <h3>Check who is available!</h3>
                <photographer-tile />
            </div>
        </template>
    </app-layout>
</template>

<script>
// Vue
import { onMounted } from "@vue/runtime-core";
// Components
import AppLayout from "../layouts/AppLayout";
import PhotographerTile from "../blocks/PhotographerTile";

export default {
    components: {
        AppLayout,
        PhotographerTile,
    },

    setup() {
        onMounted(() => {});
    },
};
</script>
