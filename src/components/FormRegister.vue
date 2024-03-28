<template>
    <div class="reg">
        <section class="vh-200"
            style="background-image: url('https://img.freepik.com/free-photo/person-practicing-yoga-meditation-nature-sunset-sunrise_23-2150838495.jpg?t=st=1700828870~exp=1700832470~hmac=9704fcd27c5d9160b380220b9c8087e663f01ed29e45e64ecd97c958dd7c2bda&w=360');">
            <div class=" ">
                <div class="container h-100 ">
                    <div class="row  d-flex justify-content-center align-items-center h-100" style="padding: 20px;">
                        <div class="col-12 col-md-9 col-lg-7">
                            <div class="card" style="border-radius: 15px;">
                                <div class="card-body p-5">
                                    <h2 class="text-uppercase text-center ">TẠO MỘT TÀI KHOẢN</h2>

                                    <Form @submit="submitUser" :validation-schema="userFormSchema">

                                        <div class="form-outline ">
                                            <label class="form-label" for="form3Example1cg">Tên của bạn</label>
                                            <Field type="text" id="form3Example1cg" class="form-control form-control-lg"
                                                name="name" v-model="userLocal.name" />
                                            <ErrorMessage name="name" class="error-feedback"
                                                style="color: rgb(238, 15, 15);" />

                                        </div>

                                        <div class="form-outline">
                                            <label class="form-label" for="form3Example3cg">Email của bạn</label>
                                            <Field type="email" id="form3Example3cg"
                                                class="form-control form-control-lg" name="email"
                                                v-model="userLocal.email" />
                                            <ErrorMessage name="email" class="error-feedback"
                                                style="color: rgb(238, 15, 15);" />


                                        </div>

                                        <div class="form-outline">
                                            <label class="form-label" for="form3Example4cg">Mật khẩu</label>
                                            <Field :type="showPassword ? 'text' : 'password'" id="form3Example4cg"
                                                class="form-control form-control-lg" name="password"
                                                v-model="userLocal.password" />

                                            <i class="far fa-eye" @click="showPassword = !showPassword"
                                                style="cursor: pointer;position: relative; left: 450px; bottom: 35px;">
                                            </i>

                                            <ErrorMessage name="password" class="error-feedback"
                                                style="color: rgb(238, 15, 15);" />


                                        </div>

                                        <div class="form-outline">
                                            <label class="form-label" for="form3Example4cdg">Nhập lại mật khẩu</label>
                                            <Field :type="showPassword ? 'text' : 'password'" id="form3Example4cdg"
                                                class="form-control form-control-lg" name="respassword"
                                                v-model="userLocal.respassword" />
                                            <i class="far fa-eye" @click="showPassword = !showPassword"
                                                style="cursor: pointer;position: relative;left: 450px; bottom: 35px; ">
                                            </i>
                                            <ErrorMessage name="respassword" class="error-feedback"
                                                style="color: rgb(238, 15, 15);" />


                                        </div>



                                        <div class="d-flex mb-4 justify-content-center">
                                            <Toast />

                                            <button type="submit"
                                                class="btn btn-success btn-block btn-lg gradient-custom-4 "
                                                @click.prevent="submitUser">
                                                Đăng ký
                                            </button>
                                        </div>
                                        <div class="dkgg " style="text-align: center;">
                                            <h6 class="mb-2">Hoặc đăng nhập/đăng ký với</h6>
                                            <hr>

                                            <button class="btn mr-2 mb-2 gg">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                    viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                                    class="icon mr-2 icon-tabler icons-tabler-outline icon-tabler-brand-google">
                                                    <path
                                                        d="M20.945 11a9 9 0 1 1 -3.284 -5.997l-2.655 2.392a5.5 5.5 0 1 0 2.119 6.605h-4.125v-3h7.945z">
                                                    </path>
                                                </svg>Tiếp tục với Google
                                            </button>
                                            <button class="btn mb-2  fb"><svg class="mr-2" width="16" height="16"
                                                    viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                                    data-id="IcBrandSocialFb">
                                                    <path
                                                        d="M22 12.0609C22 6.50383 17.5234 2 12 2C6.47656 2 2 6.50383 2 12.0609C2 17.0835 5.65625 21.2454 10.4375 22V14.9691H7.89844V12.0609H10.4375V9.84437C10.4375 7.32325 11.9297 5.93005 14.2148 5.93005C15.3086 5.93005 16.4531 6.12655 16.4531 6.12655V8.60248H15.1914C13.9492 8.60248 13.5625 9.37866 13.5625 10.1745V12.0609H16.3359L15.8926 14.9691H13.5625V22C18.3438 21.2454 22 17.0835 22 12.0609Z"
                                                        fill="#1877F2"></path>
                                                </svg>Tiếp tục với Facebook</button>


                                        </div>



                                    </Form>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>

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


    emits: ["submit:user"],


    data() {
        const userFormSchema = yup.object().shape({
            name: yup
                .string()
                .required("Tên phải có giá trị.")
                .min(2, "Tên phải ít nhất 2 ký tự.")
                .max(50, "Tên có nhiều nhất 50 ký tự."),
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

            respassword: yup
                .string()
                .required("Mật khẩu phải có giá trị.")
                .min(8, "Tên phải ít nhất 8 ký tự.")
                .max(8, "Tên có nhiều nhất 8 ký tự.")
                .test("password-match", "Mật khẩu không khớp.", function (value) {
                    return value === this.parent.password;
                }),

        });
        return {
            userLocal: {
                name: "",
                email: "",
                password: "",
                respassword: "",
                // Initialize as a boolean value
            },
            userFormSchema,
            showPassword: false,
        };

    },

    methods: {
        submitUser() {
           
            if (this.userLocal.name && this.userLocal.email && this.userLocal.password && this.userLocal.respassword) {
               

                this.$emit("submit:user", this.userLocal);
            } else {
               
                this.$toast.add({ severity: 'error', summary: 'Lỗi', detail: 'Vui lòng điền đầy đủ thông tin.', life: 3000 });
            }
        },


    }


};



</script>





<style scoped>
.reg {
    margin-top: 60px;
}

.gradient-custom-4 {
    color: #ffff;
    /* fallback for old browsers */
    background: #d81811;

    /* Chrome 10-25, Safari 5.1-6 */


    /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    background: linear-gradient(to right, rgb(196, 28, 28), rgba(143, 211, 244, 1))
}

.dk {
    text-decoration: none;
    color: rgb(255, 255, 255);
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