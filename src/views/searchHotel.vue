<template>
    <div class="hotel">
        <div class="ca">
            <div class="bt">
                <svg width="26" height="26" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"
                    class="mr-2" data-id="IcSystemMapLocationFill12">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M6 12C6 12 10.5 8.5 10.5 5.5C10.5 2.73858 8.76142 0.5 6 0.5C3.23858 0.5 1.5 2.73858 1.5 5.5C1.5 8.5 6 12 6 12ZM6 7C7.10457 7 8 6.10457 8 5C8 3.89543 7.10457 3 6 3C4.89543 3 4 3.89543 4 5C4 6.10457 4.89543 7 6 7Z"
                        fill="#FFFFFF"></path>
                </svg>
                <Dropdown v-model="selectedProvince" :options="provinces" filter optionLabel="name"
                    placeholder="Chọn một địa điểm bạn muốn tìm kiếm" class="w-full md:w-14rem">
                    <template slot="value" slot-scope="slotProps">
                        <div v-if="slotProps.value" class="flex align-items-center">
                            <img :alt="slotProps.value.label"
                                src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png"
                                :class="`mr-2 flag flag-${slotProps.value.code.toLowerCase()}`" style="width: 18px" />
                            <div>{{ slotProps.value.name }}</div>
                        </div>
                        <span v-else>
                            {{ slotProps.placeholder }}
                        </span>
                    </template>
                    <template slot="option" slot-scope="slotProps">
                        <div class="flex align-items-center">
                            <img :alt="slotProps.option.label"
                                src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png"
                                :class="`mr-2 flag flag-${slotProps.option.code.toLowerCase()}`" style="width: 18px" />
                            <div>{{ slotProps.option.name }}</div>
                        </div>
                    </template>
                </Dropdown>
            </div>
            <div class="bt">
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none"
                    style="color: #FFFF" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round"
                    class="mr-2  icon icon-tabler icons-tabler-outline icon-tabler-building-skyscraper">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M3 21l18 0" />
                    <path d="M5 21v-14l8 -4v18" />
                    <path d="M19 21v-10l-6 -4" />
                    <path d="M9 9l0 .01" />
                    <path d="M9 12l0 .01" />
                    <path d="M9 15l0 .01" />
                    <path d="M9 18l0 .01" />
                </svg>
                <Dropdown v-model="selectedHt" :options="hts" filter optionLabel="name"
                    placeholder="Chọn khách sạn bạn muốn tìm kiếm" class="w-full md:w-14rem">
                    <template slot="value" slot-scope="slotProps">
                        <div v-if="slotProps.value" class="flex align-items-center">
                            <img :alt="slotProps.value.label"
                                src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png"
                                :class="`mr-2 flag flag-${slotProps.value.code.toLowerCase()}`" style="width: 18px" />
                            <div>{{ slotProps.value.name }}</div>
                        </div>
                        <span v-else>
                            {{ slotProps.placeholder }}
                        </span>
                    </template>
                    <template slot="option" slot-scope="slotProps">
                        <div class="flex align-items-center">
                            <img :alt="slotProps.option.label"
                                src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png"
                                :class="`mr-2 flag flag-${slotProps.option.code.toLowerCase()}`" style="width: 18px" />
                            <div>{{ slotProps.option.name }}</div>
                        </div>
                    </template>
                </Dropdown>

            </div>
            <div class="bt">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                    class="mr-2" data-id="IcHotelRoomGuest">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M7.99958 15C13 15 13 21 13 21H3C3 21 2.99916 15 7.99958 15Z" stroke="#FFFFFF"
                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M8 13C9.65685 13 11 11.6569 11 10C11 8.34315 9.65685 7 8 7C6.34315 7 5 8.34315 5 10C5 11.6569 6.34315 13 8 13Z"
                        stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path d="M9 4V3H20V21M20 21H21M20 21H16M13 7H17M17 12H15M17 12V10.5M17 12V13" stroke="#FFFFFF"
                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
                <Button :label="`${value1} Người lớn, ${value2} Trẻ em, ${value3} Phòng`" @click="showDialog"
                    severity="secondary" style="border-radius: 10px" />

                <Dialog v-model:visible="visible" modal header="" :style="{ width: '25rem', borderRadius: '10px' }"
                    :showHeader="false">

                    <div class="flex align-items-center gap-3  mt-3 mb-3 ">
                        <b class="ngl"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round"
                                class="icon mr-2 icon-tabler icons-tabler-outline icon-tabler-user-share">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                                <path d="M6 21v-2a4 4 0 0 1 4 -4h3" />
                                <path d="M16 22l5 -5" />
                                <path d="M21 21.5v-4.5h-4.5" />
                            </svg> Người lớn:</b>
                        <InputNumber v-model="value1" :inputId="'horizontal-buttons1'" showButtons
                            :buttonLayout="'horizontal'" :step="1" :inputStyle="{ width: '48px' }" :min="1" />
                    </div>

                    <div class="flex align-items-center gap-3  mb-3 ">
                        <b class="tn"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round"
                                class="icon mr-2 icon-tabler icons-tabler-outline icon-tabler-horse-toy">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M3.5 17.5c5.667 4.667 11.333 4.667 17 0" />
                                <path
                                    d="M19 18.5l-2 -8.5l1 -2l2 1l1.5 -1.5l-2.5 -4.5c-5.052 .218 -5.99 3.133 -7 6h-6a3 3 0 0 0 -3 3" />
                                <path d="M5 18.5l2 -9.5" />
                                <path d="M8 20l2 -5h4l2 5" />
                            </svg>Trẻ em:</b>
                        <InputNumber v-model="value2" :inputId="'horizontal-buttons2'" showButtons
                            :buttonLayout="'horizontal'" :step="1" :inputStyle="{ width: '48px' }" :min="0" />
                    </div>

                    <div class="flex align-items-center gap-3  mb-3 ">
                        <b class="tn"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round"
                                class="icon mr-2 icon-tabler icons-tabler-outline icon-tabler-door">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M14 12v.01" />
                                <path d="M3 21h18" />
                                <path d="M6 21v-16a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v16" />
                            </svg>Phòng:</b>
                        <InputNumber v-model="value3" :inputId="'horizontal-buttons3'" showButtons
                            :buttonLayout="'horizontal'" :step="1" :inputStyle="{ width: '48px' }" :min="1"
                            :max="value1" />
                    </div>

                    <div class="flex justify-content-end gap-2" :style="{ marginLeft: '250px' }">
                        <Button type="button" label="Xong" severity="secondary" @click="closeDialog"></Button>
                    </div>
                </Dialog>
            </div>
            <div class="bt">
                <button class="btn btn-warning text-white"><svg xmlns="http://www.w3.org/2000/svg" width="24"
                        height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                        stroke-linecap="round" stroke-linejoin="round"
                        class="icon icon-tabler icons-tabler-outline icon-tabler-zoom">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                        <path d="M21 21l-6 -6" />
                    </svg></button>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-sm-3">
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
                                    <div style="display: flex;">
                                        <InputText v-model.number="value4[0]" class="w-1/3" style="width: 90px;" />
                                        <p class="ml-1">đến</p>
                                    </div>



                                    <div style="display: flex;">
                                        <InputText v-model.number="value4[1]" class="w-1/3"
                                            style="width: 100px;margin-left: 5px;" />

                                    </div>
                                </div>
                            </div>
                            <div>
                                <Slider v-model="value4" range :min="100000" :max="10000000" class="w-full"
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
                    <div class="bl col-sm-12" style="height: 410px;">
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
                        <div class="check col-sm-12">
                            <a-checkbox v-model="checked">Quầy ba</a-checkbox>
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
                <!-- chon theo cam tinh -->
                <div class="col-sm-9">
                    <div class="col-sm-12" style="display: flex;">
                        <div class="col-sm-6">
                            <Carchon></Carchon>

                        </div>
                        <!-- chon theo cam tinh -->

                        <div class="col-sm-3 mt-3">
                            <Dropdown v-model="selectedGia" :options="gia" option-label="name" placeholder="Xếp theo"
                                checkmark :highlight-on-select="false" class="w-full md:w-14rem" />
                        </div>

                        <div class="col-sm-6 mt-3">
                            <Dropdown v-model="selectedSx" :options="sx" option-label="name" placeholder="Xếp theo"
                                checkmark :highlight-on-select="false" class="w-full md:w-14rem" />


                        </div>


                    </div>




                    <div class="giam col-sm-12">
                        Giảm giá so với ngày thường. Trượt xuống để chọn phòng khách sạn!

                    </div>

                    <div class="lc col-sm-12">
                        Tìm thấy 51 cơ sở lưu trú tại Bà Rịa - Vũng Tàu
                    </div>

                    <div class="ks col-sm-12" v-for="hotel in hotels" :key="hotel._id">
                        <div class="ht">
                            <img :src="hotel.imgURL" alt="">

                        </div>
                        <div class="kt">
                            <p style="color:rgb(3, 18, 26); font-weight: 700;font-size: 16px;">
                                {{ hotel.name }}
                            </p>

                            <p style="color:rgb(2, 100, 200); font-weight: 500;font-size: 12px;">
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="icon icon-tabler icons-tabler-outline icon-tabler-window">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path
                                        d="M12 3c-3.866 0 -7 3.272 -7 7v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1 -1v-10c0 -3.728 -3.134 -7 -7 -7z" />
                                    <path d="M5 13l14 0" />
                                    <path d="M12 3l0 18" />
                                </svg> {{ hotel.type }}


                                <span class="ml-4" style="color: yellow; font-size: 26px;"> <a-rate
                                        :value="hotel.rating" disabled /></span>
                                <!-- Five yellow star symbols -->


                            </p>
                            <p style="color:  rgb(3, 18, 26); font-weight: 500; font-size: 14px;">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="icon icon-tabler icons-tabler-outline icon-tabler-map-pin">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                                    <path
                                        d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
                                </svg> {{ hotel.address }}
                            </p>
                            <p style="color:  rgb(3, 18, 26); font-weight: 500; font-size: 10px;"> <svg
                                    xmlns="http://www.w3.org/2000/svg" width="10" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" style="color: rgb(2, 100, 200); font-weight: 400;"
                                    class="icon mr-2 icon-tabler icons-tabler-outline icon-tabler-brand-trello">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path
                                        d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
                                    <path d="M7 7h3v10h-3z" />
                                    <path d="M14 7h3v6h-3z" />
                                </svg>{{ hotel.description }}</p>
                            <p
                                style="border-radius: 20px; background-color: rgb(255, 220, 0);color: rgb(0, 0, 0); font-weight: 500;width: 315px;font-size: 12px;">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    style="color: aliceblue; font-weight: 500;" stroke-linejoin="round"
                                    class="icon icon-tabler icons-tabler-outline icon-tabler-discount">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M9 15l6 -6" />
                                    <circle cx="9.5" cy="9.5" r=".5" fill="currentColor" />
                                    <circle cx="14.5" cy="14.5" r=".5" fill="currentColor" />
                                    <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                                </svg>{{ hotel.discountTitle }}
                            </p>
                            <p style="color:  rgb(177, 84, 0); font-weight: 500;font-size: 14px;"><svg
                                    xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" style=" font-weight: 700;"
                                    class="icon icon-tabler icons-tabler-outline icon-tabler-pig-money">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M15 11v.01" />
                                    <path d="M5.173 8.378a3 3 0 1 1 4.656 -1.377" />
                                    <path
                                        d="M16 4v3.803a6.019 6.019 0 0 1 2.658 3.197h1.341a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-1.342c-.336 .95 -.907 1.8 -1.658 2.473v2.027a1.5 1.5 0 0 1 -3 0v-.583a6.04 6.04 0 0 1 -1 .083h-4a6.04 6.04 0 0 1 -1 -.083v.583a1.5 1.5 0 0 1 -3 0v-2l0 -.027a6 6 0 0 1 4 -10.473h2.5l4.5 -3h0z" />
                                </svg> 1000</p>

                        </div>
                        <div class="bt">
                            <div class="thpd"
                                style=" background-color: rgb(186, 240, 117); border-radius: 20px; color: rgb(0, 135, 89); width: 100px; text-align: center;justify-content: center;">
                                <img style="width: 20px;height: 20px;" class="mr-2"
                                    src="https://ik.imagekit.io/tvlk/image/imageResource/2021/11/21/1637537023389-169535f715e7d4b32d217e48a201dba4.png"
                                    alt=""> {{ hotel.discount }}

                            </div>
                            <div class="thpd" style="width: 121px; color: rgb(255, 94, 31);
    padding-top: 54px;">

                                <b> {{ hotel.price }}.000 VND</b>



                            </div>
                            <div class="thpd">

                                <div class="tt">
                                    <button class="chooserom btn text-white"> <router-link
                                            :to="{ name: 'bookroom', params: { id: hotel._id } }" class="link">
                                            Chọn phòng
                                        </router-link>

                                    </button>

                                </div>

                            </div>

                        </div>
                    </div>

                </div>





            </div>

        </div>

    </div>


</template>

<script>
import Button from 'primevue/button';
import Calendar from 'primevue/calendar';
import Carousel from 'primevue/carousel';
import Dialog from 'primevue/dialog';
import Dropdown from 'primevue/dropdown';
import InputNumber from 'primevue/inputnumber';
import InputText from 'primevue/inputtext';
import Slider from 'primevue/slider';
import Tooltip from 'primevue/tooltip';
import Carchon from '../components/filter/carouselchoose.vue';
import View from '../components/view.vue';
import HotelService from '../services/khachsan.service';
import RoomService from '../services/phong.service';
export default {
    components: {
        Dropdown,
        Calendar,
        Dialog,
        Button,
        InputNumber,
        View,
        RoomService,
        Carousel,
        Slider,
        InputText,
        Carchon

    },
    directives: {
        'tooltip': Tooltip
    },
    data() {
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        return {
            value4: [2000000, 8000000],
            rooms: [],
            hotelIdInput: '',
            selectedNight: { label: '2 đêm', value: 2 },

            nights: [
                { label: '1 đêm', value: 1 },
                { label: '2 đêm', value: 2 },
                { label: '3 đêm', value: 3 },
                { label: '4 đêm', value: 4 },
                { label: '5 đêm', value: 5 },
                { label: '6 đêm', value: 6 },
                { label: '7 đêm', value: 7 },
                { label: '8 đêm', value: 8 },
                { label: '9 đêm', value: 9 },
                { label: '10 đêm', value: 10 },
                { label: '11 đêm', value: 11 },
                { label: '12 đêm', value: 12 },
                { label: '13 đêm', value: 13 },
                { label: '14 đêm', value: 14 },
                { label: '15 đêm', value: 15 },
                { label: '16 đêm', value: 16 },
                { label: '17 đêm', value: 17 },
                { label: '18 đêm', value: 18 },
                { label: '19 đêm', value: 19 },
                { label: '20 đêm', value: 20 }
            ],
            selectedProvince: null,
            provinces: [
                { name: 'Quận 1', code: 'HN' },
                { name: 'Quận 1', code: 'HCM' },
                { name: 'Quận 1', code: 'DN' },
                { name: 'Quận 1', code: 'HP' },
                { name: 'Quận 1', code: 'CT' },
                { name: 'Quận 1', code: 'BD' },
                { name: 'Quận 1', code: 'DNai' },
                { name: 'Quận 1', code: 'KH' },
                { name: 'Quận 1', code: 'QNam' },
                { name: 'Quận 1', code: 'HD' }

            ].map(city => {
                return {
                    ...city,
                    nameWithCountry: `${city.name} (Việt Nam)`
                };
            }),
            selectedHt: null,
            hts: [
                { name: 'Khách sạn 1', code: 'HN' },
                { name: 'Khách sạn 1', code: 'HCM' },
                { name: 'Khách sạn 1', code: 'DN' },
                { name: 'Khách sạn 1', code: 'HP' },
                { name: 'Khách sạn 1', code: 'CT' },
                { name: 'Khách sạn 1', code: 'BD' },
                { name: 'Khách sạn 1', code: 'DNai' },
                { name: 'Khách sạn 1', code: 'KH' },
                { name: 'Khách sạn 1', code: 'QNam' },
                { name: 'Khách sạn 1', code: 'HD' }

            ].map(city => {
                return {
                    ...city,
                    nameWithCountry: `${city.name} (Hà Nội)`
                };
            }),

            booking: {
                city: '',
                checkinDate: '',
                checkoutDate: '',
                nights: 1,
                guests: 1,
            },
            icondisplay: tomorrow,
            // cus
            visible: false,
            value1: 1,
            value2: 0,
            value3: 1,
            plainOptions: ['Miễn phí hủy phòng', 'Thanh toán tại khách sạn', 'Miễn phí bữa ăn sáng'],
            state: {
                indeterminate: true,
                checkAll: false,
                checkedList: ['Miễn phí hủy phòng', 'Miễn phí bữa ăn sáng']
            },
            products: [
                { name: 'All ', },
                { name: 'thanh toán tại khách sạn ', },
                { name: 'phù hợp với gia đình', },
                { name: 'ưu đãi  ', },


            ],
            selectedSx: null,
            selectedGia: null,
            sx: [

                { name: 'Độ phổ biến', code: 'dpb' },
                { name: 'Điểm tích lũy', code: 'dtl' },
                { name: 'Gần trung tâm thành phố', code: 'tttp' },
                { name: 'Gần địa điểm du lịch', code: 'dddd' },

            ],
            gia: [
                { name: 'Giá cao nhất', code: 'gc' },
                { name: 'Giá thấp nhất', code: 'gt' },


            ],
            activeTab: null,
            showAll: true,
            hotels: [],
            provinceIdInput: '',
        };
    },
    props: {
        id: { type: String, required: true },
    },

    computed: {

        returnDate() {
            const returnDate = new Date(this.icondisplay);
            returnDate.setDate(returnDate.getDate() + this.selectedNight.value);
            return returnDate;

        },
        disabledDates() {
            const today = new Date();
            const disabledDates = [];

            // Lặp qua từ ngày hôm qua trở về 30 ngày trước
            for (let i = 1; i <= 30000; i++) {
                const disabledDate = new Date(today);
                disabledDate.setDate(today.getDate() - i);
                disabledDates.push(disabledDate);
            }

            return disabledDates;
        }


    },


    methods: {

        submitForm() {
            // Gửi dữ liệu đặt phòng lên máy chủ
            console.log('Đã gửi dữ liệu đặt phòng:', this.booking);
            // Đoạn mã gửi dữ liệu lên máy chủ sẽ được thêm vào ở đây
            // Ví dụ: sử dụng axios hoặc fetch API để gửi dữ liệu
        },
        showDialog() {
            if (this.value1 === 0 || this.value3 === 0 || this.value3 > this.value1) {

            } else {
                this.visible = true;
            }
        },
        closeDialog() {
            this.visible = false;
        },
        onCheckAllChange(e) {
            this.state.checkedList = e.target.checked ? this.plainOptions : [];
            this.state.indeterminate = false;
        },
        updateChecked() {
            this.state.indeterminate = this.state.checkedList.length > 0 && this.state.checkedList.length < this.plainOptions.length;
            this.state.checkAll = this.state.checkedList.length === this.plainOptions.length;
        },
        changeColor(tab) {
            this.activeTab = tab;
        },
        nextTab() {
            this.showAll = false;
        },
        prevTab() {
            this.showAll = true;
        },
        async loadHotels() {
            try {
                // Trích xuất provinceId từ URL
                const provinceId = window.location.pathname.split('/').pop();

                // Gọi phương thức findAllByProvinceId(provinceId) từ HotelService
                this.hotels = await HotelService.findAllByProvinceId(provinceId);
            } catch (error) {
                console.error('Error loading hotels:', error);
            }
        },
    },
    created() {
        this.loadHotels();
    },
    watch: {
        'state.checkedList': 'updateChecked'
    },
};
</script>

<style scoped>
.hotel {
    margin-top: 121px;
    margin-bottom: 100px;




}

.nen {
    border-radius: 10px;
    width: 938px;
    /* Chiều rộng cố định của ảnh */
    height: 213px;
    /* Chiều cao cố định của ảnh */
    display: block;
    /* Hiển thị là block element để sử dụng margin: auto */
    margin-left: 100px;
    /* Đẩy ảnh về phía bên trái */
    margin-right: auto;
    /* Đẩy ảnh về phía bên phải */
    margin-bottom: 40px;
}

.link {
    color: aliceblue;
    text-decoration: none;
}

.giam {

    border-radius: 10px;
    margin-bottom: 20px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
    cursor: pointer;
    background-color: #007bff;
    color: #ffffff;
    display: flex;
    align-items: center;
    height: 40px;

}



.lc {
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;

    margin-bottom: 20px;

}

.ks {

    display: flex;
    justify-content: space-between;
    border-radius: 10px;
    margin-bottom: 20px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
    cursor: pointer;
}

.ks:hover {
    box-shadow: 0px 0px 10px rgba(0, 0, 255, 0.5);
    /* Màu viền khi rê chuột vào */
}

.ht {
    padding: 10px;

}

.ht>img {
    margin-top: 15px;
    width: 270px;
    height: 230px;
    border-radius: 10px;

}

.kt {
    padding-top: 4px;
    margin-right: 62px;
}


.bt {
    padding: 10px;

}

.thpd {
    display: flex;
    padding-top: 5px;
    width: 150px;
}

.chooserom {
    background-color: rgb(255, 94, 31);
    font-weight: 700;
}

.chooserom:hover {
    background-color: rgba(255, 94, 31, 0.8);
}

.tt {
    padding: 100px 5px 5px 5px;

}

.ca {
    display: flex;
    justify-content: space-between;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
    cursor: pointer;
    background-color: #4584c8;
    height: 80px;
    padding: 10px;
    margin-bottom: 20px;


}

.product-item {
    max-width: 200px;
    /* Adjust as needed */
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

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


.t.btn:hover {
    cursor: pointer;
}

.selected p {
    color: rgb(24, 141, 176);
    /* Thay đổi màu chữ khi được chọn */
}

.carousel {
    font-weight: 700;
    font-size: 14px;
}
</style>