<script>
import AHeader from "@/components/AHeader.vue";
import AMenu from "@/components/AMenu.vue";

export default {

    components: {

        AHeader,

        AMenu,
    },



};
</script>


<template>
    <div>



        <div class="row">
            <div class="col-sm-3">
                <AMenu />

            </div>

            <div class="col-sm-9">
                <AHeader />

                <router-view></router-view>

            </div>


        </div>



    </div>
</template>
<style>
.page {
    max-width: 400px;
    margin: auto;
}
</style>