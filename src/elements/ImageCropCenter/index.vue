<template>
    <div class="m-auto" :style="{width: size, borderRadius: '50%', height: size, backgroundSize:'cover', backgroundRepeat: 'no-repeat' ,backgroundImage: `url('${src}')`, backgroundPosition: 'center', display: 'block'}">
    </div>
</template>

<script>
    export default {
        name: "ImageCropCenter",
        props: ['size', 'src', 'class']
    }
</script>

<style scoped>

</style>
