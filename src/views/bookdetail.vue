<template>
    <div class="bookdetail">
        <div class="mybook">
            <h1>Đặt phòng của bạn</h1>
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
                        </div>

                        <div class="ttd mb-4">
                            <div class="field mr-2">
                                <IconField>
                                    <InputIcon class="mr-2">
                                        <i class="pi pi-envelope " />
                                    </InputIcon>
                                    <InputText id="email" v-model="email" type="email" placeholder="Email" />
                                </IconField>
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
                            </div>

                        </div>
                        <div class="bt">

                            <Calendar v-model="icondisplay" showIcon iconDisplay="input" inputId="icondisplay"
                                style="width: 160px;" />
                            <Dropdown v-model="selectedNight" :options="nights" optionLabel="label" placeholder=""
                                class="w-full md:w-14rem">
                                <template slot="value" slot-scope="slotProps">
                                    {{ slotProps.value ? slotProps.value.label : slotProps.placeholder }}
                                </template>
                            </Dropdown>
                            <Calendar v-model="returnDate" showIcon iconDisplay="input" inputId="returnDate"
                                :readonly="true" />

                        </div>


                    </div>

                </div>
                <div class="td col-sm-6">
                    <div class="br col-sm-12 " style="margin-top: 40px;">
                        <div class=" mb-10" style="font-weight: bold;margin-bottom: 20px; display: flex;">
                            <p style="margin-top: 6px;">Grand Double City - Room Only </p>
                            <a-rate :value="5" disabled style="margin-left: 40px;margin-bottom: 30px;" />

                        </div>
                        <div class="anh" style="margin-bottom: 20px;">
                            <img src="../assets/img/ads2.webp" alt="">

                        </div>
                        <div class="ct">

                            <div class="item1 " style="font-weight: 500;">
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
                                    </svg> 1 Giường đôi
                                </div>
                                <div class="tp"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                        viewBox="0 0 20 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round"
                                        class="icon mr-2 icon-tabler icons-tabler-outline icon-tabler-users">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
                                        <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                        <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
                                    </svg> 2 khách</div>
                                <div class="tp" style="font-weight: 600;color: red;"> Chỉ còn 2 phòng</div>
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
                                        625.040 VND

                                    </p>
                                    <p style="color: rgb(255, 94, 31);font-size: 24px;"
                                        v-tooltip.top="'Đã bao gồm thuế'">
                                        603.163 VND

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

import RoomService from '../services/phong.service';
export default {
    components: {
        Button,
        Dropdown,
        InputNumber,
        InputText,
        Calendar,
        RoomService
    },
    directives: {
        'focustrap': FocusTrap
    },
    data() {
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        return {
            rooms: [],
            name: '',
            email: '',
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



        };
    },
    props: {
        id: { type: String, required: true },
    },
    methods: {
        goTopay() {
            this.$router.push({ name: 'pay' });

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
        }
    },
    computed: {
        returnDate() {
            const returnDate = new Date(this.icondisplay);
            returnDate.setDate(returnDate.getDate() + this.selectedNight.value);
            return returnDate;

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
