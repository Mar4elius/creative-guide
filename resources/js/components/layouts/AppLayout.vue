<template>
    <div class="min-h-screen relative flex flex-col h-full">
        <header>
            <slot name="header">
                <page-header />
            </slot>
        </header>

        <main class="flex-auto">
            <slot name="main"></slot>
        </main>

        <footer class="flex-grow-0 flex-shrink">
            <slot name="footer">
                <page-footer />
            </slot>
        </footer>
    </div>
</template>

<script>
import PageHeader from "../layouts/PageHeader";
import PageFooter from "../layouts/PageFooter";
export default {
    components: {
        PageHeader,
        PageFooter,
    },
};
</script>
