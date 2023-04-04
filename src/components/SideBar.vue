<template>

    <div class="sidebar-container">
        <h2>{{title}}</h2>
        <p>{{description}}</p>
    </div>

</template>

<script>
    export default {
        name: "Sidebar",
        props: {
            title: String,
            description: String
        }
    }
</script>

<style>

.sidebar-container {
    border-radius: .5rem;
    border: 1px solid black;
}

.sidebar-container h2 {
    margin: 0;
    border-bottom: 1px solid black;
}

</style>