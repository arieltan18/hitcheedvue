<template>
    <div class="col-sm-4">
        <div class="text-center">
            <img class="img-circle" :src="professionalContent.profile_image">
            <h4 class="text-center professional-name">
                {{ professionalContent.name }}
            </h4>
        </div>
    </div>
</template>

<script>
export default {
    name: "ProfessionalReviews",
    props: [
        'professionalContent',
        'reviews'
    ]
}
</script>

<style scoped>
.text-center
{
    text-align: center;
}

.img-circle
{
    border-radius: 50%; 
}

.professional-name
{
    font-family: 'Open Sans';
    font-weight: normal;
    color: #25130e;
    font-size: 18px;
    font-weight: 500;
    padding-bottom: 10px;
    border-bottom: 1px solid #a1a2a3;
    margin-top:10px;
    margin-bottom: 15px;
}

</style>