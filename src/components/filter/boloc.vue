<template>
    <div class="">
        <div class="bla col-sm-12 mb-4">
            <b>Bộ lọc đã áp dụng</b>




        </div>
        <div class="bl col-sm-12">
            <b>Bộ lọc phổ biến cho</b>
            <div class="check col-sm-12">
                <a-checkbox v-model="checked">Khách sạn</a-checkbox>
            </div>
            <div class="check col-sm-12">
                <a-checkbox v-model="checked"> <a-rate :value="5" disabled /></a-checkbox>
            </div>
            <div class="check col-sm-12">
                <a-checkbox v-model="checked"> <a-rate :value="4" disabled /></a-checkbox>
            </div>
            <div class="check col-sm-12">
                <a-checkbox v-model="checked">Hồ bơi</a-checkbox>
            </div>
        </div>
        <div class="bl col-sm-12" style="height: 150px;">
            <b>Phạm vi giá</b>
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
        <div class="bl col-sm-12" style="height: 100px;">
            <b>Chính sách đặt phòng</b>
            <div class="check col-sm-12">
                <a-checkbox v-model="checked">Miễn phí hủy</a-checkbox>
            </div>

        </div>
        <div class="bl col-sm-12" style="height: 240px;">
            <b>Hạng sao</b>
            <div class="check col-sm-12">
                <a-checkbox v-model="checked"> <a-rate :value="1" disabled /></a-checkbox>
            </div>
            <div class="check col-sm-12">
                <a-checkbox v-model="checked"> <a-rate :value="2" disabled /></a-checkbox>
            </div>
            <div class="check col-sm-12">
                <a-checkbox v-model="checked"> <a-rate :value="3" disabled /></a-checkbox>
            </div>
            <div class="check col-sm-12">
                <a-checkbox v-model="checked"> <a-rate :value="4" disabled /></a-checkbox>
            </div>
            <div class="check col-sm-12">
                <a-checkbox v-model="checked"> <a-rate :value="5" disabled /></a-checkbox>
            </div>
        </div>
        <div class="bl col-sm-12" style="height: 400px;">
            <b>Tiện nghi</b>
            <div class="check col-sm-12">
                <a-checkbox v-model="checked">Wifi</a-checkbox>
            </div>
            <div class="check col-sm-12">
                <a-checkbox v-model="checked">Hồ bơi</a-checkbox>
            </div>
            <div class="check col-sm-12">
                <a-checkbox v-model="checked">Chỗ đậu xe</a-checkbox>
            </div>
            <div class="check col-sm-12">
                <a-checkbox v-model="checked">Nhà hàng</a-checkbox>
            </div>
            <div class="check col-sm-12">
                <a-checkbox v-model="checked">Lễ tân 24h</a-checkbox>
            </div>
            <div class="check col-sm-12">
                <a-checkbox v-model="checked">Thang máy</a-checkbox>
            </div>
            <div class="check col-sm-12">
                <a-checkbox v-model="checked">Lối dành cho xe lăn</a-checkbox>
            </div>
            <div class="check col-sm-12">
                <a-checkbox v-model="checked">Trung tâm thể dục</a-checkbox>
            </div>
            <div class="check col-sm-12">
                <a-checkbox v-model="checked">Phòng họp</a-checkbox>
            </div>
            <div class="check col-sm-12">
                <a-checkbox v-model="checked">Đưa đón săn bay</a-checkbox>
            </div>
        </div>
        <div class="bl col-sm-12" style="height: 140px;">
            <b>Loại hình lưu trú</b>
            <div class="check col-sm-12">
                <a-checkbox v-model="checked">Khu nghỉ dưỡng</a-checkbox>
            </div>
            <div class="check col-sm-12">
                <a-checkbox v-model="checked">Biệt thự</a-checkbox>
            </div>
            <div class="check col-sm-12">
                <a-checkbox v-model="checked">Khách san</a-checkbox>
            </div>

        </div>

    </div>

</template>

<script>
import InputText from 'primevue/inputtext';
import Slider from 'primevue/slider';
export default {
    component: {
        Slider,
        InputText
    },
    data() {
        return {
            value1: [2000000, 8000000]
        }
    },

}
</script>

<style scoped>
.bla {
    background-image: linear-gradient(92deg, rgb(189, 233, 255) 0%, rgb(214, 241, 255) 50%, rgb(214, 241, 255) 100%);
    border-radius: 20px;
    height: 200px;




}

.bl {
    margin-top: 25px;
    border-radius: 20px;
    border: 1px solid #3333;
    width: 500px;
    height: 200px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
    cursor: pointer;
}

.check {
    padding-top: 10px;
}

.tn {
    margin-right: 100px;
}

.ngl {
    margin-right: 75px;
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