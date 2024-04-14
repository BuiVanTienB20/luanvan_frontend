<template>
  <div class="auth">
    <Toast />
    <Button label="Success" severity="success" @click="showSuccess" />
    <Button label="Info" severity="info" @click="showInfo" />
    <Button label="Warn" severity="warning" @click="showWarn" />
    <Button label="Error" severity="danger" @click="showError" />
    <Button label="Secondary" severity="secondary" @click="showSecondary" />
    <Button label="Contrast" severity="contrast" @click="showContrast" />

    <Button label="Show" @click="visible = true" />
    <Dialog v-model:visible="visible" modal header="Edit Profile" :style="{ width: '25rem' }">
      <span class="p-text-secondary block mb-5">Update your information.</span>
      <div class="flex align-items-center gap-3 mb-3">
        <label for="username" class="font-semibold w-6rem">Username</label>
        <InputText id="username" class="flex-auto" autocomplete="off" />
      </div>
      <div class="flex align-items-center gap-3 mb-5">
        <label for="email" class="font-semibold w-6rem">Email</label>
        <InputText id="email" class="flex-auto" autocomplete="off" />
      </div>
      <div class="flex justify-content-end gap-2">
        <Button type="button" label="Cancel" severity="secondary" @click="visible = false"></Button>
        <Button type="button" label="Save" @click="visible = false"></Button>
      </div>
    </Dialog>


    <Toast />
    <SplitButton label="3 người lớn, 0 trẻ em, 3 phòng" @click="save" :model="items" severity="secondary" />




    <Dropdown v-model="selectedCountry" :options="countries" filter optionLabel="name" placeholder="Select a Country"
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
          <img :alt="slotProps.option.label" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png"
            :class="`mr-2 flag flag-${slotProps.option.code.toLowerCase()}`" style="width: 18px" />
          <div>{{ slotProps.option.name }}</div>
        </div>
      </template>
    </Dropdown>



    <div class="card flex flex-wrap gap-3 p-fluid">

      <div class="flex-auto">

        <Calendar v-model="icondisplay" showIcon iconDisplay="input" inputId="icondisplay" />
      </div>

    </div>

    <div class="card flex justify-content-center">


      <Dropdown v-model="selectedNight" :options="nights" optionLabel="label" placeholder="Select Number of Nights"
        class="w-full md:w-14rem">
        <template slot="value" slot-scope="slotProps">
          {{ slotProps.value ? slotProps.value.label : slotProps.placeholder }}
        </template>
      </Dropdown>
    </div>
    <Dropdown v-model="selectedNight" :options="nights" optionLabel="label" placeholder="Select Number of Nights"
      class="w-full md:w-14rem">
      <template slot="value" slot-scope="slotProps">
        {{ slotProps.value ? slotProps.value.label : slotProps.placeholder }}
      </template>
    </Dropdown>

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

    <Knob v-model="value" :step="5" />



  </div>

</template>

<script>
import Button from 'primevue/button';
import Dialog from 'primevue/dialog';
import Dropdown from 'primevue/dropdown';

import Knob from 'primevue/knob';

import Calendar from 'primevue/calendar';

import SplitButton from 'primevue/splitbutton';

import InputNumber from 'primevue/inputnumber';
import Toast from 'primevue/toast';
import { useToast } from 'primevue/usetoast';

export default {
  components: {
    Button,
    Calendar,
    Toast,
    SplitButton,
    Dialog,
    Knob,

    Dropdown,
    InputNumber
  },
  data() {
    return {
      value: 80,
      visible: false,
      value1: 20,
      value2: 25,
      value3: 10.5,
      selectedNight: null,

      nights: [
        { label: '1 đêm', value: 1 },
        { label: '2 đêm', value: 2 },
        { label: '3 đêm', value: 3 },
        { label: '4 đêm', value: 4 },
        { label: '5 đêm', value: 5 },
        { label: '6 đêm', value: 6 },
        { label: '7 đêm', value: 7 },
        { label: '8 đêm', value: 8 },
        { label: '9 đêm', value: 9 },
        { label: '10 đêm', value: 10 },
        { label: '11 đêm', value: 11 },
        { label: '12 đêm', value: 12 },
        { label: '13 đêm', value: 13 },
        { label: '14 đêm', value: 14 },
        { label: '15 đêm', value: 15 },
        { label: '16 đêm', value: 16 },
        { label: '17 đêm', value: 17 },
        { label: '18 đêm', value: 18 },
        { label: '19 đêm', value: 19 },
        { label: '20 đêm', value: 20 }
      ],
      buttondisplay: null,
      icondisplay: null,
      templatedisplay: null,
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
        { name: 'United States', code: 'US' }
      ],
      items: [
        {
          label: '3 người lớn',

        },
        {
          label: '0 trẻ em',

        },
        {
          label: '3 phòng',

        },

      ]

    };
  },
  methods: {
    save() {

    }
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
  },

}
</script>

<style scoped>
.auth {
  margin: 160px;
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

.card {
  width: 400px;

}
</style>
