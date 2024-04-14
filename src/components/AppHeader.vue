<template>
    <header>
        <div class="navt">
            <nav class="navbar navbar-expand navbar-dark bg-white">
                <a href="" class="navbar-brand">
                    <router-link :to="{ name: 'trangchu' }" class="nav-link">

                        <img src="../assets/img/Logo_Traveloka.png" alt="" class="rounded-circle logo-img mr-2">


                    </router-link>

                </a>
                <div>
                    <div class="navbar-user">
                        <router-link :to="{ name: 'login' }" class="login">
                            <img importance="low" loading="lazy"
                                src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/a/a3478fc6e57b8681609c1458bd50cbb9.svg"
                                decoding="async" width="16" height="16" style="border: 2px solid rgb(2, 100, 200); object-fit: none; object-position: 50% 50%;     border-bottom-left-radius: 9999px;
                            border-bottom-right-radius: 9999px;
                            border-top-left-radius: 9999px;
                            border-top-right-radius: 9999px;
                            " class="r-sdzlij r-1kb76zh">
                            VI|VND
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-down"
                                width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M6 9l6 6l6 -6" />

                            </svg>

                        </router-link>

                    </div>

                </div>
                <div>
                    <div class="navbar-user">
                        <router-link :to="{ name: 'login' }" class="login">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg" data-id="IcMarketingPromoBadge">
                                <circle cx="12" cy="12" r="10" stroke="#0194f3" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round"></circle>
                                <path
                                    d="M8.5 17.5L15.5 6.5C15.5 6.5 14 8.00002 12 8.00002C10 8.00002 8 7.05 8 7.05M8 7.00002V7.00002C9.10457 7.00002 10 7.89545 10 9.00002V9.00002C10 10.1046 9.10457 11 8 11V11C6.89543 11 6 10.1046 6 9.00002V9.00002C6 7.89545 6.89543 7.00002 8 7.00002V7.00002ZM18 15V15C18 16.1046 17.1046 17 16 17V17C14.8954 17 14 16.1046 14 15V15C14 13.8954 14.8954 13 16 13V13C17.1046 13 18 13.8954 18 15Z"
                                    stroke="#91EC00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                </path>
                            </svg>
                            Khuyến mãi

                        </router-link>

                    </div>

                </div>
                <div>
                    <div class="navbar-user">
                        <router-link :to="{ name: 'login' }" class="login">
                            Hỗ trợ

                        </router-link>

                    </div>

                </div>
                <div>
                    <div class="navbar-user">
                        <router-link :to="{ name: 'login' }" class="login">
                            Hợp tác với chúng tôi

                        </router-link>

                    </div>

                </div>

                <div>
                    <button class="navbar-user log" v-if="!isLoggedIn" @click="loginUser()">
                        <router-link :to="{ name: 'login' }" class="login">
                            <i class="fa-solid fa-user" style="color: rgb(1, 148, 243);"></i> Đăng Nhập

                        </router-link>

                    </button>

                </div>


                <div>
                    <button class="navbar-user reg" v-if="!isLoggedIn" @click="goToAddUsers()">
                        <router-link :to="{ name: 'user.register' }" class="login" style="color: #ffffff">
                            Đăng ký

                        </router-link>

                    </button>


                    <div class="dropdown" style="width: 250px;" v-else>
                        <button class="btn m-4 btn-secondary " type="button" id="dropdownMenuButton"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Tien

                        </button>
                        <div class="dropdown-menu" style="margin-top: -21px;" aria-labelledby="dropdownMenuButton">
                            <div class="m-2">
                                <b>Tien</b>
                            </div>
                            <button type="button" class="btn " @click="logout"
                                style="font-size: 16px; line-height: 14px; font-weight: 600">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" style="color: #FFCC00;"
                                    class="icon mr-2 icon-tabler icons-tabler-outline icon-tabler-mood-dollar">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M20.87 10.48a9 9 0 1 0 -7.876 10.465" />
                                    <path d="M9 10h.01" />
                                    <path d="M15 10h.01" />
                                    <path d="M9.5 15c.658 .64 1.56 1 2.5 1c.357 0 .709 -.052 1.043 -.151" />
                                    <path d="M21 15h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5" />
                                    <path d="M19 21v1m0 -8v1" />
                                </svg>

                                <b>0 Điểm</b>

                            </button>


                            <button type="button" class="btn" @click="logout"
                                style="font-size: 16px; line-height: 14px; font-weight: 600">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" style="color: #0066CC;"
                                    class="icon mr-2 icon-tabler icons-tabler-outline icon-tabler-user">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                                    <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                                </svg>
                                Chỉnh sửa hồ sơ

                            </button>





                            <button type="button" class="btn" @click="logout"
                                style="font-size: 16px; line-height: 14px; font-weight: 600;">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" style="color: #0066CC;"
                                    class="icon mr-2 icon-tabler icons-tabler-outline icon-tabler-credit-card">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path
                                        d="M3 5m0 3a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3z" />
                                    <path d="M3 10l18 0" />
                                    <path d="M7 15l.01 0" />
                                    <path d="M11 15l2 0" />
                                </svg>
                                Thẻ của tôi

                            </button>

                            <button type="button" class="btn" @click="logout"
                                style="font-size: 16px; line-height: 14px; font-weight: 600">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" style="color: #0066CC;"
                                    class="icon mr-2 icon-tabler icons-tabler-outline icon-tabler-clipboard-list">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path
                                        d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" />
                                    <path
                                        d="M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" />
                                    <path d="M9 12l.01 0" />
                                    <path d="M13 12l2 0" />
                                    <path d="M9 16l.01 0" />
                                    <path d="M13 16l2 0" />
                                </svg>
                                Danh sách giao dịch

                            </button>



                            <button type="button" class="btn" @click="logout"
                                style="font-size: 16px; line-height: 14px; font-weight: 600">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" style="color: #0066CC;"
                                    class="icon mr-2 icon-tabler icons-tabler-outline icon-tabler-vocabulary">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path
                                        d="M10 19h-6a1 1 0 0 1 -1 -1v-14a1 1 0 0 1 1 -1h6a2 2 0 0 1 2 2a2 2 0 0 1 2 -2h6a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-6a2 2 0 0 0 -2 2a2 2 0 0 0 -2 -2z" />
                                    <path d="M12 5v16" />
                                    <path d="M7 7h1" />
                                    <path d="M7 11h1" />
                                    <path d="M16 7h1" />
                                    <path d="M16 11h1" />
                                    <path d="M16 15h1" />
                                </svg>
                                Đặt chỗ của tôi

                            </button>

                            <button type="button" class="btn" @click="logout"
                                style="font-size: 16px; line-height: 14px; font-weight: 600">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" style="color: #0066CC;"
                                    class="icon mr-2 icon-tabler icons-tabler-outline icon-tabler-mail">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path
                                        d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
                                    <path d="M3 7l9 6l9 -6" />
                                </svg>
                                Khuyến mãi

                            </button>



                            <button type="button" class="btn" @click="logout"
                                style="font-size: 16px; line-height: 14px; font-weight: 600">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" style="color: #0066CC;"
                                    class="icon mr-2 icon-tabler icons-tabler-outline icon-tabler-power">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M7 6a7.75 7.75 0 1 0 10 0" />
                                    <path d="M12 4l0 8" />
                                </svg>
                                Đăng xuất

                            </button>















                        </div>
                    </div>


                </div>

            </nav>
            <div>
                <nav class="navbar navi">


                </nav>

            </div>






        </div>

    </header>

</template>


<script>
export default {
    data() {
        return {
            isLoggedIn: false,

            AModalVisible: false,

        };

    },
    methods: {

        goToAddUsers() {
            this.$router.push({ name: 'user.register' });
        },
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
            setTimeout(() => {
                this.$router.push({ name: "trangchu" });

            }, 2000);

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
header {
    color: #fff;
    padding: 10px 0;
    text-align: center;
    width: 100%;
    position: fixed;
    /* Cố định header ở trên cùng */
    top: 0;
    /* Đặt header ở trên cùng của trang */
    z-index: 1000;
    /* Đảm bảo header hiển thị trên các phần tử khác */
}


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
    font-size: 15px;
    /* Thu nhỏ kích thước chữ */
    font-weight: 500;
    /* Làm chữ in đậm */
    border: 2px;
    /* Loại bỏ đường viền */
    border-radius: 5px;

}

.log {
    padding: 10px;
    border: 2px solid rgb(45, 161, 238);
    background-color: #fff;

}

.log:hover {
    filter: brightness(90%);



}

.reg {
    padding: 10px 20px;
    background-color: rgb(45, 161, 238);

}

.reg:hover {
    filter: brightness(70%);
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
    padding: 24px;
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
}
</style>