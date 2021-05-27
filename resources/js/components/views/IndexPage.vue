<template>
    <app-layout>
        <template v-slot:main>
            <div class="px-2 sm:px-6 lg:px-8 max-w-7xl mx-auto max-h-full">
                <h1 class="text-white">Looking for a Photographer?</h1>
                <h3 class="text-white">Check who is available!</h3>
                <div v-for="user in data.users" :key="user.id" class="mt-4">
                    <photographer-tile :user="user" :show-button="true" />
                </div>
            </div>
        </template>
    </app-layout>
</template>

<script>
// Vue
import { onMounted, reactive } from "@vue/runtime-core";
import { useStore } from "vuex";
// Components
import AppLayout from "../layouts/AppLayout";
import PhotographerTile from "../blocks/PhotographerTile";

export default {
    components: {
        AppLayout,
        PhotographerTile,
    },

    setup() {
        const store = useStore();
        let data = reactive({ users: null });

        onMounted(async () => {
            const response = await store.dispatch("users/get");
            data.users = { ...response.data.users };
        });

        return {
            data,
        };
    },
};
</script>
