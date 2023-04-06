
<template>

    <div v-for="category in categories">
        <SideBar :title=category.title :description=category.description />
    </div>

</template>

<script>
import SideBar from './SideBar.vue';

    export default {
    name: "LeftSude",
    data() {
        return {
            categories: []
        };
    },
    beforeMount() {
        this.categories = [{title: "Title 1", description: "This is a description 1"}, {title: "Title 2", description: "This is a description 2"}, {title: "Title 3", description: "This is a description 3"}, {title: "Title 4", description: "This is a description 4"}];
    },
    components: { SideBar }
}
</script>

<style>


</style>