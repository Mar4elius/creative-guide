<template>
    <div class="min-h-screen relative">
        <header>
            <slot name="header">
                <page-header />
            </slot>
        </header>

        <main>
            <slot name="main"></slot>
        </main>

        <footer>
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
