<template>
    <div class="psuccess">
        <a-result status="success" title="Bạn đã đặt phòng và thanh toán thành công!"
            sub-title="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait.">
            <template #extra>
                <a-button key="console" type="primary">Đặt mới</a-button>
                <a-button key="buy">Trang chủ</a-button>
            </template>
        </a-result>

    </div>

</template>

<script>
export default {

}
</script>

<style scoped>
.psuccess {
    margin-top: 160px;
    margin-bottom: 160px;
}
</style>