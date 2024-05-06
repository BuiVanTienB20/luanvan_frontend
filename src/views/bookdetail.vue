<template>
    <div class="bookdetail">
        <div class="mybook">
            <h1>Đặt phòng của bạn</h1>
            <Toast ref="toast" />
        </div>
        <div class="container">
            <div class="ro row">
                <div class="tt col-sm-6 ">
                    <div v-focustrap class="w-full" style="max-width: 20rem;margin-top: 40px;">
                        <h4>Thông tin liên hệ</h4>

                        <div class="te">
                            <p>Hãy điền chính xác tất cả thông tin để đảm bảo bạn nhận được Phiếu xác nhận đặt phòng
                                (E-voucher) qua email của mình</p>
                        </div>


                        <div class="field mb-4 mt-4" style="width: 500px;">
                            <IconField>
                                <InputIcon class="mr-2">
                                    <i class="pi pi-user" />
                                </InputIcon>
                                <InputText id="input" v-model="name" type="text" placeholder="Name" autofocus
                                    style="width: 550px;" />
                            </IconField>
                            <span v-if="!name.trim()" class="text-danger">Cần nhập đầy đủ thông tin</span>
                        </div>

                        <div class="ttd mb-4">
                            <div class="field mr-2">
                                <IconField>
                                    <InputIcon class="mr-2">
                                        <i class="pi pi-envelope " />
                                    </InputIcon>
                                    <InputText id="email" v-model="email" type="email" placeholder="Email" />
                                </IconField>
                                <span v-if="!email.trim()" class="text-danger">Cần nhập đầy đủ thông tin</span>
                            </div>

                            <div class="field mr-2">
                                <IconField class="mr-2">
                                    <InputIcon class="mr-2">
                                        <i class="pi pi-flag" />
                                    </InputIcon>
                                    <Dropdown v-model="countryCode" placeholder="Select Country Code"
                                        :options="countryCodes" @change="generatePhoneNumber" style="width: 120px" />
                                </IconField>

                            </div>

                            <div class="field">
                                <IconField>
                                    <InputIcon class="mr-2">
                                        <i class="pi pi-phone" />
                                    </InputIcon>
                                    <InputText id="phoneNumber" v-model="phoneNumber" type="tel"
                                        placeholder="Phone Number" style="width: 200px" />
                                </IconField>
                                <span v-if="!phoneNumber.trim()" class="text-danger">Cần nhập đầy đủ thông tin</span>
                            </div>

                        </div>
                        <div class="bt">

                            <Calendar v-model="icondisplay" showIcon iconDisplay="input" inputId="icondisplay"
                                style="width: 160px;" :disabledDates="disabledDates" />
                            <Dropdown v-model="selectedNight" :options="nights" optionLabel="label" placeholder=""
                                class="w-full md:w-14rem">
                                <template slot="value" slot-scope="slotProps">
                                    {{ slotProps.value ? slotProps.value.label : slotProps.placeholder }}
                                </template>
                            </Dropdown>
                            <Calendar v-model="returnDate" showIcon iconDisplay="input" inputId="returnDate"
                                :readonly="true" />

                        </div>

                        <div class="row ce mt-4 ml-4">

                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    class="icon mr-2 icon-tabler icon-tabler-calendar-user" width="24" height="24"
                                    viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"
                                    stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M12 21h-6a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v4.5" />
                                    <path d="M16 3v4" />
                                    <path d="M8 3v4" />
                                    <path d="M4 11h16" />
                                    <path d="M19 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                                    <path d="M22 22a2 2 0 0 0 -2 -2h-2a2 2 0 0 0 -2 2" />
                                </svg>

                                <div class="cus">
                                    <Button :label="`${value1} Người lớn, ${value2} Trẻ em, ${value3} Phòng`"
                                        @click="showDialog" severity="secondary" />

                                    <Dialog v-model:visible="visible" modal header=""
                                        :style="{ width: '25rem', borderRadius: '10px' }" :showHeader="false">

                                        <div class="flex align-items-center gap-3  mt-3 mb-3 ">
                                            <b class="ngl"><svg xmlns="http://www.w3.org/2000/svg" width="24"
                                                    height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                                    class="icon mr-2 icon-tabler icons-tabler-outline icon-tabler-user-share">
                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                    <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                                                    <path d="M6 21v-2a4 4 0 0 1 4 -4h3" />
                                                    <path d="M16 22l5 -5" />
                                                    <path d="M21 21.5v-4.5h-4.5" />
                                                </svg> Người lớn:</b>
                                            <InputNumber v-model="value1" :inputId="'horizontal-buttons1'" showButtons
                                                :buttonLayout="'horizontal'" :step="1" :inputStyle="{ width: '48px' }"
                                                :min="1" />
                                        </div>

                                        <div class="flex align-items-center gap-3  mb-3 ">
                                            <b class="tre"><svg xmlns="http://www.w3.org/2000/svg" width="24"
                                                    height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                                    class="icon mr-2 icon-tabler icons-tabler-outline icon-tabler-horse-toy">
                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                    <path d="M3.5 17.5c5.667 4.667 11.333 4.667 17 0" />
                                                    <path
                                                        d="M19 18.5l-2 -8.5l1 -2l2 1l1.5 -1.5l-2.5 -4.5c-5.052 .218 -5.99 3.133 -7 6h-6a3 3 0 0 0 -3 3" />
                                                    <path d="M5 18.5l2 -9.5" />
                                                    <path d="M8 20l2 -5h4l2 5" />
                                                </svg>Trẻ em:</b>
                                            <InputNumber v-model="value2" :inputId="'horizontal-buttons2'" showButtons
                                                :buttonLayout="'horizontal'" :step="1" :inputStyle="{ width: '48px' }"
                                                :min="0" />
                                        </div>

                                        <div class="flex align-items-center gap-3  mb-3 ">
                                            <b class="tre"><svg xmlns="http://www.w3.org/2000/svg" width="24"
                                                    height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                                    class="icon mr-2 icon-tabler icons-tabler-outline icon-tabler-door">
                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                    <path d="M14 12v.01" />
                                                    <path d="M3 21h18" />
                                                    <path d="M6 21v-16a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v16" />
                                                </svg>Phòng:</b>
                                            <InputNumber v-model="value3" :inputId="'horizontal-buttons3'" showButtons
                                                :buttonLayout="'horizontal'" :step="1" :inputStyle="{ width: '48px' }"
                                                :min="1" :max="value1" />
                                        </div>

                                        <div class="flex justify-content-end gap-2" :style="{ marginLeft: '250px' }">
                                            <Button type="button" label="Xong" severity="secondary"
                                                @click="closeDialog"></Button>
                                        </div>
                                    </Dialog>
                                </div>





                            </div>
                        </div>


                    </div>

                </div>
                <div class="td col-sm-6" v-if="room" :key="room._id">
                    <div class="br col-sm-12 " style="margin-top: 40px;">
                        <div class=" mb-10" style="font-weight: bold;margin-bottom: 20px; display: flex;">
                            <p style="margin-top: 6px;margin-right: 200px">{{ room.room_name }} </p>
                            <p c
                                style="margin-top: 5px;  color: #333;white-space: nowrap; border-radius: 5px; font-weight: bold;">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="icon mr-2 icon-tabler icons-tabler-outline icon-tabler-armchair-2">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M5 10v-4a3 3 0 0 1 3 -3h8a3 3 0 0 1 3 3v4" />
                                    <path d="M16 15v-2a3 3 0 1 1 3 3v3h-14v-3a3 3 0 1 1 3 -3v2" />
                                    <path d="M8 12h8" />
                                    <path d="M7 19v2" />
                                    <path d="M17 19v2" />
                                </svg>Số phòng: {{ room.room_number }}
                            </p>
                        </div>
                        <div class="anh" style="margin-bottom: 20px;">
                            <img :src="room.imgURL" alt="" style="border: 1px solid #333; height: 200px; width: 500px;">


                        </div>
                        <div class="ct">

                            <div class="item1 " style="font-weight: 500;">
                                <div class="tp">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round"
                                        class="icon  icon-tabler icons-tabler-outline icon-tabler-bed">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M7 9m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                                        <path d="M22 17v-3h-20" />
                                        <path d="M2 8v9" />
                                        <path d="M12 14h10v-2a3 3 0 0 0 -3 -3h-7v5z" />
                                    </svg> {{ room.room_type }}
                                </div>
                                <div class="tp "><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                        viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round"
                                        class="icon mt-4 mb-4  icon-tabler icons-tabler-outline icon-tabler-user-screen">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path
                                            d="M19.03 17.818a3 3 0 0 0 1.97 -2.818v-8a3 3 0 0 0 -3 -3h-12a3 3 0 0 0 -3 3v8c0 1.317 .85 2.436 2.03 2.84" />
                                        <path d="M10 14a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                                        <path d="M8 21a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2" />
                                    </svg> Sức chứa: {{ room.capacity }}</div>

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
                                <p style="color: rgb(255, 94, 31);font-size: 24px;" v-tooltip.top="'Đã bao gồm thuế'">
                                    Tổng giá:
                                </p>

                            </div>
                            <div class="item" style="font-weight: 500;">
                                <div class="tp">

                                    <p style="color: rgb(0, 135, 90);"> <svg xmlns="http://www.w3.org/2000/svg"
                                            width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                            class="icon mr-2 icon-tabler icons-tabler-outline icon-tabler-smoking-no">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <path d="M8 13l0 4" />
                                            <path d="M16 5v.5a2 2 0 0 0 2 2a2 2 0 0 1 2 2v.5" />
                                            <path d="M3 3l18 18" />
                                            <path
                                                d="M17 13h3a1 1 0 0 1 1 1v2c0 .28 -.115 .533 -.3 .714m-3.7 .286h-13a1 1 0 0 1 -1 -1v-2a1 1 0 0 1 1 -1h9" />
                                        </svg> Không hút thuốc</p>

                                </div>
                                <div class="tp">
                                    <p style="color: rgb(0, 135, 90);"> <svg xmlns="http://www.w3.org/2000/svg"
                                            width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                            class="icon mr-2 icon-tabler icons-tabler-outline icon-tabler-browser-check">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <path
                                                d="M4 4m0 1a1 1 0 0 1 1 -1h14a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-14a1 1 0 0 1 -1 -1z" />
                                            <path d="M4 8h16" />
                                            <path d="M8 4v4" />
                                            <path d="M9.5 14.5l1.5 1.5l3 -3" />
                                        </svg> Miễn phí hủy phòng</p>
                                    <p style="color: rgb(0, 135, 90);"> <svg xmlns="http://www.w3.org/2000/svg"
                                            width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                            class="icon mr-2 icon-tabler icons-tabler-outline icon-tabler-calendar-repeat">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <path
                                                d="M12.5 21h-6.5a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v3" />
                                            <path d="M16 3v4" />
                                            <path d="M8 3v4" />
                                            <path d="M4 11h12" />
                                            <path d="M20 14l2 2h-3" />
                                            <path d="M20 18l2 -2" />
                                            <path d="M19 16a3 3 0 1 0 2 5.236" />
                                        </svg> Có thể đổi lịch </p>


                                </div>
                                <div class="tp" style="font-weight: 700">
                                    <p style="text-decoration-line: line-through; ">
                                        {{ (room.price_per_night * 1).toLocaleString('en-US', {
                                            minimumFractionDigits: 0,
                                            maximumFractionDigits: (room.price_per_night >= 1000) ? 3 : 0
                                        })
                                        }},000 VND

                                    </p>
                                    <p style="color: rgb(255, 94, 31); font-size: 20px;"
                                        v-tooltip.top="'Đã bao gồm thuế'">
                                        {{
                                            (room.price_per_night * 1.1).toLocaleString('en-US', {
                                                minimumFractionDigits: 0,
                                                maximumFractionDigits: (room.price_per_night >= 1000) ? 3 : 0
                                            })
                                        }},000 VND
                                    </p>



                                </div>

                            </div>




                        </div>





                    </div>
                </div>
                <div class="thatoan col-sm-12 ">
                    <button class="btn text-white" @click="goTopay()">Tiếp tục đến thanh toán</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Button from 'primevue/button';
import Calendar from 'primevue/calendar';
import Dropdown from 'primevue/dropdown';
import FocusTrap from 'primevue/focustrap';
import InputNumber from 'primevue/inputnumber';
import InputText from 'primevue/inputtext';


import Dialog from 'primevue/dialog';
import Toast from 'primevue/toast';
import BookingService from '../services/datphong.service';
import RoomService from '../services/phong.service';
export default {
    components: {
        Button,
        Dropdown,
        InputNumber,
        InputText,
        Calendar,
        RoomService,
        BookingService,
        Toast,
        Dialog


    },
    directives: {
        'focustrap': FocusTrap
    },
    data() {
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);

        return {
            errors: {
                name: false,
                email: false,
                phoneNumber: false
            },
            room: [],


            check_in_date: '',
            check_out_date: '',
            total_price: '',
            booking_status: '',
            email: '',
            phone: '',
            name: '',
            countryCode: null,
            phoneNumber: '',
            countryCodes: [
                '+01 (USA)',
                '+84 (Vietnam)',
                '+44 (UK)',
                '+33 (France)',
                '+49 (Germany)',
                '+86 (China)',
                '+91 (India)',
                '+81 (Japan)',
                '+82 (South Korea)',
                '+7 (Russia)',
                '+55 (Brazil)',
                '+52 (Mexico)',
                '+62 (Indonesia)',
                '+61 (Australia)',
                '+34 (Spain)',
                '+39 (Italy)',
                '+91 (Thailand)',
                '+1 (Canada)',
                '+966 (Saudi Arabia)',
                '+971 (UAE)',
                '+234 (Nigeria)',
            ],
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
            icondisplay: tomorrow,
            visible: false,
            value1: 1,
            value2: 0,
            value3: 1,



        };
    },
    props: {
        id: { type: String, required: true },
    },
    async created() {
        const roomId = this.$route.params.id;
        try {
            this.room = await RoomService.get(roomId);
        } catch (error) {
            console.error(error);
        }
    },
    methods: {
        showDialog() {
            if (this.value1 === 0 || this.value3 === 0 || this.value3 > this.value1) {

            } else {
                this.visible = true;
            }
        },
        closeDialog() {
            this.visible = false;
        },
        onNameChange() {
            // Kiểm tra xem name có được điền không
            this.errors.name = !this.name.trim();
            // Kiểm tra xem email có được điền không
            this.errors.email = !this.email.trim();
            // Kiểm tra xem phoneNumber có được điền không
            this.errors.phoneNumber = !this.phoneNumber.trim();
        },

        async goTopay() {
            try {
                // Get user ID from localStorage
                const userJs = window.localStorage.getItem('user');
                const user = JSON.parse(userJs);

                const RoomData = await RoomService.get(this.$route.params.id);


                // Create data object for the cart
                const data = {



                    user_id: user._id,
                    room_id: RoomData._id,
                    check_in_date: this.icondisplay,
                    check_out_date: this.returnDate,
                    total_price: this.price_per_night,
                    booking_status: this.booking_status,
                    email: this.email,
                    phone: this.phoneNumber,
                    namebook: this.name
                };

                await BookingService.create(data);
                this.showToast({
                    severity: 'success',
                    summary: 'Thành công',
                    detail: 'Bạn đã đăng ký thành công',
                    life: 3000
                });

                if (!this.name.trim() || !this.email.trim() || !this.phoneNumber.trim()) {
                    this.showToast({
                        severity: 'error',
                        summary: 'Cần đăng nhập để đăng ký',
                        detail: 'Vui lòng kiểm tra lại',
                        life: 3000
                    });


                } else {
                    setTimeout(() => {
                        this.$router.push({ name: 'pay' });

                    }, 3000);


                }

            } catch (error) {
                console.error(error);
                this.showToast({
                    severity: 'error',
                    summary: 'Có lỗi xảy ra',
                    detail: 'Vui lòng kiểm tra lại',
                    life: 3000
                });
            }


        },


        generatePhoneNumber() {
            if (this.countryCode) {
                const countryCodeValue = this.countryCode.split(' ')[0]; // Extracting the country code without the '+' sign
                let randomPhoneNumber = countryCodeValue; // Start the phone number with the selected country code
                for (let i = 0; i < 8; i++) {
                    randomPhoneNumber += Math.floor(Math.random() * 10); // Append 8 random digits to the country code
                }
                this.phoneNumber = randomPhoneNumber;
            }
        },
        showToast(toastConfig) {
            // Show toast using the PrimeVue toast component
            this.$toast.add(toastConfig);
        }
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
}
</script>

<style scoped>
.bookdetail {
    margin-top: 125px;
    margin-bottom: 160px;
}

.mybook {
    border-radius: 10px;
    margin-bottom: 20px;
    justify-content: center;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
    cursor: pointer;
    display: flex;
    align-items: center;
    height: 60px;
}

.ro {
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
    height: 580px;
    border-radius: 10px;

}

.tt {

    border-radius: 10px;
    height: 580px;
    display: flex;



}

.cus {
    margin: -35px -35px -35px 37px;

    border-radius: 10px;
}

.ngl {
    margin-right: 75px;
}

.tre {
    margin-right: 100px;
}

.ttd {
    display: flex;
}

.te {

    width: 500px;
    color: rgb(104, 113, 118);
    font-weight: 500;
}

.ct {
    display: flex;
}

.item1 {
    margin-right: 120px;
}

.td {

    border-radius: 10px;
    height: 580px;



}

.thatoan {
    margin-top: 20px;

}

.thatoan>button {
    width: 1100px;
    border-radius: 20px;
    font-size: 20px;
    background-color: rgb(255, 94, 31);

}

.thatoan>button:hover {
    cursor: pointer;

    background-color: rgb(186, 62, 13);

}

.bt {
    margin-top: 50px;
    display: flex;
    min-width: 600px;
}
</style>
