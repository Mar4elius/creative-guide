<template>
    <app-layout>
        <template v-slot:main>
            <div class="px-2 sm:px-6 lg:px-8 max-w-7xl mx-auto max-h-full">
                <div class="mt-8">
                    <photographer-tile :user="user" />
                </div>

                <div
                    class="grid grid-cols-3"
                    v-if="
                        data.user && data.user.albums && data.user.albums.length
                    "
                >
                    <template v-for="album in data.user.albums" :key="album.id">
                        <album-tile :album="album" />
                    </template>
                </div>
                <div v-else class="w-full flex justify-center items-center">
                    <h5>
                        This photographer does not have any images yet. Give
                        him/her some time!
                    </h5>
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
import AppLayout from "../../layouts/AppLayout";
import PhotographerTile from "../../blocks/PhotographerTile";
import AlbumTile from "../../blocks/AlbumTile";

export default {
    components: { AlbumTile, AppLayout, PhotographerTile },

    props: {
        user: {
            type: Object,
            required: true,
        },
    },

    setup(props) {
        let data = reactive({
            user: null,
        });

        onMounted(async () => {
            const store = useStore();
            const response = await store.dispatch("users/show", props.user);
            data.user = { ...response.data.user };
        });

        return {
            data,
        };
    },
};
</script>
