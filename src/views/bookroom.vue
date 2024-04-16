<template>
    <div class="book">
        <div class="ca">
            <div class="bt">
                <svg width="26" height="26" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"
                    class="mr-2" data-id="IcSystemMapLocationFill12">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M6 12C6 12 10.5 8.5 10.5 5.5C10.5 2.73858 8.76142 0.5 6 0.5C3.23858 0.5 1.5 2.73858 1.5 5.5C1.5 8.5 6 12 6 12ZM6 7C7.10457 7 8 6.10457 8 5C8 3.89543 7.10457 3 6 3C4.89543 3 4 3.89543 4 5C4 6.10457 4.89543 7 6 7Z"
                        fill="#FFFFFF"></path>
                </svg>
                <Dropdown v-model="selectedProvince" :options="provinces" filter optionLabel="name"
                    placeholder="Chọn một tỉnh thành" class="w-full md:w-14rem">
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
                    class="mr-2" data-id="IcSystemCalendar">
                    <path
                        d="M7 2V5M17 2V5M3 8H21M11.5 11.5H12.5V12.5H11.5V11.5ZM11.5 16.5H12.5V17.5H11.5V16.5ZM16.5 11.5H17.5V12.5H16.5V11.5ZM6.5 16.5H7.5V17.5H6.5V16.5ZM5 21H19C20.1046 21 21 20.1046 21 19V6C21 4.89543 20.1046 4 19 4H5C3.89543 4 3 4.89543 3 6V19C3 20.1046 3.89543 21 5 21Z"
                        stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.5 11.5V12.5H6.5V11.5H7.5Z" stroke="#0194F3"
                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
                <Calendar v-model="icondisplay" showIcon iconDisplay="input" inputId="icondisplay"
                    style="width: 140px;" />
                <Dropdown v-model="selectedNight" :options="nights" optionLabel="label" placeholder=""
                    class="w-full md:w-14rem">
                    <template slot="value" slot-scope="slotProps">
                        {{ slotProps.value ? slotProps.value.label : slotProps.placeholder }}
                    </template>
                </Dropdown>
                <Calendar v-model="returnDate" showIcon iconDisplay="input" inputId="returnDate" :readonly="true" />

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
                        <b><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
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
                        <b><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
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
        <div class="ba">
            <p>Tổng quan</p>
            <p>Phòng</p>
            <p>Vị trí</p>
            <p>Tiện ích</p>
            <p>Chính sách </p>
            <p>Đánh giá</p>
        </div>


        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <h2 class="drum">Những phòng còn trống tại My Villa Airport Hotel </h2>

                    .
                </div>
                <div class="check col-sm-12">
                    <div>
                        <input class="mr-2" type="checkbox" v-model="state.checkAll" @change="onCheckAllChange">
                        <label>Chọn tất</label>
                    </div>
                    <hr>
                    <div class="cc" v-for="(option, index) in plainOptions" :key="index">
                        <input class="mr-2" type="checkbox" v-model="state.checkedList" :value="option"
                            @change="updateChecked">
                        <label>{{ option }}</label>
                    </div>
                </div>

                <div class="br col-sm-12" v-for="room in rooms" :key="room._id">
                    <div class="anh">
                        <img :src="room.imgURL" alt="">


                    </div>
                    <div class="ct">
                        <div style="font-weight: bold;display: flex">
                            <p class="mr-4"> {{ room.room_name }}</p>
                            <p>{{ room.room_number }}</p>
                        </div>
                        <div class="item">
                            <div class="tp">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="icon mr-2 icon-tabler icons-tabler-outline icon-tabler-bed">
                                    <path stroke="none" d="M0 0h20v20H0z" fill="none" />
                                    <path d="M7 9m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                                    <path d="M22 17v-3h-20" />
                                    <path d="M2 8v9" />
                                    <path d="M12 14h10v-2a3 3 0 0 0 -3 -3h-7v5z" />
                                </svg> {{ room.capacity }} Giường đôi
                            </div>
                            <div class="tp"> {{ room.room_type }}</div>
                            <div class="tp" style="font-weight: 600;color: red;"> còn phòng :{{ room.availability }}
                            </div>
                        </div>
                        <div class="item">
                            <div class="tp">
                                <p style="color: rgba(104, 113, 118, 1.00)"> <svg xmlns="http://www.w3.org/2000/svg"
                                        width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                        class="icon mr-2 icon-tabler icons-tabler-outline icon-tabler-tools-kitchen-2-off">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path
                                            d="M14.386 10.409c.53 -2.28 1.766 -4.692 4.614 -7.409v12m-4 0h-1c0 -.313 0 -.627 0 -.941" />
                                        <path d="M19 19v2h-1v-3" />
                                        <path d="M8 8v13" />
                                        <path d="M5 5v2a3 3 0 0 0 4.546 2.572m1.454 -2.572v-3" />
                                        <path d="M3 3l18 18" />
                                    </svg> Không gồm bữa sáng</p>
                                <p style="color: rgb(0, 135, 90);"> <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                        height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                        class="icon mr-2 icon-tabler icons-tabler-outline icon-tabler-wifi">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M12 18l.01 0" />
                                        <path d="M9.172 15.172a4 4 0 0 1 5.656 0" />
                                        <path d="M6.343 12.343a8 8 0 0 1 11.314 0" />
                                        <path d="M3.515 9.515c4.686 -4.687 12.284 -4.687 17 0" />
                                    </svg> Wifi miễn phí</p>
                                <p style="color: rgb(0, 135, 90);"> <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                        height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                        class="icon mr-2 icon-tabler icons-tabler-outline icon-tabler-smoking-no">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M8 13l0 4" />
                                        <path d="M16 5v.5a2 2 0 0 0 2 2a2 2 0 0 1 2 2v.5" />
                                        <path d="M3 3l18 18" />
                                        <path
                                            d="M17 13h3a1 1 0 0 1 1 1v2c0 .28 -.115 .533 -.3 .714m-3.7 .286h-13a1 1 0 0 1 -1 -1v-2a1 1 0 0 1 1 -1h9" />
                                    </svg> Không hút thuốc</p>
                                <p style="color: rgba(1, 148, 243, 1.00);"
                                    v-tooltip.top="'Áp dụng Thanh Toán Tại Khách Sạn. Cho chuyến đi thêm linh hoạt: KHÔNG CẦN THANH TOÁN NGAY khi đặt phòng! Bạn có đặt ngay phòng có giá tốt nhất hôm nay và thanh toán sau bằng tiền mặt hoặc thẻ khi nhận phòng. Thời gian hiển thị là giờ địa phương.'">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round"
                                        class="icon icon-tabler icons-tabler-outline icon-tabler-cash">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path
                                            d="M7 9m0 2a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2z" />
                                        <path d="M14 14m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                                        <path d="M17 9v-2a2 2 0 0 0 -2 -2h-10a2 2 0 0 0 -2 2v6a2 2 0 0 0 2 2h2" />
                                    </svg>Thanh Toán tại khách sạn <br>
                                    Thanh toán tại khách sạn nơi ở
                                </p>
                            </div>
                            <div class="tp">
                                <p style="color: rgb(0, 135, 90);"> <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                        height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                        class="icon mr-2 icon-tabler icons-tabler-outline icon-tabler-browser-check">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path
                                            d="M4 4m0 1a1 1 0 0 1 1 -1h14a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-14a1 1 0 0 1 -1 -1z" />
                                        <path d="M4 8h16" />
                                        <path d="M8 4v4" />
                                        <path d="M9.5 14.5l1.5 1.5l3 -3" />
                                    </svg> Miễn phí hủy phòng</p>
                                <p style="color: rgb(0, 135, 90);"> <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                        height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                        class="icon mr-2 icon-tabler icons-tabler-outline icon-tabler-calendar-repeat">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M12.5 21h-6.5a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v3" />
                                        <path d="M16 3v4" />
                                        <path d="M8 3v4" />
                                        <path d="M4 11h12" />
                                        <path d="M20 14l2 2h-3" />
                                        <path d="M20 18l2 -2" />
                                        <path d="M19 16a3 3 0 1 0 2 5.236" />
                                    </svg> Có thể đổi lịch </p>
                                <p style="color: rgba(1, 148, 243, 1.00);"
                                    v-tooltip.top="'Miễn phí hủy phòng trong vòng 2 giờ kể từ lúc đặt'">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round"
                                        class="icon icon-tabler icons-tabler-outline icon-tabler-help-hexagon">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path
                                            d="M19.875 6.27c.7 .398 1.13 1.143 1.125 1.948v7.284c0 .809 -.443 1.555 -1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1 -2.184 0l-6.75 -4.27a2.225 2.225 0 0 1 -1.158 -1.948v-7.285c0 -.809 .443 -1.554 1.158 -1.947l6.75 -3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033z" />
                                        <path d="M12 16v.01" />
                                        <path d="M12 13a2 2 0 0 0 .914 -3.782a1.98 1.98 0 0 0 -2.414 .483" />
                                    </svg> Xem chính xác hủy phòng
                                </p>

                            </div>
                            <div class="tp" style="font-weight: 700">

                                <p style="text-decoration-line: line-through; ">
                                    {{ room.price_per_night }}.000 VND

                                </p>
                                <p style="color: rgb(255, 94, 31);font-size: 24px;" v-tooltip.top="'Đã bao gồm thuế'">
                                    {{ (room.price_per_night * 0.1).toLocaleString() }}.000 VND

                                </p>
                                <p style="font-weight: 500; color: rgba(104, 113, 118, 1.00); font-size: 12px;"
                                    v-tooltip.top="'Đặt phòng để nhận ngay điểm thưởng Traveloka và được giảm giá cho các lần đặt chỗ sau.'">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                        style="color:#d38b1b;" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round"
                                        class="icon  icon-tabler icons-tabler-outline icon-tabler-coin-bitcoin">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                                        <path
                                            d="M9 8h4.09c1.055 0 1.91 .895 1.91 2s-.855 2 -1.91 2c1.055 0 1.91 .895 1.91 2s-.855 2 -1.91 2h-4.09" />
                                        <path d="M10 12h4" />
                                        <path d="M10 7v10v-9" />
                                        <path d="M13 7v1" />
                                        <path d="M13 16v1" />
                                    </svg> Nhận 10620

                                </p>
                                <p> <button class="dn btn">
                                        <router-link :to="{ name: 'bookdetail', params: { id: room._id } }"
                                            class="link">Đặt
                                            ngay</router-link>

                                    </button>
                                </p>


                            </div>

                        </div>




                    </div>





                </div>






            </div>

            <div class="row">
                <div class="col-sm-12">
                    <View></View>
                </div>
            </div>
        </div>



    </div>

</template>
<script>
import Button from 'primevue/button';
import Calendar from 'primevue/calendar';
import Dialog from 'primevue/dialog';
import Dropdown from 'primevue/dropdown';
import InputNumber from 'primevue/inputnumber';
import Tooltip from 'primevue/tooltip';
import View from '../components/view.vue';

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

    },
    directives: {
        'tooltip': Tooltip
    },
    data() {
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        return {
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
                { name: 'Hà Nội', code: 'HN' },
                { name: 'Hồ Chí Minh', code: 'HCM' },
                { name: 'Đà Nẵng', code: 'DN' },
                { name: 'Hải Phòng', code: 'HP' },
                { name: 'Cần Thơ', code: 'CT' },
                { name: 'Bình Dương', code: 'BD' },
                { name: 'Đồng Nai', code: 'DNai' },
                { name: 'Khánh Hòa', code: 'KH' },
                { name: 'Quảng Nam', code: 'QNam' },
                { name: 'Hải Dương', code: 'HD' }

            ].map(city => {
                return {
                    ...city,
                    nameWithCountry: `${city.name} (Việt Nam)`
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

        }


    },
    created() {
        this.loadRooms();
    },
    methods: {
        async loadRooms() {
            try {
                // Trích xuất provinceId từ URL
                const hotelId = window.location.pathname.split('/').pop();

                // Gọi phương thức findAllByhotelId(hotelId) từ HotelService
                this.rooms = await RoomService.findByHotelId(hotelId);
            } catch (error) {
                console.error('Error loading hotels:', error);
            }
        },
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
    },
    watch: {
        'state.checkedList': 'updateChecked'
    },
};
</script>


<style scoped>
.book {
    margin-top: 121px;
    margin-bottom: 160px;
}

.link {
    text-decoration: none;
    color: #e2effe;
}

.ca {
    display: flex;
    justify-content: space-between;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
    cursor: pointer;
    background-color: #4584c8;
    height: 60px;
    padding: 10px;


}

.ba {
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
    cursor: pointer;
    background-color: #e2effe;
    height: 50px;
    padding: 20px 10px 10px 10px;


}

.ba>p {
    padding: 10px 10px 10px 90px;
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;
    color: rgba(104, 113, 118, 1.00);
}

.drum {
    padding-top: 20px;
    color: rgba(3, 18, 26, 1.00);
    font-size: 24px;
    font-weight: 900px;
}

.check {
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
    cursor: pointer;
    background-color: #e2effe;
    height: 50px;
    padding: 20px 0px 10px 10px;
    margin-bottom: 20px;


}

.cc {
    padding: 10px;
}

b {
    margin-right: 100px;
}

.ngl {
    margin-right: 75px;
}

.br {
    display: flex;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
    height: 295px;
    border-radius: 10px;
    margin-top: 20px;
}

.anh {
    padding: 10px;

}

.anh>img {
    width: 320px;
    height: 220px;
    border-radius: 10px;
}

.ct {
    padding: 10px;
}

.item {
    display: flex;
    justify-content: space-between;
    height: 60px;
    padding: 10px;
    width: 650px;
}

.tp {

    font-weight: 500;
}

.dn {
    background-color: rgb(255, 94, 31);
    color: aliceblue;
    font-weight: 600;
    border-radius: 10px;
    margin-left: 75px;
    transition: background-color 0.3s ease;

}

.dn:hover {
    cursor: pointer;
    background-color: rgb(255, 64, 0);



}
</style>