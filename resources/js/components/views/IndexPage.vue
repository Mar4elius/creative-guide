<template>
    <app-layout>
        <template v-slot:main>
            <h1>Main</h1>
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
