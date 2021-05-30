<template>
    <a href="#">
        <div
            class="
                rounded-lg
                bg-white
                transform
                transition
                duration-200
                hover:scale-105
                mx-3
                mt-6
            "
        >
            <div class="relative">
                <img :src="`/${album.image}`" class="rounded-t-lg" />
                <h6 class="absolute bottom-2 left-2 text-white">
                    {{ album.title }}
                </h6>
            </div>
            <div class="p-2 md:p-4 lg:p-6">
                <p class="text-black text-sm">
                    {{ album.description }}
                </p>
                <div class="flex justify-between mt-2">
                    <div>
                        <svg
                            v-if="album.is_featured"
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-8 w-8 fill-current text-red-500"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                                clip-rule="evenodd"
                            />
                        </svg>
                        <!-- so album tiles are the same size -->
                        <div v-else class="h-8 w-8" />
                    </div>
                    <div>
                        <p class="text-gray-400">
                            {{ album.date }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </a>
</template>
<script>
export default {
    props: {
        album: {
            type: Object,
            required: true,
        },
    },
};
</script>
