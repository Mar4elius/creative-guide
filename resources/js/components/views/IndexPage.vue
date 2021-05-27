<template>
    <app-layout>
        <template v-slot:main>
            <div class="px-2 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <h1>Main</h1>
            </div>
        </template>
    </app-layout>
</template>

<script>
import AppLayout from "../layouts/AppLayout";

export default {
    components: {
        AppLayout,
    },

    setup() {},
};
</script>
