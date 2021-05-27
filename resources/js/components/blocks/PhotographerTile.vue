<template>
    <div class="bg-white rounded-md flex">
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
                <div class="w-full md:w-2/3">
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
</template>
<script>
export default {
    props: {
        user: {
            type: Object,
            required: true,
        },
    },

    setup(props) {},
};
</script>
