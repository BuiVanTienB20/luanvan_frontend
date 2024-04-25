<template>
    <div class="menu">
        <table class="table align-middle mb-0 bg-white">
            <thead class="bg-light">
                <tr>
                    <th style="text-align:  center;">

                        Quản Trị Viên


                    </th>


                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>



                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-user-hexagon"
                            width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                            fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M12 13a3 3 0 1 0 0 -6a3 3 0 0 0 0 6z"></path>
                            <path d="M6.201 18.744a4 4 0 0 1 3.799 -2.744h4a4 4 0 0 1 3.798 2.741"></path>
                            <path
                                d="M19.875 6.27c.7 .398 1.13 1.143 1.125 1.948v7.284c0 .809 -.443 1.555 -1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1 -2.184 0l-6.75 -4.27a2.225 2.225 0 0 1 -1.158 -1.948v-7.285c0 -.809 .443 -1.554 1.158 -1.947l6.75 -3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033z">
                            </path>
                        </svg>
                        <router-link :to="{ name: 'admin-user' }" style="text-decoration: none; class " class="textp">
                            Tài khoản hệ thống

                        </router-link>

                    </td>

                </tr>

                <tr>
                    <td>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="icon icon-tabler icons-tabler-outline icon-tabler-building-skyscraper">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M3 21l18 0" />
                            <path d="M5 21v-14l8 -4v18" />
                            <path d="M19 21v-10l-6 -4" />
                            <path d="M9 9l0 .01" />
                            <path d="M9 12l0 .01" />
                            <path d="M9 15l0 .01" />
                            <path d="M9 18l0 .01" />
                        </svg>

                        <router-link :to="{ name: 'admin-position' }" class="textp">
                            Quản lí khách sạn
                        </router-link>
                    </td>

                </tr>
                <tr>
                    <td>
                        <svg xmlns="http://www.w3.org/2000/svg"
                            class="icon icon-tabler icon-tabler-align-box-center-stretch" width="24" height="24"
                            viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                            stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M3 19v-14a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z">
                            </path>
                            <path d="M11 17h2"></path>
                            <path d="M9 12h6"></path>
                            <path d="M10 7h4"></path>
                        </svg>

                        <router-link :to="{ name: 'Bookingmanagement' }" class="textp">
                            Quản lí đặt phòng
                        </router-link>
                    </td>

                </tr>
                <tr>
                    <td>
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chart-bar"
                            width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                            fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M3 12m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
                            <path d="M9 8m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
                            <path d="M15 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
                            <path d="M4 20l14 0" />
                        </svg>

                        <router-link :to="{ name: 'statistical' }" class="textp">
                            Thống kê (giả định) doanh thu trong năm
                        </router-link>
                    </td>

                </tr>


            </tbody>
        </table>
        <div class="button">

            <button type="button" class="btn btn-secondary" @click="logout">
                Đăng xuất

            </button>



        </div>



    </div>
</template>

<script>
import Toast from 'primevue/toast';
export default {
    components: {
        Toast
    },
    methods: {



        logout() {
            window.localStorage.removeItem('user');
            this.isLoggedIn = false;
            setTimeout(() => {
                this.$router.push({ name: "trangchu" });

            }, 2000);




        },



    }

}
</script>

<style scoped>
.menu {
    margin-top: 0;
    /* Cố định header ở trên cùng */
    position: fixed;
    top: 0;
    /* Đặt header ở trên cùng của trang */
    z-index: 1000;
    /* Đảm bảo header hiển thị trên các phần tử khác */
    margin-bottom: 20px;
}

/* Style the <tr> elements when hovered */
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

.button {
    margin-top: 30px;
    margin-left: 60px;


}

button {
    color: #f2f2f2;
    background-color: #8B7B8B;
    border-radius: 5px;

}
</style>
