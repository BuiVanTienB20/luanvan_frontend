<template>
    <div class="add">
      <h1 class="d-flex justify-content-center">Thêm Khách sạn và Phòng</h1>
      <add  @submit:room="createRoom" />
      <p>{{ message }}</p>
    </div>
  </template>
  
  <script>
  import add from "../../components/room/addroom.vue";
  
  import RoomService from "../../services/phong.service";
  
  export default {
    components: {
      add,
    },
    props: {
      room: { type: Object, require: true },
    },
    data() {
      return {
        message: "",
      };
    },
    methods: {
      
      async createRoom(data) {
        try {
          await RoomService.create(data);
          this.message = "Thêm phòng mới thành công";
          this.$router.push({ name: 'admin-room' });
        } catch (error) {
          console.log(error);
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .add {
    margin-top: 120px;
  }
  
  .add h1 {
    font-size: 24px;
    color: #333;
    text-align: center;
  }
  
  .add p {
    text-align: center;
    color: green;
    margin-top: 20px;
  }
  
  .add p.error {
    color: red;
  }
  
  .add .btn {
    display: block;
    margin: 20px auto;
    text-align: center;
  }
  </style>
  