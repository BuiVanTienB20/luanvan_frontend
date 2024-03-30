<template>
  <div class="auth">
    <Toast />
    <Button label="Success" severity="success" @click="showSuccess" />
    <Button label="Info" severity="info" @click="showInfo" />
    <Button label="Warn" severity="warning" @click="showWarn" />
    <Button label="Error" severity="danger" @click="showError" />
    <Button label="Secondary" severity="secondary" @click="showSecondary" />
    <Button label="Contrast" severity="contrast" @click="showContrast" />

    <div class="card flex justify-content-center">
      <Dropdown v-model="selectedCountry" :options="countries" optionLabel="name" placeholder="Select a Country"
        class="w-full md:w-14rem">
        <template slot="value" slot-scope="slotProps">
          <div v-if="slotProps.value" class="flex align-items-center">
            <img :alt="slotProps.value.label" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png"
              :class="`mr-2 flag flag-${slotProps.value.code.toLowerCase()}`" style="width: 18px" />
            <div>{{ slotProps.value.name }}</div>
          </div>
          <span v-else>
            {{ slotProps.placeholder }}
          </span>
        </template>
        <template slot="option" slot-scope="slotProps">
          <div class="flex align-items-center">
            <img :alt="slotProps.option.label"
              src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png"
              :class="`mr-2 flag flag-${slotProps.option.code.toLowerCase()}`" style="width: 18px" />
            <div>{{ slotProps.option.name }}</div>
          </div>
        </template>
      </Dropdown>
    </div>

    <div class="card flex flex-wrap gap-3 p-fluid">
      <div class="flex-auto">
        <label for="stacked-buttons" class="font-bold block mb-2"> Stacked </label>
        <InputNumber v-model="value1" :inputId="'stacked-buttons'" showButtons mode="currency" currency="USD" />
      </div>

      <div class="flex-auto">
        <label for="minmax-buttons" class="font-bold block mb-2"> Min-Max Boundaries </label>
        <InputNumber v-model="value2" :inputId="'minmax-buttons'" mode="decimal" showButtons :min="0" :max="100" />
      </div>
      <div class="flex-auto">
        <label for="horizontal-buttons" class="font-bold block mb-2"> Horizontal with Step </label>
        <InputNumber v-model="value3" :inputId="'horizontal-buttons'" showButtons :buttonLayout="'horizontal'"
          :step="0.25" mode="currency" currency="EUR">
          <template v-slot:incrementbuttonicon>
            <span class="pi pi-plus" />
          </template>
          <template v-slot:decrementbuttonicon>
            <span class="pi pi-minus" />
          </template>
        </InputNumber>
      </div>
    </div>



  </div>

</template>

<script>
import Button from 'primevue/button';
import Dropdown from 'primevue/dropdown';
import Toast from 'primevue/toast';
import { useToast } from "primevue/usetoast";

import InputNumber from 'primevue/inputnumber';

export default {
  components: {
    Button,
    Toast,
    Dropdown,
    InputNumber
  },
  data() {
    return {
      value1: 20,
      value2: 25,
      value3: 10.5,
      selectedCountry: null,
      countries: [
        { name: 'Australia', code: 'AU' },
        { name: 'Brazil', code: 'BR' },
        { name: 'China', code: 'CN' },
        { name: 'Egypt', code: 'EG' },
        { name: 'France', code: 'FR' },
        { name: 'Germany', code: 'DE' },
        { name: 'India', code: 'IN' },
        { name: 'Japan', code: 'JP' },
        { name: 'Spain', code: 'ES' },
        { name: 'United States', code: 'US' },

      ]
    };
  },

  setup() {
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


    return {
      showSuccess,
      showInfo,
      showWarn,
      showError,
      showSecondary,
      showContrast,


    };
  }
}
</script>

<style scoped>
.auth {
  margin: 140px;
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
