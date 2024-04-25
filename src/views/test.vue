<template>
    <div class="card flex justify-content-center">
        <Dropdown v-model="selectedCity" :options="sx" option-label="name" placeholder="Xếp theo" checkmark
            :highlight-on-select="false" class="w-full md:w-14rem" />
    </div>
</template>

<script>

import Dropdown from 'primevue/dropdown';


export default {
    components: {
        Dropdown

    },
    data() {
        return {
            selectedCity: null,
            sx: [
                { name: 'Giá cao nhất', code: 'gc' },
                { name: 'Giá thấp nhất', code: 'gt' },
                { name: 'Độ phổ biến', code: 'dpb' },
                { name: 'Điểm đánh giá', code: '' },
             
            ]
        };
    },

};
</script>

<style scoped>
.card {
    margin-bottom: 160px;
    margin-top: 160px;
    width: 200px;
}
</style>
