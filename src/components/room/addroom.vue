<template>
    <div>
        <Form @submit="submitRoom" :validation-schema="roomFormSchema" enctype="multipart/form-data">
            <!-- Tên phòng -->
            <div class="form-group">
                <label for="room_name">Tên phòng:</label>
                <Field name="room_name" type="text" class="form-control" v-model="roomLocal.room_name" required />
                <ErrorMessage name="room_name" class="error-feedback" style="color: rgb(238, 15, 15);" />
            </div>

            <!-- Số phòng -->
            <div class="form-group">
                <label for="room_number">Số phòng:</label>
                <Field name="room_number" type="text" class="form-control" v-model="roomLocal.room_number" required />
                <ErrorMessage name="room_number" class="error-feedback" style="color: rgb(238, 15, 15);" />
            </div>

            <!-- Loại phòng -->
            <div class="form-group">
                <label for="room_type">Loại phòng:</label>
                <Field name="room_type" type="text" class="form-control" v-model="roomLocal.room_type" required />
                <ErrorMessage name="room_type" class="error-feedback" style="color: rgb(238, 15, 15);" />
            </div>

            <!-- Sức chứa -->
            <div class="form-group">
                <label for="capacity">Sức chứa:</label>
                <Field name="capacity" type="number" class="form-control" v-model="roomLocal.capacity" required />
                <ErrorMessage name="capacity" class="error-feedback" style="color: rgb(238, 15, 15);" />
            </div>

            <!-- Giá mỗi đêm -->
            <div class="form-group">
                <label for="price_per_night">Giá mỗi đêm:</label>
                <Field name="price_per_night" type="number" class="form-control" v-model="roomLocal.price_per_night"
                    required />
                <ErrorMessage name="price_per_night" class="error-feedback" style="color: rgb(238, 15, 15);" />
            </div>

            <!-- Tình trạng -->
            <div class="form-group">
                <label for="availability">Tình trạng:</label>
                <Field name="availability" type="text" class="form-control" v-model="roomLocal.availability" required />
                <ErrorMessage name="availability" class="error-feedback" style="color: rgb(238, 15, 15);" />
            </div>

            <!-- Ảnh phòng -->
            <div class="form-group">
                <label for="imgURL">Ảnh:</label>
                <Field name="imgURL" type="file" class="form-control" v-model="roomLocal.imgURL" required />
                <ErrorMessage name="imgURL" class="error-feedback" style="color: rgb(238, 15, 15);" />
            </div>

            <!-- ID khách sạn -->
            <div class="form-group" style="display: none;">
                <label for="hotel_id">khách sạn:</label>
                <Field name="hotel_id" type="text" class="form-control" v-model="roomLocal.hotel_id" required />
                <ErrorMessage name="hotel_id" class="error-feedback" style="color: rgb(238, 15, 15);" />
            </div>

            <div class="form-group">
                <button type="submit" class="btn btn-primary">
                    Thêm Phòng
                </button>
            </div>
        </Form>

        <router-link :to="{ name: 'admin-room' }">
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
    emits: ["submit:room"],
    data() {
        const roomFormSchema = yup.object().shape({
            room_name: yup
                .string()
                .required("Tên phòng không được để trống.")
                .min(2, "Tên phòng phải ít nhất 2 ký tự.")
                .max(50, "Tên phòng có nhiều nhất 50 ký tự."),
            room_number: yup.string().required("Số phòng không được để trống."),
            room_type: yup.string().required("Loại phòng không được để trống."),
            capacity: yup
                .number()
                .typeError("Vui lòng nhập số.")
                .required("Sức chứa không được để trống.")
                .min(1, "Sức chứa phải lớn hơn 0."),
            price_per_night: yup
                .number()
                .typeError("Vui lòng nhập số.")
                .required("Giá mỗi đêm không được để trống.")
                .min(0, "Giá mỗi đêm không thể âm."),
            availability: yup.string().required("Tình trạng không được để trống."),
            imgURL: yup.string().required("Vui lòng chọn một ảnh."),
        });
        return {
            roomLocal: {
                room_name: "",
                room_number: "",
                room_type: "",
                capacity: "",
                price_per_night: "",
                availability: "",
                hotel_id: "",
                imgURL: "",
            },
            roomFormSchema,
        };
    },
    created() {
        const route = useRoute();
        // Trích xuất ID từ URL và gán vào hotel_id
        // Đảm bảo rằng bạn đang nhận được dữ liệu từ URL đúng cách
        this.roomLocal.hotel_id = route.params.id || ""; // Cung cấp một giá trị mặc định nếu không có ID
    },
    methods: {
        submitRoom() {
            this.$emit("submit:room", this.roomLocal);
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
