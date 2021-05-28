<template>
    <app-layout>
        <template v-slot:main>
            <div class="px-2 sm:px-6 lg:px-8 max-w-7xl mx-auto max-h-full">
                <div class="mt-8">
                    <photographer-tile :user="user" />
                </div>

                <div
                    class="grid grid-cols-3 gap-5 py-5"
                    v-if="data.user && data.user.albums"
                >
                    <div
                        v-for="album in data.user.albums"
                        :key="album.id"
                        class="rounded-lg bg-white"
                    >
                        <div class="relative">
                            <img
                                :src="`/${album.image}`"
                                class="rounded-t-lg"
                            />
                            <h6 class="absolute bottom-2 left-2 text-white">
                                {{ album.title }}
                            </h6>
                        </div>
                        <div class="p-2 md:p-4 lg:p-6">
                            <p class="text-black">
                                {{ album.description }}
                            </p>
                            <div class="flex justify-between mt-2">
                                <div>
                                    <svg
                                        v-if="album.is_featured"
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="h-8 w-8"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                                            clip-rule="evenodd"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <p class="text-gray-400">
                                        {{ album.date }}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
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
export default {
    components: { AppLayout, PhotographerTile },

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
