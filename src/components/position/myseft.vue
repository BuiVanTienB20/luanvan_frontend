<template>
    <div class="auth">
        <Button :label="`${value1} Người lớn, ${value2} Trẻ em, ${value3} Phòng`" @click="showDialog"
            severity="secondary" />

        <Dialog v-model:visible="visible" modal header="" :style="{ width: '25rem', borderRadius: '10px' }"
            :showHeader="false">

            <div class="flex align-items-center gap-3  mt-3 mb-3 ">
                <b class="ngl"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round"
                        class="icon mr-2 icon-tabler icons-tabler-outline icon-tabler-user-share">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                        <path d="M6 21v-2a4 4 0 0 1 4 -4h3" />
                        <path d="M16 22l5 -5" />
                        <path d="M21 21.5v-4.5h-4.5" />
                    </svg> Người lớn:</b>
                <InputNumber v-model="value1" :inputId="'horizontal-buttons1'" showButtons :buttonLayout="'horizontal'"
                    :step="1" :inputStyle="{ width: '48px' }" :min="1" />
            </div>

            <div class="flex align-items-center gap-3  mb-3 ">
                <b><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="icon mr-2 icon-tabler icons-tabler-outline icon-tabler-horse-toy">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M3.5 17.5c5.667 4.667 11.333 4.667 17 0" />
                        <path
                            d="M19 18.5l-2 -8.5l1 -2l2 1l1.5 -1.5l-2.5 -4.5c-5.052 .218 -5.99 3.133 -7 6h-6a3 3 0 0 0 -3 3" />
                        <path d="M5 18.5l2 -9.5" />
                        <path d="M8 20l2 -5h4l2 5" />
                    </svg>Trẻ em:</b>
                <InputNumber v-model="value2" :inputId="'horizontal-buttons2'" showButtons :buttonLayout="'horizontal'"
                    :step="1" :inputStyle="{ width: '48px' }" :min="0" />
            </div>

            <div class="flex align-items-center gap-3  mb-3 ">
                <b><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="icon mr-2 icon-tabler icons-tabler-outline icon-tabler-door">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M14 12v.01" />
                        <path d="M3 21h18" />
                        <path d="M6 21v-16a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v16" />
                    </svg>Phòng:</b>
                <InputNumber v-model="value3" :inputId="'horizontal-buttons3'" showButtons :buttonLayout="'horizontal'"
                    :step="1" :inputStyle="{ width: '48px' }" :min="1" :max="value1" />
            </div>

            <div class="flex justify-content-end gap-2" :style="{ marginLeft: '250px' }">
                <Button type="button" label="Xong" severity="secondary" @click="closeDialog"></Button>
            </div>
        </Dialog>
    </div>
</template>

<script>
import Button from 'primevue/button';
import Dialog from 'primevue/dialog';
import InputNumber from 'primevue/inputnumber';
import Toast from 'primevue/toast';
export default {
    components: {
        Dialog,
        Button,
        InputNumber,
        Toast
    },
    data() {
        return {
            visible: false,
            value1: 1,
            value2: 0,
            value3: 1,
        };
    },
    methods: {
        showDialog() {
            if (this.value1 === 0 || this.value3 === 0 || this.value3 > this.value1) {
               

            } else {
                this.visible = true;
            }
        },
        closeDialog() {
            this.visible = false;
        }
    },
};
</script>

<style scoped>
.auth {
    margin: 160px;
    border-radius: 10px;
}

b {
    margin-right: 100px;
}

.ngl {
    margin-right: 75px;
}
</style>
