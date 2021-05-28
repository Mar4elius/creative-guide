<template>
    <div class="w-full bg-white">
        <div class="flex justify-between">
            <div class="py-2 px-2 sm:px-6 lg:px-8 sm:py-4">
                <a href="/">
                    <div class="flex flex-col sm:flex-row items-center">
                        <img
                            alt="company-logo"
                            src="/cg-logo-main.png"
                            class="w-12 md:w-14 mr-2 md:mr-4"
                        />
                        <span>Creative Guide</span>
                    </div>
                </a>
            </div>
            <div class="flex items-center">
                <ul class="flex py-2 px-2 sm:px-6 lg:px-8 sm:py-4">
                    <li class="mr-2 md:mr-4 hover:text-red-400 hover:underline">
                        <a href="#">About</a>
                    </li>
                    <li class="mr-2 md:mr-4 hover:text-red-400 hover:underline">
                        <a href="#">Contacts</a>
                    </li>
                    <li class="mr-2 md:mr-4 hover:text-red-400 hover:underline">
                        <a href="#" class="flex text-black hover:text-red-400">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-6 w-6 text-red-400"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                />
                            </svg>
                            <span class="ml-2">Search</span></a
                        >
                    </li>
                    <li
                        class="
                            flex
                            mr-2
                            md:mr-4
                            hover:text-red-400
                            hover:underline
                        "
                    >
                        <a href="#" class="flex text-black hover:text-red-400">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-6 w-6 text-red-400"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                                />
                            </svg>
                            <span class="ml-2">Login</span></a
                        >
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
