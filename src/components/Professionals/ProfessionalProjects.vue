<template>
    <div>
        <h3>Other Projects by Professionals</h3>
        <div class="row">
            <div class="col-sm-4" v-for="project in projects" :key="project.id">
                <div class="thumbnail">
                    <router-link :to="{ name: 'project', params: { slug: project.slug }}">
                        <div class="image-holder">
                            <img :alt="project.name" :src="project.image">
                        </div>
                        <div class="caption text-center">
                            <p class="font-weight-bold">{{project.name}}</p>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "ProfessionalProjects",
    props: [
        'projects'
    ],
}
</script>

<style scoped>
h3
{
    font-weight: 500;
    font-family: 'Cormorant Garamond';
    font-size: 40px;
    line-height: 30px;
    color: #25130e;
    margin: 30px 0;
}

a
{
    color: rgb(137, 209, 207);
    text-decoration: none;
}

a:hover
{
    text-decoration: none;
}

.image-holder
{
    width: 100%;
    height: 340px;
    overflow: hidden;
}

.thumbnail
{
    padding: 0 0 15px 0;
    border: none;
    border-radius: 0;
}

.thumbnail img
{
    width: 100%;
    height: 100%;
    margin-bottom: 10px;
    object-fit: cover;
}

.thumbnail.caption
{
    padding: 9px;
    color: #333;
}

.text-center
{
    text-align: center;
}

.font-weight-bold
{
    margin-top: 5px !important;
    font-weight: bold;
}

.caption p
{
    font-size: 14px;
    letter-spacing: 1px;
    line-height: 20px;
    color: #25130e;
    margin: 20px 0;
}
</style>