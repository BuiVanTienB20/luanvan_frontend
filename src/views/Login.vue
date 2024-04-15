<template>
    <div class="lg">
        <p>{{ message }}</p>
        <FormLogin @submit:login="loginUser" />

    </div>
</template>

<script>
import FormLogin from "@/components/Formlogin.vue";
import UserService from "@/services/user.service.js";


export default {
    components: {
        FormLogin,
    },
    data() {
        return {
            message: "",
        };
    },
    methods: {
        async loginUser(data) {
            try {
                const response = await UserService.login(data);
                console.log("hello", response);
                localStorage.setItem('user', JSON.stringify(response.user));

                if (response && response.message === 'Đăng nhập thành công') {
                    // Check the user's role
                    if (response.user.role === 'admin') {
                        this.message = "Đăng nhập thành công vào trang admin";
                        setTimeout(() => {
                            this.$router.push({ name: 'awelcome' }); // Assuming 'admin' is the name of your admin route.

                        }, 1000);
                        this.showToast({
                            severity: 'success',
                            summary: 'Thành công',
                            detail: 'Bạn đã đăng nhập tài khoản',
                            life: 3000
                        });

                    } else {
                        this.message = "Đăng nhập thành công";
                        setTimeout(() => {
                            this.$router.push({ name: 'trangchu' }); // Assuming 'auth' is the name of your user route.

                        }, 1000);
                        this.showToast({
                            severity: 'success',
                            summary: 'Thành công',
                            detail: 'Bạn đã đăng nhập tài khoản',
                            life: 3000
                        });


                    }
                } else {
                    this.message = "Đăng nhập thất bại, mật khẩu hoặc email chưa chính xác";
                    this.showToast({
                        severity: 'error',
                        summary: 'Email hoặc mật khẩu không chính xác',
                        detail: 'Vui lòng kiểm tra lại',
                        life: 3000
                    });
                }
            } catch (error) {
                console.error("Login error:", error);
                this.message = "Đăng nhập thất bại, mật khẩu hoặc email chưa chính xác";
                this.showToast({
                    severity: 'error',
                    summary: 'Email hoặc mật khẩu không chính xác',
                    detail: 'Vui lòng kiểm tra lại',
                    life: 3000
                });
            }
        },
        showToast(toastConfig) {
            // Show toast using the PrimeVue toast component
            this.$toast.add(toastConfig);
        }


    },
};
</script>

<style scoped>
.lg>p {
    margin-bottom: 28px;
    color: rgb(249, 4, 4);
}
</style>