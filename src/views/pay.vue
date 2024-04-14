<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-12">
                <div class="payment-form">
                    <h2>Thanh Toán Bằng Thẻ</h2>
                    <form @submit.prevent="submitPayment">
                        <div class="form-group">
                            <label for="card-name">Tên trên thẻ:</label>
                            <input type="text" id="card-name" v-model="cardName" required>
                        </div>
                        <div class="form-group">
                            <label for="card-number">Số thẻ:</label>
                            <input type="text" id="card-number" v-model="cardNumber" required>
                        </div>
                        <div class="form-group">
                            <label for="expiry-date">Ngày hết hạn (MM/YY):</label>
                            <input type="text" id="expiry-date" v-model="expiryDate" placeholder="MM/YY" required>
                        </div>
                        <div class="form-group">
                            <label for="cvv">Mã bảo mật (CVV):</label>
                            <input type="text" id="cvv" v-model="cvv" required
                                style="    width: 80%;margin-right: 20px">
                            <img src="https://ik.imagekit.io/tvlk/image/imageResource/2023/04/27/1682590689907-1e638731e8bc451e52ea7f7e4c6d4d45.svg"
                                alt="" style="    width: 60px;
    height: 36px;">
                        </div>
                        <div class="form-group">
                            <label for="customer-name">Họ và Tên:</label>

                            <input type="text" id="customer-name" v-model="customerName" required>
                        </div>
                        <div class="form-group">
                            <label for="email">Địa chỉ email:</label>
                            <input type="email" id="email" v-model="email" required>
                        </div>
                        <div class="form-group">
                            <label for="phone">Số điện thoại:</label>
                            <input type="tel" id="phone" v-model="phone" required>
                        </div>
                        <div class="form-group">
                            <label for="address">Địa chỉ thanh toán:</label>
                            <textarea id="address" v-model="address" required></textarea>
                        </div>
                        <div class="form-group">
                            <label>Tổng số tiền:</label>
                            <span>{{ totalPrice }}</span>
                        </div>
                        <div class="form-group">
                            <input type="checkbox" id="terms" v-model="agreeTerms" required>
                            <label for="terms">Tôi đồng ý với các điều khoản và điều kiện của trang web.</label>
                        </div>
                        <button type="submit">Thanh Toán</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            cardName: '',
            cardNumber: '',
            expiryDate: '',
            cvv: '',
            customerName: '',
            email: '',
            phone: '',
            address: '',
            agreeTerms: false,
            totalPrice: 100, // Total price example
        };
    },
    methods: {
        submitPayment() {
            // Handle payment submission
            // You can send this data to your backend for processing
            console.log('Payment submitted');
        }
    }
}
</script>

<style scoped>
/* Add your custom styles here */
.payment-form {
    padding: 40px;
    max-width: 500px;
    margin-top: 160px;
    margin-bottom: 160px;
    margin-left: 340px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);


    border-radius: 10px;
}

.payment-form>h2 {
    text-align: center;
}

.form-group {
    margin-bottom: 20px;
}

label {
    display: block;
    margin-bottom: 5px;
}

input[type="text"],
input[type="email"],
input[type="tel"],
textarea,
button {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-sizing: border-box;
    font-size: 16px;
    margin-top: 5px;
}

button {
    background-color: #007bff;
    color: #fff;
    cursor: pointer;
}

button:hover {
    background-color: #0056b3;
}

span {
    display: inline-block;
    padding: 5px 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
}
</style>