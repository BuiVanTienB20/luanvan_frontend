<template>
    <div class="navt">
        <nav class="navbar navbar-expand navbar-dark bg-white">
            <a href="" class="navbar-brand">
                <router-link :to="{ name: 'trangchu' }" class="nav-link">

                    <img src="../assets/img/Logo_Traveloka.png" alt="" class="rounded-circle logo-img mr-2">


                </router-link>

            </a>
            <div>
                <div class="navbar-user" v-if="!isLoggedIn" @click="loginUser()">
                    <router-link :to="{ name: 'login' }" class="login">
                        <img importance="low" loading="lazy"
                            src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/a/a3478fc6e57b8681609c1458bd50cbb9.svg"
                            decoding="async" width="16" height="16" style="border: 2px solid rgb(2, 100, 200); object-fit: none; object-position: 50% 50%;     border-bottom-left-radius: 9999px;
                            border-bottom-right-radius: 9999px;
                            border-top-left-radius: 9999px;
                            border-top-right-radius: 9999px;
                            " class="r-sdzlij r-1kb76zh">
                        VI|VND
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-down" width="24"
                            height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"
                            stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M6 9l6 6l6 -6" />

                        </svg>

                    </router-link>

                </div>

            </div>
            <div>
                <div class="navbar-user" v-if="!isLoggedIn" @click="loginUser()">
                    <router-link :to="{ name: 'login' }" class="login">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                            data-id="IcMarketingPromoBadge">
                            <circle cx="12" cy="12" r="10" stroke="#0194f3" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round"></circle>
                            <path
                                d="M8.5 17.5L15.5 6.5C15.5 6.5 14 8.00002 12 8.00002C10 8.00002 8 7.05 8 7.05M8 7.00002V7.00002C9.10457 7.00002 10 7.89545 10 9.00002V9.00002C10 10.1046 9.10457 11 8 11V11C6.89543 11 6 10.1046 6 9.00002V9.00002C6 7.89545 6.89543 7.00002 8 7.00002V7.00002ZM18 15V15C18 16.1046 17.1046 17 16 17V17C14.8954 17 14 16.1046 14 15V15C14 13.8954 14.8954 13 16 13V13C17.1046 13 18 13.8954 18 15Z"
                                stroke="#91EC00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                        Khuyến mãi

                    </router-link>

                </div>

            </div>
            <div>
                <div class="navbar-user" v-if="!isLoggedIn" @click="loginUser()">
                    <router-link :to="{ name: 'login' }" class="login">
                        Hỗ trợ

                    </router-link>

                </div>

            </div>
            <div>
                <div class="navbar-user" v-if="!isLoggedIn" @click="loginUser()">
                    <router-link :to="{ name: 'login' }" class="login">
                        Hợp tác với chúng tôi

                    </router-link>

                </div>

            </div>
            <div>
                <div class="navbar-user" v-if="!isLoggedIn" @click="loginUser()">
                    <router-link :to="{ name: 'login' }" class="login">
                        Đặt chỗ của tôi

                    </router-link>

                </div>

            </div>
            <div>
                <button class="navbar-user" v-if="!isLoggedIn" @click="loginUser()">
                    <router-link :to="{ name: 'login' }" class="login">
                        <i class="fa-solid fa-user"></i> Đăng Nhập

                    </router-link>

                </button>

            </div>


            <div>
                <button class="navbar-user" v-if="!isLoggedIn" @click="loginUser()">
                    <router-link :to="{ name: 'login' }" class="login">
                        Đăng ký

                    </router-link>

                </button>


                <div class="dropdown" v-else>
                    <button class="btn btn-secondary " type="button" id="dropdownMenuButton" data-toggle="dropdown"
                        aria-haspopup="true" aria-expanded="false">
                        <img src="@/assets/img/chitonngoc.jpg" class="rounded-circle" height="55" width="60" alt="User"
                            loading="lazy" />
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">

                        <button type="button" class="btn btn-success" @click="logout">
                            Đăng xuất

                        </button>




                    </div>
                </div>


            </div>

        </nav>
        <div>
            <nav class="navbar navi">
                <div class="" style="margin-right: 16px;;margin-left: auto;">
                    <router-link :to="{ name: 'auth' }" class="" style="color: #ffffff;">
                        Khách sạn
                    </router-link>

                </div>
                <div class="" style="margin-right: 16px;; ">
                    <router-link :to="{ name: 'psuccess' }" class="" style="color: #ffffff;">
                        Vé máy bay
                    </router-link>



                </div>

                <div class="" style="margin-right: 16px;; ">
                    <router-link :to="{ name: 'psuccess' }" class="" style="color: #ffffff;">
                        Vé xe khách
                    </router-link>



                </div>

                <div class="" style="margin-right: 16px;; ">
                    <router-link :to="{ name: 'psuccess' }" class="" style="color: #ffffff;">
                        Đưa đón sân bay
                    </router-link>



                </div>
                <div class="" style="margin-right: 16px;; ">
                    <router-link :to="{ name: 'psuccess' }" class="" style="color: #ffffff;">
                        Cho thuê xe
                    </router-link>



                </div>

                <div class="" style="margin-right: 16px;; ">
                    <router-link :to="{ name: 'psuccess' }" class="" style="color: #ffffff;">
                        Hoạt động vui chơi
                    </router-link>



                </div>

                <div class="" style="margin-right: 16px;; ">
                    <router-link :to="{ name: 'psuccess' }" class="" style="color: #ffffff;">
                        More
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-down" width="24"
                            height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"
                            stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M6 9l6 6l6 -6" />
                        </svg>
                    </router-link>



                </div>
                <div :class="''" style="color: white;margin-right: auto;"></div>
            </nav>

        </div>






    </div>
</template>


<script>


export default {

    data() {
        return {
            isLoggedIn: false,

            AModalVisible: false,

        };

    },



    mounted() {
        // Khai báo biến intervalId bằng let hoặc const
        let intervalId;

        // Gọi đoạn code mỗi 5 giây và lưu giá trị được trả về bởi setInterval
        intervalId = setInterval(() => {
            const userJs = window.localStorage.getItem('user');
            const user = JSON.parse(userJs);


            if (user) {
                // console.log('user', user);
                this.isLoggedIn = true;
            }
        }, 100); // Gọi mỗi 0,1 giây 

        // Để dừng việc gọi đoạn code sau một thời gian hoặc khi điều kiện nào đó được thỏa mãn, bạn có thể sử dụng clearInterval(intervalId)

        // Ví dụ: Dừng việc gọi đoạn code sau 300 giây
        setTimeout(() => {
            clearInterval(intervalId);
        }, 3000000);
    },




    methods: {



        logout() {
            window.localStorage.removeItem('user');
            this.isLoggedIn = false;


            this.$router.push({ name: "trangchu" });
        },
        loginUser() {

            this.$router.push({ name: "login" });
        },
        openModal() {
            this.AModalVisible = false;
        },


    }
};
</script>



<style scoped>
/* CSS để bo tròn ảnh và thu nhỏ nó */

.nav-link {
    display: block;
    padding: 0.5rem 1rem;
    margin-left: 120px;
    margin-right: 150px;

}

.navbar {
    display: flex;
    justify-content: space-between;
    margin-top: -30px;
    padding-bottom: 30px;

    padding-right: 150px;


}

.navbar-user {
    font-size: 13px;
    /* Thu nhỏ kích thước chữ */
    font-weight: 500;
    /* Làm chữ in đậm */
    border: 2px;
    /* Loại bỏ đường viền */
    border-radius: 5px;

}

.navbar-user button {
    border: 2px;
    /* Loại bỏ đường viền */
    border-radius: 5px;
    background-color: transparent;
    /* Đặt nền trong suốt */
    cursor: pointer;
    /* Biến đổi con trỏ khi di chuột vào */
}

.navbar-user button:hover {
    text-decoration: underline;
    /* Hiển thị gạch chân khi di chuột vào */
}



.logo-img {
    border-radius: 50%;
    /* Bo tròn ảnh */
    width: 135px;
    /* Thu nhỏ ảnh thành 1/4 kích thước ban đầu */
}

.logo-container {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 25%;
    margin-left: 150px;
}


.logo-link {
    text-decoration: none;
    /* Loại bỏ gạch chân */
    color: inherit;
    /* Giữ màu sắc mặc định */
}




.navbar-brand {
    display: flex;
    /* Sử dụng flexbox để căn chỉnh các phần tử con */
    align-items: flex-end;
    /* Căn dưới cùng */
    justify-content: center;
    /* Căn giữa theo chiều ngang */
    text-decoration: none;
    /* Loại bỏ gạch chân khi hover */

}

/* CSS để định dạng văn bản */
.logo-text {
    font-size: 18px;
    /* Điều chỉnh kích thước font chữ */
    color: white;
    /* Điều chỉnh màu sắc của văn bản */
    text-align: center;
    /* Căn giữa văn bản */
    margin-top: 10px;
    /* Khoảng cách từ logo đến văn bản (điều chỉnh giá trị này theo nhu cầu) */
}

.navi {
    background-color: #327ced;
    /* Màu nền xanh */
    display: flex;
    align-items: center;
    padding: 10px;
    /* Khoảng cách nền và chữ trong thẻ div */
    border-radius: 1px;
    /* Bo góc thẻ div */
}

.nav-item {
    cursor: pointer;
    margin: 0 10px;
    position: relative;
    /* Để xác định vị trí của thanh ngang */
}

.nav-item::after {
    content: '';
    /* Tạo nội dung trống cho thanh ngang */
    position: absolute;
    /* Đặt vị trí tuyệt đối */
    left: 0;
    /* Đặt bên trái */
    bottom: -2px;
    /* Đặt bên dưới và căn đều theo chiều ngang */
    width: 100%;
    /* Chiều rộng của thanh ngang */
    height: 2px;
    /* Chiều cao của thanh ngang */
    background-color: white;
    /* Màu sắc của thanh ngang */
    transform: scaleX(0);
    /* Thu gọn thanh ngang theo chiều ngang ban đầu */
    transform-origin: left;
    /* Đặt gốc xoay ở bên trái */
    transition: transform 0.3s;
    /* Hiệu ứng chuyển đổi */
}

.nav-item:hover::after {
    transform: scaleX(1);
    /* Mở rộng thanh ngang khi hover */
}

.login {
    text-decoration: none;
    color: black;
}

.login:hover {
    text-decoration: none;
    color: black;

}

/* 
.dropdown-menu {
    margin-left: -70px;
} */
.custom-logo-text {
    /* Apply your custom styles for the "Shop Cereal" text here */
    font-family: 'Your Custom Font', sans-serif;
    /* Example: Change font family to a custom font */
    font-size: 24px;
    /* Example: Change font size to 24 pixels */
    font-weight: bold;
    /* Example: Make the text bold */
    color: #ff6600;
    /* Example: Change text color to orange */
    /* Add any other styles you want to customize the text appearance */
}</style>