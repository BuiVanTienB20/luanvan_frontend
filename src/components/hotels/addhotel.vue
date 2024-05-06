<template>
    <div>
        <Form @submit="submitHotel" :validation-schema="hotelFormSchema" enctype="multipart/form-data">
            <!-- Tên khách sạn -->
            <div class="form-group">
                <label for="name">Tên khách sạn:</label>
                <Field name="name" type="text" class="form-control" v-model="hotelLocal.name" required />
                <ErrorMessage name="name" class="error-feedback" style="color: rgb(238, 15, 15);" />
            </div>

            <!-- Địa chỉ khách sạn -->
            <div class="form-group">
                <label for="address">Địa chỉ:</label>
                <Field name="address" type="text" class="form-control" v-model="hotelLocal.address" required />
                <ErrorMessage name="address" class="error-feedback" style="color: rgb(238, 15, 15);" />
            </div>

            <!-- Mô tả khách sạn -->
            <div class="form-group">
                <label for="description">Mô tả:</label>
                <Field name="description" type="text" class="form-control" v-model="hotelLocal.description" required />
                <ErrorMessage name="description" class="error-feedback" style="color: rgb(238, 15, 15);" />
            </div>

            <!-- Chất lượng khách sạn -->
            <div class="form-group">
                <label for="rating">Chất lượng:</label>
                <Field name="rating" type="number" class="form-control" v-model="hotelLocal.rating" required />
                <ErrorMessage name="rating" class="error-feedback" style="color: rgb(238, 15, 15);" />
            </div>

            <!-- Loại khách sạn -->
            <div class="form-group">
                <label for="type">Loại:</label>
                <Field name="type" type="text" class="form-control" v-model="hotelLocal.type" required />
                <ErrorMessage name="type" class="error-feedback" style="color: rgb(238, 15, 15);" />
            </div>

            <!-- Ảnh khách sạn -->
            <div class="form-group">
                <label for="imgURL">Ảnh:</label>
                <Field name="imgURL" type="file" class="form-control" v-model="hotelLocal.imgURL" required />
                <ErrorMessage name="imgURL" class="error-feedback" style="color: rgb(238, 15, 15);" />
            </div>

            <div class="form-group">
                <label for="discount">Giảm giá:</label>
                <Field name="discount" type="text" class="form-control" v-model="hotelLocal.discount" />
                <ErrorMessage name="discount" class="error-feedback" style="color: rgb(238, 15, 15);" />
            </div>
            <div class="form-group">
                <label for="price">Giá:</label>
                <Field name="price" type="number" class="form-control" v-model="hotelLocal.price" required />
                <ErrorMessage name="price" class="error-feedback" style="color: rgb(238, 15, 15);" />
            </div>

            <!-- Tiêu đề giảm giá -->
            <div class="form-group">
                <label for="discountTitle">Tiêu đề giảm giá:</label>
                <Field name="discountTitle" type="text" class="form-control" v-model="hotelLocal.discountTitle" />
                <ErrorMessage name="discountTitle" class="error-feedback" style="color: rgb(238, 15, 15);" />
            </div>

            <div class="form-group">
                <label for="capacityAdults">Sức chứa người lớn:</label>
                <Field name="capacity.adults" type="number" class="form-control" v-model="hotelLocal.capacity.adults"
                    required />
                <ErrorMessage name="capacity.adults" class="error-feedback" style="color: rgb(238, 15, 15);" />
            </div>

            <div class="form-group">
                <label for="capacityChildren">Sức chứa trẻ em:</label>
                <Field name="capacity.children" type="number" class="form-control"
                    v-model="hotelLocal.capacity.children" required />
                <ErrorMessage name="capacity.children" class="error-feedback" style="color: rgb(238, 15, 15);" />
            </div>



            <!-- Tỉnh/Thành phố -->
            <div class="form-group" style="display: none;">
                <label for="province_id">Tỉnh/Thành phố:</label>
                <Field name="province_id" type="text" class="form-control" v-model="hotelLocal.province_id" required />
                <ErrorMessage name="province_id" class="error-feedback" style="color: rgb(238, 15, 15);" />
            </div>

            <div class="form-group">
                <button type="submit" class="btn btn-primary">
                    Thêm Khách Sạn
                </button>
            </div>
        </Form>

        <router-link :to="{ name: 'admin-hotel' }">
            <button class="exit-button">Thoát</button>
        </router-link>
    </div>
</template>

<script>
import { ErrorMessage, Field, Form } from "vee-validate";
import { useRoute } from 'vue-router';
import * as yup from "yup";

export default {
    components: {
        Form,
        Field,
        ErrorMessage,
    },
    emits: ["submit:hotel"],
    data() {
        const hotelFormSchema = yup.object().shape({
            name: yup
                .string()
                .required("Tên khách sạn không được để trống.")
                .min(2, "Tên khách sạn phải ít nhất 2 ký tự.")
                .max(50, "Tên khách sạn có nhiều nhất 50 ký tự."),
            address: yup.string().required("Địa chỉ không được để trống."),
            description: yup.string().required("Mô tả không được để trống."),
            rating: yup
                .number()
                .typeError("Vui lòng nhập số.")
                .required("Chất lượng không được để trống.")
                .min(0, "Chất lượng không thể âm.")
                .max(5, "Chất lượng tối đa là 5."),
            type: yup.string().required("Loại khách sạn không được để trống."),
            imgURL: yup.string().required("Vui lòng chọn một ảnh."),
            discount: yup.string(), // Thêm kiểm tra cho trường giảm giá
            price: yup
                .number()
                .typeError("Vui lòng nhập số.")
                .required("Giá không được để trống.")
                .min(0, "Giá không thể âm."),
            discountTitle: yup.string(), // Kiểm tra cho trường tiêu đề giảm giá
            capacity: yup.object().shape({
                adults: yup.number().required("Vui lòng nhập số lượng người lớn."),
                children: yup.number().required("Vui lòng nhập số lượng trẻ em.")
            })
        });
        return {

            hotelLocal: {
                name: "",
                address: "",
                description: "",
                rating: "",
                province_id: "",
                type: "",
                imgURL: "",
                discount: "",
                price: "", // Thêm trường giá
                discountTitle: "", // Thêm trường tiêu đề giảm giá
                capacity: {
                    adults: 1,
                    children: 0
                }
            },
            hotelFormSchema,
        };
    },
    created() {
        const route = useRoute();
        // Trích xuất ID từ URL và gán vào province_id
        // Đảm bảo rằng bạn đang nhận được dữ liệu từ URL đúng cách
        this.hotelLocal.province_id = route.params.id || ""; // Cung cấp một giá trị mặc định nếu không có ID
    },
    methods: {
        submitHotel() {
            this.$emit("submit:hotel", this.hotelLocal);
            // Xử lý việc gửi biểu mẫu ở đây
        },



    },
};
</script>

<style scoped>
/* CSS không thay đổi */
</style>


<style scoped>
/* Improved styling */
h1 {
    font-size: 24px;
    color: #333;
}

.form-group {
    margin-bottom: 20px;
}

.form-control {
    width: 100%;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

.form-control-file {
    font-size: 16px;
}

.btn {
    padding: 10px 20px;
    font-size: 16px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;
}

.btn:hover {
    background-color: #0056b3;
}

.exit-button {
    background-color: #ff0000;
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    margin-right: 20px;
    cursor: pointer;
    float: right;
    position: relative;
    top: -70px;
}
</style>