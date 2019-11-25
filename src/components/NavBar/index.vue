<template>
    <div>
        <NavHeader></NavHeader>
        <NavMenu></NavMenu>
    </div>
</template>

<script>
    import NavHeader from "./TransparentNavHeader";
    import NavMenu from "./NavMenu";
    export default {
        name: "NavBar",
        components: {NavMenu, NavHeader}
    }
</script>

<style scoped>

</style>
