<template>
  <div>
    <FormRegister @submit:user="createUser" />
    <p>{{ message }}</p>
    <div v-if="emailExistsModal">
      <p>Email này đã có người đăng ký!</p>
      <button @click="closeModal">Đóng</button>
    </div>
  </div>
</template>

<script>
import FormRegister from "@/components/FormRegister.vue";
import UserService from "@/services/user.service.js";

export default {
  components: {
    FormRegister,
  },

  data() {
    return {
      message: "",
      emailExistsModal: false, // Thêm thuộc tính để kiểm soát việc hiển thị modal
    };
  },
  methods: {
    async createUser(data) {
      try {
        // Kiểm tra xem email đã tồn tại trong cơ sở dữ liệu hay chưa
        const emailExists = await UserService.checkEmailExists(data.email);
        if (emailExists) {
          this.emailExistsModal = true; // Hiển thị modal nếu email đã tồn tại
        } else {
          // Nếu email không tồn tại, thêm tài khoản mới
          const confirmed = window.confirm("Bạn có muốn tạo tài khoản mới?");
          if (confirmed) {
            await UserService.create(data);
            this.message = "Thêm tài khoản mới thành công";
            this.$router.push({ name: 'login' });
          }
        }
      } catch (error) {
        console.log(error);
      }
    },
    closeModal() {
      this.emailExistsModal = false; // Đóng modal
    },
  },
};
</script>

<style scoped></style>
