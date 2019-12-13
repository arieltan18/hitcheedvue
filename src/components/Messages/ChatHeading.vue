<template>
    <div class="chat-heading">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "ChatHeading"
    }
</script>

<style scoped>
    .chat-heading{
        display: flex;
        align-items: center;
        height: 80px;
        padding: 10px;
        border-bottom: 1px solid #e8e8e8;
    }
</style>
