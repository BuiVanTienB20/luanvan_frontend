<template>
  <div class="auth">


   

    <div class="card flex justify-content-center">
      <Toast position="top-center" group="headless" @close="visible = false">
        <template #container="{ message, closeCallback }">
          <section class="flex p-3 gap-3 w-full bg-black-alpha-90" style="border-radius: 10px">
            <i class="pi pi-cloud-upload text-primary-500 text-2xl"></i>
            <div class="flex flex-column gap-3 w-full">
              <p class="m-0 font-semibold text-base text-white">{{ message.summary }}</p>
              <p class="m-0 text-base text-700">{{ message.detail }}</p>
              <div class="flex flex-column gap-2">
                <ProgressBar :value="progress" :showValue="false" :style="{ height: '4px' }"></ProgressBar>
                <label class="text-right text-xs text-white">{{ progress }}% uploaded...</label>
              </div>
              <div class="flex gap-3 mb-3">
                <Button label="Another Upload?" text class="py-1 px-2" @click="closeCallback"></Button>
                <Button label="Cancel" text class="text-white py-1 px-2" @click="closeCallback"></Button>
              </div>
            </div>
          </section>
        </template>
      </Toast>
      <Button @click="show" label="View" />
    </div>
    <Toast />
    <Button label="Success" severity="success" mode="indeterminate" @click="showSuccess" />
    <div class="card">
      <ProgressBar mode="indeterminate" style="height: 6px"></ProgressBar>
    </div>
    <Button label="Info" severity="info" @click="showInfo" />
    <Button label="Warn" severity="warning" @click="showWarn" />
    <Button label="Error" severity="danger" @click="showError" />
    <Button label="Secondary" severity="secondary" @click="showSecondary" />
    <Button label="Contrast" severity="contrast" @click="showContrast" />


    <Button label="Submit" />
    <a-button type="primary" @click="openNotification('top')">
      <template #icon>
        <BorderTopOutlined />
      </template>
      top
    </a-button>
  </div>
</template>
<script setup>

import Button from 'primevue/button';


import Toast from 'primevue/toast';



import ProgressBar from 'primevue/progressbar';

import { useToast } from "primevue/usetoast";
import { ref, onUnmounted } from 'vue';

import { notification } from 'ant-design-vue';
const openNotification = placement => {
  notification.open({
    message: `Success Tips ${placement}`,
    description:
      'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    placement,
  });
};
const toast = useToast();
const showSuccess = () => {
  toast.add({ severity: 'success', summary: 'Success Message', detail: 'Message Content', life: 3000 });
};

const showInfo = () => {
  toast.add({ severity: 'info', summary: 'Info Message', detail: 'Message Content', life: 3000 });
};

const showWarn = () => {
  toast.add({ severity: 'warn', summary: 'Warn Message', detail: 'Message Content', life: 3000 });
};

const showError = () => {
  toast.add({ severity: 'error', summary: 'Error Message', detail: 'Message Content', life: 3000 });
};

const showSecondary = () => {
  toast.add({ severity: 'secondary', summary: 'Secondary Message', detail: 'Message Content', life: 3000 });
};

const showContrast = () => {
  toast.add({ severity: 'contrast', summary: 'Contrast Message', detail: 'Message Content', life: 3000 });
};

const visible = ref(false);
const progress = ref(0);
const interval = ref();

onUnmounted(() => {
  if (interval.value) {
    clearInterval(interval.value);
  }
})

const show = () => {
  if (!visible.value) {
    toast.add({ severity: 'custom', summary: 'Uploading your files.', group: 'headless' });
    visible.value = true;
    progress.value = 0;

    if (interval.value) {
      clearInterval(interval.value);
    }

    interval.value = setInterval(() => {
      if (progress.value <= 100) {
        progress.value = progress.value + 20;
      }

      if (progress.value >= 100) {
        progress.value = 100;
        clearInterval(interval.value);
      }
    }, 1000);
  }
};


</script>

<style scoped>
.auth {
  margin: 130px;
}

.card {
  background: var(--surface-card);
  padding: 2rem;
  border-radius: 10px;
  margin-bottom: 1rem;
}

p {
  line-height: 1.75;
}
</style>