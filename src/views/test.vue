<template>
    <div class="container">
        <h1>Quản lý đơn đặt hàng khách sạn</h1>
        <div class="card row d-flex">
            <div class="col-sm-6">
                <h2>Danh sách đơn hàng</h2>
                <ul class="order-list">
                    <li class="order-item">
                        <span class="order-id">Order #001</span>
                        <span class="order-status">Đang xử lý</span>
                    </li>
                    <!-- Add more order items as needed -->
                </ul>
            </div>
            <div class="col-sm-6">
                <h2>Chi tiết đơn hàng</h2>
                <ul class="order-details">
                    <li><strong>Người đặt:</strong> {{ namebook }}</li>
                    <li><strong>Email:</strong> {{ email }}</li>
                    <li><strong>Số điện thoại:</strong> {{ phone }}</li>
                    <li><strong>Ngày nhận phòng:</strong> {{ formatDate(check_in_date) }}</li>
                    <li><strong>Ngày trả phòng:</strong> {{ formatDate(check_out_date) }}</li>
                    <li><strong>Trạng thái đặt hàng:</strong> {{ booking_status }}</li>
                    <li><strong>Ngày tạo:</strong> {{ formatDate(created_at) }}</li>
                    <li><strong>Ngày cập nhật:</strong> {{ formatDate(updated_at) }}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            check_in_date: '2024-04-21T10:38:30.011+00:00',
            check_out_date: '2024-04-23T10:38:30.011+00:00',
            booking_status: 'Chưa thanh toán',
            created_at: '2024-04-20T10:38:46.105+00:00',
            updated_at: '2024-04-20T10:38:46.105+00:00',
            email: 'tienb2014620@gmail.com',
            phone: '0335675984',
            namebook: 'Bùi Văn Tiền'
        }
    },
    methods: {
        formatDate(dateString) {
            const date = new Date(dateString);
            return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
        }
    }
}
</script>

<style scoped>
.container {
    padding: 20px;
}

.card {
    margin-top: 130px;
    background-color: #f9f9f9;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    padding: 20px;
}

h1 {
    font-size: 24px;
    margin-bottom: 20px;
}

h2 {
    font-size: 20px;
    margin-bottom: 10px;
}

.order-list {
    list-style-type: none;
    padding: 0;
}

.order-item {
    padding: 10px 0;
    border-bottom: 1px solid #ddd;
    display: flex;
    justify-content: space-between;
}

.order-id {
    font-weight: bold;
}

.order-status {
    color: #888;
}

/* Hover effect for order items */
.order-item:hover {
    background-color: #f0f0f0;
    cursor: pointer;
}

.order-details {
    list-style-type: none;
    padding: 0;
}

.order-details li {
    margin-bottom: 10px;
}

.order-details strong {
    font-weight: bold;
    margin-right: 5px;
}
</style>
