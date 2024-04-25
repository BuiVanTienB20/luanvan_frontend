<template>
    <div class="card flex justify-content-center">
        <div class="mt-4 mb-4">
            <div class="input-container flex justify-content-between">
                <div class="input-wrapper" style="display: flex;">
                    <InputText v-model.number="value1[0]" class="w-1/3" style="width: 70px;" />

                    <InputText v-model.number="value1[1]" class="w-1/3" style="width: 100px;margin-left: 50px;" />
                </div>
                <!-- Thêm đường thẳng nối -->

            </div>
            <div>
                <Slider v-model="value1" range :min="100000" :max="10000000" class="w-full"
                    style="padding: 2px;margin: 20px;" />
            </div>
        </div>
    </div>
</template>

<script>
import InputText from 'primevue/inputtext';
import Slider from 'primevue/slider';

export default {
    components: {
        Slider,
        InputText
    },
    data() {
        return {
            value1: [2000000, 8000000]
        };
    }
};
</script>

<style scoped>
.card {
    margin-bottom: 160px;
    margin-top: 160px;
    width: 300px;
}

.input-container {
    display: flex;
    align-items: center;
}

.input-wrapper {
    width: 20px;
    position: relative;
}



.p-slider-horizontal {
    margin-top: 10px;
}
</style>