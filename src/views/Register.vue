<template>
  <div>
    <!-- Your FormRegister component -->
    <FormRegister @submit:user="createUser" :showToast="showToast" />
    <p>{{ message }}</p>
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
      isSuccess: false,
      isError: false,
    };
  },

  methods: {
    async createUser(data) {
      try {

        await UserService.create(data);
        // this.message = "Thêm tài khoản mới thành công";
        // this.isSuccess = true;
        // this.isError = false;

        // Redirect after 4 seconds
        setTimeout(() => {
          this.$router.push({ name: 'login' });
        }, 4000); // 4 seconds

        this.showToast({
          severity: 'success',
          summary: 'Thành công',
          detail: 'Bạn đã tạo thành công tài khoản',
          life: 3000
        });


      } catch (error) {
        console.error("Lỗi khi thêm tài khoản mới:", error);
        // this.message = "Đã xảy ra lỗi khi thêm tài khoản mới";
        // this.isSuccess = false;
        // this.isError = true;

        // Show toast message for error
        this.showToast({
          severity: 'error',
          summary: 'Email đã được sử dụng',
          detail: 'Vui lòng đăng ký bằng email khác',
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

<style scoped></style>
