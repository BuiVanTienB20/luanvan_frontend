<template>
    <div class="psuccess">
        <a-result status="success" title="Bạn đã đặt phòng và thanh toán thành công!"
            sub-title="Vui lòng kiểm tra mail để biết bạn đã đặt phòng thành công">
            <template #extra>
                <a-button key="console" type="primary" @click="goTohotel()">Đặt mới</a-button>
                <a-button key="buy" @click="goTohome()">Trang chủ</a-button>
            </template>
        </a-result>

    </div>

</template>

<script>
export default {

    methods: {
        goTohotel() {
            this.$router.push({ name: 'hotel' });

        },
        goTohome() {
            this.$router.push({ name: 'trangchu' });
        }
    }

}
</script>

<style scoped>
.psuccess {
    margin-top: 160px;
    margin-bottom: 160px;
}
</style>