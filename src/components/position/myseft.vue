<template>
    <div>
        <button class="btn btn-secondary " type="button" id="dropdownMenuButton" data-toggle="dropdown"
            aria-haspopup="true" aria-expanded="false">
            <img src="@/assets/img/chitonngoc.jpg" class="rounded-circle" height="55" width="60" alt="User"
                loading="lazy" />
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <button type="button" class="btn" @click="logout">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="icon icon-tabler icons-tabler-outline icon-tabler-power">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M7 6a7.75 7.75 0 1 0 10 0" />
                    <path d="M12 4l0 8" />
                </svg>
                Đăng xuất

            </button>


            <button type="button" class="btn" @click="logout">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="icon icon-tabler icons-tabler-outline icon-tabler-power">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M7 6a7.75 7.75 0 1 0 10 0" />
                    <path d="M12 4l0 8" />
                </svg>
                Đăng xuất

            </button>





            <button type="button" class="btn" @click="logout">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="icon icon-tabler icons-tabler-outline icon-tabler-power">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M7 6a7.75 7.75 0 1 0 10 0" />
                    <path d="M12 4l0 8" />
                </svg>
                Đăng xuất

            </button>

            <button type="button" class="btn" @click="logout">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="icon icon-tabler icons-tabler-outline icon-tabler-power">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M7 6a7.75 7.75 0 1 0 10 0" />
                    <path d="M12 4l0 8" />
                </svg>
                Đăng xuất

            </button>



            <button type="button" class="btn" @click="logout">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="icon icon-tabler icons-tabler-outline icon-tabler-power">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M7 6a7.75 7.75 0 1 0 10 0" />
                    <path d="M12 4l0 8" />
                </svg>
                Đăng xuất

            </button>

            <button type="button" class="btn" @click="logout">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="icon icon-tabler icons-tabler-outline icon-tabler-power">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M7 6a7.75 7.75 0 1 0 10 0" />
                    <path d="M12 4l0 8" />
                </svg>
                Đăng xuất

            </button>

            <button type="button" class="btn" @click="logout">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="icon icon-tabler icons-tabler-outline icon-tabler-power">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M7 6a7.75 7.75 0 1 0 10 0" />
                    <path d="M12 4l0 8" />
                </svg>
                Đăng xuất

            </button>

            <button type="button" class="btn" @click="logout">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="icon icon-tabler icons-tabler-outline icon-tabler-power">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M7 6a7.75 7.75 0 1 0 10 0" />
                    <path d="M12 4l0 8" />
                </svg>
                Đăng xuất

            </button>

            <button type="button" class="btn" @click="logout">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="icon icon-tabler icons-tabler-outline icon-tabler-power">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M7 6a7.75 7.75 0 1 0 10 0" />
                    <path d="M12 4l0 8" />
                </svg>
                Đăng xuất

            </button>
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


<style></style>