<template>
  <div>


    <Form @submit="submitProduct" :validation-schema="productFormSchema">
      <!-- Tên sản phẩm -->
      <div class="form-group">
        <label for="province_name">Tên tỉnh thành:</label>
        <Field name="province_name" type="text" class="form-control" v-model="productLocal.province_name" required />
        <ErrorMessage name="province_name" class="error-feedback" style="color: rgb(238, 15, 15);" />
      </div>

      <!-- Mô tả sản phẩm -->
      <!-- <div class="form-group">
        <label for="MoTaHH">Mô tả:</label>
        <Field name="MoTaHH" type="text" class="form-control" v-model="productLocal.MoTaHH" required />
        <ErrorMessage name="MoTaHH" class="error-feedback" style="color: rgb(238, 15, 15);" />
      </div> -->

      <!-- Giá sản phẩm -->
      <!-- <div class="form-group">
          <label for="Gia">Giá:</label>
          <Field name="Gia" type="text" class="form-control" v-model="productLocal.Gia" required />
          <ErrorMessage name="Gia" class="error-feedback"  style="color: rgb(238, 15, 15);" />
        </div> -->

      <!-- Số lượng sản phẩm -->
      <!-- <div class="form-group">
        <label for="SoLuongHangHoa">Số Lượng khách sạn:</label>
        <Field name="SoLuongHangHoa" type="number" class="form-control" v-model="productLocal.SoLuongHangHoa"
          required />
        <ErrorMessage name="SoLuongHangHoa" class="error-feedback" style="color: rgb(238, 15, 15);" />
      </div> -->

      <!-- Ghi chú sản phẩm -->
      <!-- <div class="form-group">
        <label for="GhiChu">Ghi chú:</label>
        <Field name="GhiChu" type="text" class="form-control" v-model="productLocal.GhiChu" required />
        <ErrorMessage name="GhiChu" class="error-feedback" style="color: rgb(238, 15, 15);" />
      </div> -->

      <!-- Ảnh sản phẩm -->
      <div class="form-group">
        <label for="imgURL">Ảnh:</label>
        <Field name="imgURL" type="text" class="form-control" v-model="productLocal.imgURL" required />
        <ErrorMessage name="imgURL" class="error-feedback" style="color: rgb(238, 15, 15);" />
      </div>

      <div class="form-group">
        <button type="submit" class="btn btn-primary">
          Lưu
        </button>
      </div>
    </Form>

    <router-link :to="{ name: 'admin-position' }">
      <button class="exit-button">Thoát</button>
    </router-link>
  </div>
</template>

<script>
import { ErrorMessage, Field, Form } from "vee-validate";
import * as yup from "yup";
export default {
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  emits: ["submit:product"],
  props: {
    product: { type: Object, required: true },
  },
  data() {
    const productFormSchema = yup.object().shape({
      province_name: yup
        .string()
        .required("Tên sản phẩm phải có giá trị.")
        .min(2, "Tên sản phẩm phải ít nhất 2 ký tự.")
        .max(50, "Tên sản phẩm có nhiều nhất 50 ký tự."),
      // MoTaHH: yup
      //   .string()
      //   .required("Mô tả sản phẩm phải có giá trị."),
      // Gia: yup
      //   .number()
      //   .required("Giá sản phẩm phải có giá trị.")
      //   .min(0, "Giá sản phẩm không thể âm."),
      // SoLuongHangHoa: yup
      //   .number()
      //   .required("Số lượng sản phẩm phải có giá trị.")
      //   .min(1, "Số lượng sản phẩm phải ít nhất là 1."),
      // GhiChu: yup.string(),
      imgURL: yup.string().required("Vui lòng chọn một ảnh."),
    });
    return {
      productLocal: this.product,
      productFormSchema,

    };
  },
  methods: {
    submitProduct() {
      this.$emit("submit:product", this.productLocal);
      // Handle form submission here
    },
  },
};
</script>

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