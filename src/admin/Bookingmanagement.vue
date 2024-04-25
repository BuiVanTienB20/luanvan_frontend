<template>
    <div class="container">

        <div class="card row d-flex">
            <h2 style="color: rgb(108 129 140);">Danh sách đặt phòng</h2>
            <div class="he col-sm-12">

                <div class="order-list">

                    <button class="status  btn btn-primary mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="icon icon-tabler icons-tabler-outline icon-tabler-list-details">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M13 5h8" />
                            <path d="M13 9h5" />
                            <path d="M13 15h8" />
                            <path d="M13 19h5" />
                            <path d="M3 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
                            <path d="M3 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
                        </svg>



                    </button>
                    <div class="ht">
                        <h5>
                            Tổng dịch vụ

                        </h5>
                        <h5>
                            {{ totalCount() }}
                        </h5>

                    </div>
                </div>


                <div class="order-list">

                    <button class="status btn btn-success mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="icon icon-tabler icons-tabler-outline icon-tabler-list-check">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M3.5 5.5l1.5 1.5l2.5 -2.5" />
                            <path d="M3.5 11.5l1.5 1.5l2.5 -2.5" />
                            <path d="M3.5 17.5l1.5 1.5l2.5 -2.5" />
                            <path d="M11 6l9 0" />
                            <path d="M11 12l9 0" />
                            <path d="M11 18l9 0" />
                        </svg>

                    </button>
                    <div class="ht">
                        <h5>
                            Đã Thanh Toán
                        </h5>
                        <h5>
                            {{ countStatus("Đã thanh toán") }}
                        </h5>

                    </div>
                </div>

                <div class="order-list">
                    <button class="status btn btn-warning mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="icon icon-tabler icons-tabler-outline icon-tabler-file-time">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                            <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
                            <path d="M12 14m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
                            <path d="M12 12.496v1.504l1 1" />
                        </svg>


                    </button>
                    <div class="ht">
                        <h5>
                            Đang chờ xử lí
                        </h5>
                        <h5>
                            {{ countStatus("Chưa thanh toán") }}
                        </h5>

                    </div>
                </div>

                <div class="order-list">
                    <button class="status btn btn-danger mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="icon icon-tabler icons-tabler-outline icon-tabler-device-tablet-cancel">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M12.5 21h-6.5a1 1 0 0 1 -1 -1v-16a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v8" />
                            <path d="M19 19m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                            <path d="M17 21l4 -4" />
                            <path d="M11 17a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
                        </svg>

                    </button>
                    <div class="ht">
                        <h5>
                            Đơn đã hủy
                        </h5>
                        <h5>
                            {{ countStatus("Đã hủy") }}
                        </h5>

                    </div>
                </div>

            </div>
            <div class="list col-sm-12" v-for="book in books" :key="book._id">
                <div class="ht col-sm-3 ">
                    <img :src="book.roomDetails.imgURL" alt="">


                </div>
                <div class="kt col-sm-3">
                    <p style="color: rgba(3, 18, 26, 1.00); font-weight: 700; font-size: 16px;">
                        {{ book.roomDetails.room_name }}
                    </p>
                    <p style="color:rgba(2, 100, 200, 1.00); font-weight: 500;font-size: 12px;">Mã khách sạn: {{
                        book.roomDetails.hotel_id }}</p>
                    <p style="font-size: 14px;"> {{ formatDate(book.check_in_date) }}-{{
                        formatDate(book.check_out_date) }}</p>
                    <p style="font-size: 14px;"> {{ book.roomDetails.room_name }}</p>
                    <p style="font-size: 14px;"> {{ book.roomDetails.room_number }}</p>
                    <p style="font-size: 14px;"> {{ book.roomDetails.room_type }}</p>
                    <p style="font-size: 14px;"> {{ book.roomDetails.capacity }}</p>
                    <p style="font-size: 14px;"> {{ book.roomDetails.price_per_night }}</p>
                    <p style="font-size: 14px;"> {{ book.roomDetails.availability }}</p>


                </div>
                <div class="kt col-sm-3">
                    <img :src="book.userDetails.imgURL" alt="" style="width: 100px;height: 100px;">

                    <p style="font-size: 14px;"> {{ book.email }}</p>
                    <p style="font-size: 14px;"> {{ book.phone }}</p>
                    <p style="font-size: 14px;"> {{ book.namebook }}</p>
                    <p style="font-size: 14px;"> {{ book.userDetails.address }}</p>
                    <p style="font-size: 14px;"> {{ book.userDetails.price_per_night }}</p>
                    <p style="font-size: 14px;"> {{ book.userDetails.availability }}</p>
                    <p style="font-size: 14px;"> {{ book.userDetails.capacity }}</p>

                </div>
                <div class="kt col-sm-3">
                    <p style="font-size: 14px;"> {{ book.booking_status }}</p>

                    <div style="display: flex;">

                        <button class="btn btn-success">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round"
                                class="icon icon-tabler icons-tabler-outline icon-tabler-cash-banknote">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                                <path
                                    d="M3 6m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
                                <path d="M18 12l.01 0" />
                                <path d="M6 12l.01 0" />
                            </svg>

                        </button>

                        <button class="btn btn-danger" style="margin-left: 50px;">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round"
                                class="icon icon-tabler icons-tabler-outline icon-tabler-device-tablet-cancel">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M12.5 21h-6.5a1 1 0 0 1 -1 -1v-16a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v8" />
                                <path d="M19 19m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                                <path d="M17 21l4 -4" />
                                <path d="M11 17a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
                            </svg>

                        </button>

                    </div>



                </div>








            </div>
        </div>
    </div>
</template>

<script>

import BookingService from '../services/datphong.service';


export default {
    data() {
        return {
            books: []
        };
    },
    props: {
        id: { type: String, required: true },
    },


    methods: {
        formatDate(dateString) {
            const date = new Date(dateString);
            return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
        },
        async getbook() {
            try {


                this.books = await BookingService.getAll();
                console.log("hello", this.books);

            } catch (error) {
                console.error(error);
            }
        },
        countStatus(status) {
            return this.books.filter(book => book.booking_status === status).length;
        },
        totalCount() {
            return this.books.length;
        },
    },
    created() {
        this.getbook();

    },

};
</script>

<style scoped>
.container {
    margin-top: 50px;
    padding: 20px;
}

.card {
    margin-top: 30px;
    background-color: #f9f9f9;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    padding: 20px;
}

.action {
    width: 50px;
    height: 40px;
}



h2 {
    margin-bottom: 30px;
    background-color: #f9f9f9;
    margin-top: 20px;
    justify-content: center;
    text-align: center;
    font-weight: 700;
    font-size: 28px;

}

p {

    font-weight: 900px;
    font-size: 20px;
    line-height: 28px;
    color: rgba(53, 65, 72, 1.00);

}

.order-list {
    display: flex;
    justify-content: space-around;
}




.order-status {
    color: #888;
}



.order-details {
    list-style-type: none;
    padding: 0;
}

.order-details td {
    margin-bottom: 10px;
}

.order-details strong {
    font-weight: bold;
    margin-right: 5px;
}

.he {
    display: flex;
    margin-bottom: 60px;
    justify-content: space-around;
}

.status {
    height: 55px;
}

.ht {
    padding: 10px;

}

.ht>img {
    width: 205px;
    height: 164px;
    border-radius: 10px;

}

.list {
    display: flex;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
    cursor: pointer;
    margin-bottom: 20px;
    border-radius: 10px;
}

.kt {
    padding-top: 10px;
}
</style>
