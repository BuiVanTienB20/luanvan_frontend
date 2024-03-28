<template>
    <div class="log">
        <div class="container-fluid">
            <div class="row">
                <div class="col-sm-6 text-black">


                    <Form style="width: 23rem; margin-left: 100px; margin-top: 100px; font-size: 14px;"
                        @submit="submitLogin" :validation-schema="loginFormSchema">

                        <h4 class="fw-normal "
                            style="letter-spacing: 1px; justify-content: center; text-align: center;">Đăng nhập</h4>

                        <div class="form-outline ">
                            <label class="form-label" for="form2Example18">Địa chỉ email</label>
                            <Field type="email" id="form2Example18" class="form-control form-control-lg" name="email"
                                v-model="loginLocal.email" />
                            <ErrorMessage name="email" class="error-feedback" style="color: rgb(238, 15, 15);" />


                        </div>

                        <div class="form-outline mb-2">
                            <label class="form-label" for="form2Example28">Mật khẩu</label>

                            <Field :type="showPassword ? 'text' : 'password'" id="form2Example28"
                                class="form-control form-control-lg" name="password" v-model="loginLocal.password" />


                            <ErrorMessage name="password" class="error-feedback" style="color: rgb(238, 15, 15);" />

                        </div>

                        <div class="mb-2 ">
                            <Toast />
                            <button class="btn btn-info btn-lg btn-block" type="submit" style="color: #ffff;"
                                @click.prevent="submitLogin">Đăng
                                nhập</button>
                        </div>


                        <p class="small  mb-2 pb-lg-2"><a class="text-danger" href="#!">Quên mật khẩu?</a></p>
                        <p>Bạn chưa có tài khoản?

                            <button class="btn btn-sm btn-success" @click="goToAddUsers()">
                                <router-link :to="{ name: 'user.register' }" class="link-info">
                                    Đăng ký
                                </router-link>

                            </button>

                        </p>
                        <div class="dkgg " style="text-align: center;">
                            <h6 class="mb-2">Hoặc đăng nhập/đăng ký với</h6>
                            <hr>

                            <button class="btn mb-2 gg">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="icon mr-2 icon-tabler icons-tabler-outline icon-tabler-brand-google">
                                    <path
                                        d="M20.945 11a9 9 0 1 1 -3.284 -5.997l-2.655 2.392a5.5 5.5 0 1 0 2.119 6.605h-4.125v-3h7.945z">
                                    </path>
                                </svg>Tiếp tục với Google
                            </button>
                            <button class="btn mb-2  fb"><svg class="mr-2" width="16" height="16" viewBox="0 0 24 24"
                                    fill="none" xmlns="http://www.w3.org/2000/svg" data-id="IcBrandSocialFb">
                                    <path
                                        d="M22 12.0609C22 6.50383 17.5234 2 12 2C6.47656 2 2 6.50383 2 12.0609C2 17.0835 5.65625 21.2454 10.4375 22V14.9691H7.89844V12.0609H10.4375V9.84437C10.4375 7.32325 11.9297 5.93005 14.2148 5.93005C15.3086 5.93005 16.4531 6.12655 16.4531 6.12655V8.60248H15.1914C13.9492 8.60248 13.5625 9.37866 13.5625 10.1745V12.0609H16.3359L15.8926 14.9691H13.5625V22C18.3438 21.2454 22 17.0835 22 12.0609Z"
                                        fill="#1877F2"></path>
                                </svg>Tiếp tục với Facebook</button>


                        </div>




                    </Form>




                </div>
                <div class="col-sm-6 px-0 d-none d-sm-block">
                    <img src="https://static-images.vnncdn.net/files/publish/2023/5/24/348559308-3784185538484345-527454361338992790-n-546.jpg"
                        alt="Login image" class="imglogin" style="object-fit: cover; object-position: left;">
                </div>
            </div>
        </div>
    </div>

</template>

<script>
import Button from 'primevue/button';
import Toast from 'primevue/toast';
import { ErrorMessage, Field, Form } from "vee-validate";
import * as yup from "yup";

export default {
    components: {
        Field,
        Form,
        ErrorMessage,
        Button,
        Toast
    },


    emits: ["submit:login"],


    data() {
        const loginFormSchema = yup.object().shape({

            email: yup
                .string()
                .required("Email phải có giá trị.")
                .email("E-mail không đúng.")
                .max(50, "E-mail tối đa 50 ký tự."),

            password: yup
                .string()
                .required("Mật khẩu phải có giá trị.")
                .min(8, "Tên phải ít nhất 8 ký tự.")
                .max(8, "Tên có nhiều nhất 8 ký tự."),




        });

        return {
            loginLocal: {

                email: "",
                password: "",

            },
            loginFormSchema,
            showPassword: false,
        };

    },

    methods: {
        submitLogin() {

            if (this.loginLocal.email && this.loginLocal.password) {
                this.$emit("submit:login", this.loginLocal);

            } else {
                this.$toast.add({ severity: 'error', summary: 'Lỗi', detail: 'Vui lòng điền đầy đủ thông tin.', life: 3000 });

            }




        },
        goToAddUsers() {
            this.$router.push({ name: 'user.register' });
        },
    },

};
</script>

<style scoped>
.log {
    margin-top: 60px;
    margin-bottom: 60px;
}

.bg-image-vertical {
    position: relative;
    overflow: hidden;
    background-repeat: no-repeat;
    background-position: right center;
    background-size: auto 100%;
}

@media (min-width: 1025px) {
    .h-custom-2 {
        height: 100%;
    }
}

.link-info {
    color: #ffff;
    text-decoration: none;
}

.imglogin {
    margin-top: 100px;
    width: 70vh;
    height: 70vh;
    border-radius: 5px;
}

.fb {
    border: 1px solid rgb(1, 148, 243);
    color: #3B5998;

}

.gg {
    border: 1px solid rgb(1, 148, 243);
    color: #DB4437;


}
</style>