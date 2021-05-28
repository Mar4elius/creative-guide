<template>
    <app-layout>
        <template v-slot:main>
            <photographer-tile :user="user" />
        </template>
    </app-layout>
</template>
<script>
// Vue
import { onMounted, reactive } from "@vue/runtime-core";
import { useStore } from "vuex";
// Components
import AppLayout from "../../layouts/AppLayout";
import PhotographerTile from "../../blocks/PhotographerTile";
export default {
    components: { AppLayout, PhotographerTile },

    props: {
        user: {
            type: Object,
            required: true,
        },
    },

    setup() {
        let data = reactive({
            user: null,
        });
        onMounted(async () => {
            const store = useStore();
            const response = await store.dispatch("users/show");
            data.user = { ...response.data.users };
        });

        return {
            data,
        };
    },
};
</script>
