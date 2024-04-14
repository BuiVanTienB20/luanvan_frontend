<template>
    <div class="test">
        <h1>hello</h1>

        <p
            v-tooltip.top="'Áp dụng Thanh Toán Tại Khách Sạn. Cho chuyến đi thêm linh hoạt: KHÔNG CẦN THANH TOÁN NGAY khi đặt phòng! Bạn có đặt ngay phòng có giá tốt nhất hôm nay và thanh toán sau bằng tiền mặt hoặc thẻ khi nhận phòng. Thời gian hiển thị là giờ địa phương.'">
            Miễn phí huỷ phòng trước 13 thg 5 2024 13:00.
        </p>
        <div>
            <a-comment>
                <template v-slot:actions>
                    <span key="comment-nested-reply-to">Reply to</span>
                </template>
                <template v-slot:author>
                    <a>Han Solo</a>
                </template>
                <template v-slot:avatar>
                    <a-avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />
                </template>
                <template v-slot:content>
                    <p>
                        We supply a series of design principles, practical patterns and high quality design
                        resources (Sketch and Axure).
                    </p>
                </template>
                <a-comment>
                    <template v-slot:actions>
                        <span>Reply to</span>
                    </template>
                    <template v-slot:author>
                        <a>Han Solo</a>
                    </template>
                    <template v-slot:avatar>
                        <a-avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />
                    </template>
                    <template v-slot:content>
                        <p>
                            We supply a series of design principles, practical patterns and high quality design
                            resources (Sketch and Axure).
                        </p>
                    </template>
                    <a-comment>
                        <template v-slot:actions>
                            <span>Reply to</span>
                        </template>
                        <template v-slot:author>
                            <a>Han Solo</a>
                        </template>
                        <template v-slot:avatar>
                            <a-avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />
                        </template>
                        <template v-slot:content>
                            <p>
                                We supply a series of design principles, practical patterns and high quality design
                                resources (Sketch and Axure).
                            </p>
                        </template>
                    </a-comment>
                    <a-comment>
                        <template v-slot:actions>
                            <span>Reply to</span>
                        </template>
                        <template v-slot:author>
                            <a>Han Solo</a>
                        </template>
                        <template v-slot:avatar>
                            <a-avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />
                        </template>
                        <template v-slot:content>
                            <p>
                                We supply a series of design principles, practical patterns and high quality design
                                resources (Sketch and Axure).
                            </p>
                        </template>
                    </a-comment>
                </a-comment>
            </a-comment>
        </div>
        <div>
            <Steps :model="items" />
        </div>

    </div>
</template>

<script>
import InputText from 'primevue/inputtext';
import Tooltip from 'primevue/tooltip';

import Steps from 'primevue/steps';

export default {
    components: {
        InputText,
        Steps

    },
    directives: {
        'tooltip': Tooltip
    },
    data() {
        return {
            items: [
                {
                    label: 'Đặt'
                },
                {
                    label: 'Thanh toán '
                },
                {
                    label: 'Gửi phiếu xác nhận'
                }
            ]
        }
    },

}
</script>

<style scoped>
.test {
    margin-top: 160px;
    margin-bottom: 160px;
}
</style>
