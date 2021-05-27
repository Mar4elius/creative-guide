<template>
    <div class="bg-white rounded-md md:py-3 md:px-10">
        <div class="flex justify-center">
            <div class="w-1/5 m-2 md:m-4 lg:m-6">
                <img class="rounded-full" :src="`/${user.profile_picture}`" />
            </div>

            <div class="w-4/5">
                <div class="w-full">
                    <h3 class="text-black text-md">
                        {{ user.first_name + " " + user.last_name }}
                    </h3>
                </div>
                <div class="flex flex-col md:flex-row">
                    <div class="w-full md:w-2/3 md:mr-5">
                        <h6 class="text-gray-400">Bio</h6>
                        <p class="text-black">{{ user.bio }}</p>
                    </div>
                    <div class="w-full md:w-1/3">
                        <h6 class="text-gray-400">Phone</h6>
                        <p class="text-pink-400">{{ user.phone }}</p>
                        <h6 class="text-gray-400">Email</h6>
                        <p class="text-pink-400">{{ user.email }}</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="w-full text-right md:py-3 md:px-10" v-if="showButton">
            <a
                class="
                    bg-red-400
                    text-white
                    active:bg-pink-600
                    font-bold
                    uppercase
                    text-xs
                    px-4
                    py-2
                    rounded
                    shadow
                    outline-none
                    mr-1
                    mb-1
                "
                :href="`/api/v1/users/${user.id}`"
                >Show Gallery</a
            >
        </div>
    </div>
</template>
<script>
export default {
    props: {
        user: {
            type: Object,
            required: true,
        },

        showButton: {
            type: Boolean,
            default: false,
        },
    },

    setup(props) {},
};
</script>
