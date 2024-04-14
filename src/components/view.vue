<template>
    <div class="cmt">
        <div class="view">
            <div class="dg">
                <Knob v-model="knobValue" :size="200" />
                <h3>Ấn tượng</h3>
            </div>
            <div class="dg">
                <div class="me">
                    <p>Tuyệt vời</p>
                    <MeterGroup :value="meterGroupValue" class="custom-meter" />

                </div>
                <div class="me">
                    <p>Rất tốt</p>
                    <MeterGroup :value="meterGroupValue0" class="custom-meter" />

                </div>
                <div class="me">
                    <p>Hài lòng</p>
                    <MeterGroup :value="meterGroupValue1" class="custom-meter" />

                </div>
                <div class="me">
                    <p>Trung bình</p>
                    <MeterGroup :value="meterGroupValue2" class="custom-meter" />


                </div>
                <div class="me">
                    <p>Kém</p>
                    <MeterGroup :value="meterGroupValue3" class="custom-meter" />

                </div>









            </div>
            <div class="dg">
                <div class="ra">
                    <p>Sạch sẽ</p>
                    <Rating v-model="rating" readonly :cancel="false" class="custom-rating" />

                </div>

                <div class="ra">
                    <p>Thoải mái</p>
                    <Rating v-model="rating0" readonly :cancel="false" class="custom-rating" />

                </div>

                <div class="ra">
                    <p>Đồ ăn</p>
                    <Rating v-model="rating1" readonly :cancel="false" class="custom-rating" />

                </div>

                <div class="ra">
                    <p>Vị trí</p>
                    <Rating v-model="rating2" readonly :cancel="false" class="custom-rating" />

                </div>

                <div class="ra">
                    <p>Dịch vụ</p>
                    <Rating v-model="rating3" readonly :cancel="false" class="custom-rating" />

                </div>




            </div>
        </div>


        <div class="container">
            <div class="row">
                <div class="com col-sm-12">
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
                                        We supply a series of design principles, practical patterns and high quality
                                        design
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
                                        We supply a series of design principles, practical patterns and high quality
                                        design
                                        resources (Sketch and Axure).
                                    </p>
                                </template>
                            </a-comment>
                        </a-comment>
                    </a-comment>
                </div>
            </div>
        </div>




    </div>

</template>

<script>
import Knob from 'primevue/knob';
import MeterGroup from 'primevue/metergroup';
import Rating from 'primevue/rating';

export default {
    components: {
        Knob,
        MeterGroup,
        Rating
    },
    data() {
        return {
            knobValue: 80,
            meterGroupValue: [{ value: 88 }],
            meterGroupValue0: [{ value: 40 }],
            meterGroupValue1: [{ value: 25 }],
            meterGroupValue2: [{ value: 15 }],
            meterGroupValue3: [{ value: 0 }],
            rating: 4,
            rating0: 5,
            rating1: 4,
            rating2: 5,
            rating3: 4,
        }
    }
}
</script>

<style scoped>
.view {
    margin-top: 100px;
    display: flex;
    justify-content: space-between;
}

.custom-meter {
    width: 300px;
    padding-top: 10px;
}

.custom-rating {
    margin-bottom: 60px;


}

.me {
    display: flex;
}

.me>p {
    padding-right: 40px;
    font-weight: 500;
    width: 120px;
}

.ra {
    display: flex;

}

.ra>p {
    padding-right: 40px;
    font-weight: 500;
    width: 120px;
}

.com {
    margin-left: 117px;
}
</style>
