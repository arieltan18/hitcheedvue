<template>
    <div>
        <div class="professional-avatar-div">
            <img :src="professional.profile_image" width="200" height="200">
        </div>
        <div class="professional-title-section">
            <h4>{{ professional.name }}</h4>
        </div>
    </div>
</template>

<script>

export default {
    name: "Professionals",
    props: ['professional'],

}
</script>

<style scoped>
.professional-avatar-div
{
    padding:10px;
}

.professional-title-section
{
    padding: 10px 10px; 
}

h4
{
    font-size: 18px;
}
</style>

