<template>
    <div class="listtrain">
        <div class="container">
            <div class="row">
                <div class="col-sm-3">
                    <table class="table align-middle mb-0 bg-white">
                        <thead class="bg-light">
                            <tr>
                                <th style="text-align:  center;">




                                </th>


                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>



                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round"
                                        class="icon icon-tabler icons-tabler-outline icon-tabler-user-square">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M9 10a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                                        <path d="M6 21v-1a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v1" />
                                        <path
                                            d="M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14z" />
                                    </svg>
                                    <router-link :to="{ name: 'admin-user' }" style="text-decoration: none; class "
                                        class="textp">
                                        Chỉnh sửa hồ sơ

                                    </router-link>

                                </td>

                            </tr>
                            <tr>
                                <td>



                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round"
                                        class="icon icon-tabler icons-tabler-outline icon-tabler-coin">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                                        <path
                                            d="M14.8 9a2 2 0 0 0 -1.8 -1h-2a2 2 0 1 0 0 4h2a2 2 0 1 1 0 4h-2a2 2 0 0 1 -1.8 -1" />
                                        <path d="M12 7v10" />
                                    </svg>
                                    <router-link :to="{ name: 'admin-user' }" style="text-decoration: none;"
                                        class="textp">
                                        Điểm thưởng của tôi

                                    </router-link>

                                </td>

                            </tr>

                            <tr>
                                <td>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round"
                                        class="icon icon-tabler icons-tabler-outline icon-tabler-cards">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path
                                            d="M3.604 7.197l7.138 -3.109a.96 .96 0 0 1 1.27 .527l4.924 11.902a1 1 0 0 1 -.514 1.304l-7.137 3.109a.96 .96 0 0 1 -1.271 -.527l-4.924 -11.903a1 1 0 0 1 .514 -1.304z" />
                                        <path d="M15 4h1a1 1 0 0 1 1 1v3.5" />
                                        <path d="M20 6c.264 .112 .52 .217 .768 .315a1 1 0 0 1 .53 1.311l-2.298 5.374" />
                                    </svg>

                                    <router-link :to="{ name: 'admin-position' }" class="textp">
                                        Thẻ của tôi
                                    </router-link>
                                </td>

                            </tr>
                            <tr>
                                <td>
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        class="icon icon-tabler icon-tabler-align-box-center-stretch" width="24"
                                        height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                                        fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <path
                                            d="M3 19v-14a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z">
                                        </path>
                                        <path d="M11 17h2"></path>
                                        <path d="M9 12h6"></path>
                                        <path d="M10 7h4"></path>
                                    </svg>

                                    <router-link :to="{ name: 'Bookingmanagement' }" class="textp">
                                        Danh sách giao dịch
                                    </router-link>
                                </td>

                            </tr>
                            <tr>
                                <td>
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        class="icon icon-tabler icon-tabler-chart-bar" width="24" height="24"
                                        viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                                        stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path
                                            d="M3 12m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
                                        <path
                                            d="M9 8m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
                                        <path
                                            d="M15 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
                                        <path d="M4 20l14 0" />
                                    </svg>

                                    <router-link :to="{ name: 'statistical' }" class="textp">
                                        Thống kê giao dịch
                                    </router-link>
                                </td>

                            </tr>
                            <tr>
                                <td>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round"
                                        class="icon icon-tabler icons-tabler-outline icon-tabler-home">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M5 12l-2 0l9 -9l9 9l-2 0" />
                                        <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
                                        <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
                                    </svg>

                                    <router-link :to="{ name: 'trangchu' }" class="textp">
                                        Trang chủ
                                    </router-link>
                                </td>

                            </tr>


                        </tbody>
                    </table>


                </div>
                <div class="col-sm-9">
                    <!-- Trang hiển thị thông tin người dùng -->
                    <div class="container">

                        <div class="card row d-flex">
                            <h4 style=" color: rgb(108 129 140)"> Danh sách đặt phòng của tôi</h4>
                            <div class="he col-sm-12">

                                <div class="order-list">

                                    <button class="status  btn btn-primary mr-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round"
                                            class="icon icon-tabler icons-tabler-outline icon-tabler-list-details">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <path d="M13 5h8" />
                                            <path d="M13 9h5" />
                                            <path d="M13 15h8" />
                                            <path d="M13 19h5" />
                                            <path
                                                d="M3 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
                                            <path
                                                d="M3 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
                                        </svg>



                                    </button>
                                    <div class="ht">
                                        <h5>
                                            Tổng đơn
                                        </h5>
                                        <h5>
                                            {{ totalCount() }}
                                        </h5>
                                    </div>
                                </div>


                                <div class="order-list">

                                    <button class="status btn btn-success mr-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round"
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
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round"
                                            class="icon icon-tabler icons-tabler-outline icon-tabler-file-time">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                                            <path
                                                d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
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
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round"
                                            class="icon icon-tabler icons-tabler-outline icon-tabler-device-tablet-cancel">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <path
                                                d="M12.5 21h-6.5a1 1 0 0 1 -1 -1v-16a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v8" />
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
                            <div class="tlt col-sm-12" v-for="book in books" :key="book._id">
                                <div class="list col-sm-12">
                                    <div class="ht col-sm-3 ">
                                        <img :src="book.roomDetails.imgURL" alt="">
                                        <p style="color:rgba(2, 100, 200, 1.00); font-weight: 500;font-size: 12px;white-space: nowrap;">Mã
                                            khách
                                            sạn: {{
                                                book.roomDetails.hotel_id }}</p>


                                    </div>
                                    <div class="kt col-sm-3">
                                        <p style="color: rgba(3, 18, 26, 1.00); font-weight: 700; font-size: 16px;">
                                            {{ book.roomDetails.room_name }}
                                        </p>
                                        




                                    </div>
                                    <div class="kt col-sm-3">
                                    




                                        <p style="font-size: 14px;"> {{ book.phone }}</p>
                                        <p style="font-size: 14px;"> {{ book.namebook }}</p>
                                     

                                        <p style="font-size: 14px;"> {{ book.userDetails.address }}</p>


                                    </div>
                                    <div class="kt col-sm-3">
                                        <p style="font-size: 14px;"> {{ book.booking_status }}</p>

                                        <div style="display: flex;">

                                            <button class="btn btn-success">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                    viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
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
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                    viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                                    class="icon icon-tabler icons-tabler-outline icon-tabler-device-tablet-cancel">
                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                    <path
                                                        d="M12.5 21h-6.5a1 1 0 0 1 -1 -1v-16a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v8" />
                                                    <path d="M19 19m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                                                    <path d="M17 21l4 -4" />
                                                    <path d="M11 17a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
                                                </svg>

                                            </button>

                                        </div>
                                    </div>

                                </div>
                                <div class="listp col-sm-12">
                                    <div style="font-size: 14px;"><svg xmlns="http://www.w3.org/2000/svg" width="24"
                                            height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                            class="icon icon-tabler icons-tabler-outline icon-tabler-calendar-clock">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <path
                                                d="M10.5 21h-4.5a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v3" />
                                            <path d="M16 3v4" />
                                            <path d="M8 3v4" />
                                            <path d="M4 11h10" />
                                            <path d="M18 18m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
                                            <path d="M18 16.5v1.5l.5 .5" />
                                        </svg> {{ formatDate(book.check_in_date) }}-{{
                                            formatDate(book.check_out_date) }}</div>

                                    <div style="font-size: 14px;"> <b>Số phòng:</b> {{ book.roomDetails.room_number }}
                                    </div>
                                    <div style="font-size: 14px;"> {{ book.roomDetails.room_type }}</div>
                                    <div style="font-size: 14px;"> <b>Dành cho:</b> {{ book.roomDetails.capacity }}
                                        người
                                    </div>
                                    <div style="font-size: 14px;color: chartreuse;"> <svg
                                            xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round"
                                            class="icon icon-tabler icons-tabler-outline icon-tabler-receipt-2">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <path
                                                d="M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16l-3 -2l-2 2l-2 -2l-2 2l-2 -2l-3 2" />
                                            <path
                                                d="M14 8h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5m2 0v1.5m0 -9v1.5" />
                                        </svg>{{ (book.roomDetails.price_per_night * 1).toLocaleString('en-US', {
                                            minimumFractionDigits: 0,
                                            maximumFractionDigits: (book.roomDetails.price_per_night >= 1000) ? 3 : 0
                                        })
                                        }},000 VND</div>

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

import BookingService from '../../services/datphong.service';


export default {
    data() {
        return {
            books: [],
            user: null

        };
    },
    props: {
        id: { type: String, required: true },
    },
    mounted() {
        // Lấy dữ liệu từ LocalStorage
        const localStorageData = localStorage.getItem('user');
        this.user = JSON.parse(localStorageData);
        this.getbook();
    },


    methods: {
        formatDate(dateString) {
            const date = new Date(dateString);
            return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
        },
        async getbook() {
            try {



                this.books = await BookingService.findOrdersByUserId(this.user._id);

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
.listtrain {
    margin-top: 160px;
    margin-bottom: 160px;
}

.container {}

.card {

    background-color: #f9f9f9;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    padding: 20px;
}

.action {
    width: 50px;
    height: 40px;
}



h4 {
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
    width: 150px;
    height: 130px;
    border-radius: 10px;

}

.tlt {
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
    cursor: pointer;
    margin-bottom: 20px;
    border-radius: 10px;

}

.list {
    display: flex;
    font-weight: 700;

}

.listp {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    font-weight: 700;



}


.kt {
    padding-top: 10px;
}

.table tbody tr:hover {
    background-color: #f2f2f2;
    cursor: pointer;
}

.table thead tr th {
    color: #528B8B;
}

.table tbody tr td {


    padding-left: 40px;
    font-weight: 700;



}

.table tbody tr td .textp {
    color: #000;
}

.table tbody tr td .textp:hover {
    color: #528B8B;
}

.textp {
    text-decoration: none;

}


/* Change the text color and icon color on hover */
.table tbody tr:hover td {
    color: #528B8B;
    /* Change to the desired text color */
}

/* Style the SVG icons inside the <td> elements */

/* Create a pseudo-element :after with a line on hover */
.table tbody tr:hover:after {
    content: "";
    display: block;
    width: 100%;
    height: 1px;
    background-color: #528B8B;
    /* Change to the desired line color */
}

.home {
    margin-top: 30px;
    margin-left: 60px;


}

button {


    border-radius: 5px;

}
</style>
