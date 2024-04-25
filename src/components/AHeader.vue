<template>
    <div class="headera">
        <!-- Navbar -->
        <nav class="navbar navbar-expand-lg navbar-light ">
            <!-- Container wrapper -->
            <div class="container-fluid">


                <!-- Collapsible wrapper -->
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <!-- Navbar brand -->

                    <!-- Left links -->

                    <!-- Left links -->
                </div>
                <!-- Collapsible wrapper -->

                <!-- Right elements -->
                <div class="d-flex align-items-center">
                    <button class="pro btn btn-default mr-4">
                        Bùi Văn Tiền

                    </button>

                    <div class="dropdown">
                        <a class=" d-flex align-items-center hidden-arrow" href="#" id="navbarDropdownMenuAvatar"
                            role="button" data-mdb-toggle="dropdown" aria-expanded="false">
                            <img src="../assets/img/chitonngoc.jpg" class="rounded-circle" height="55" width="60"
                                alt="Black and White Portrait of a Man" loading="lazy" />
                        </a>

                    </div>
                </div>
                <!-- Right elements -->
            </div>
            <!-- Container wrapper -->
        </nav>
        <!-- Navbar -->
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.headera {
    background-color: #F5F5F5;
    color: #fff;
    padding: 10px 0;
    text-align: center;
    width: 1140px;
    position: fixed;
    /* Cố định header ở trên cùng */
    top: 0;
    /* Đặt header ở trên cùng của trang */
    z-index: 1000;
    /* Đảm bảo header hiển thị trên các phần tử khác */
    margin-bottom: 20px;
}

.img-rounded {
    width: 60px;
    height: 60px;

    border-radius: 50%;
}

.pro{
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
}
</style>