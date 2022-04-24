<template>
  <q-dialog v-model="visible" persistent>
    <q-card>
      <q-card-section>
        <div class="text-h6">
          {{ this.data.id ? "Edit Company" : "New Company" }}
        </div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <q-input v-model="data.name" label="Name" />
      </q-card-section>
      <q-card-section class="q-pt-none">
        <q-input v-model="data.address" label="Address" />
      </q-card-section>
      <q-card-section class="q-pt-none">
        <q-input v-model="data.country" label="Country" />
      </q-card-section>
      <q-card-section class="q-pt-none">
        <q-input v-model="data.contact" label="Contact Number" />
      </q-card-section>
      <q-card-section class="q-pt-none">
        <q-input v-model="data.website" label="Website" />
      </q-card-section>
      <q-card-section class="q-pt-none">
        <q-input v-model="data.email" label="Email" />
      </q-card-section>

      <q-card-actions align="right">
        <q-btn
          flat
          label="Cancel"
          color="primary"
          v-close-popup
          @click="closeModal(false)"
        />
        <q-btn
          flat
          label="Save"
          color="primary"
          v-close-popup
          @click="closeModal(true)"
        />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
import { defineComponent } from "vue";
import { ref } from "vue";
import moment from "moment";

const defaultData = {
  id: null,
  name: null,
  address: null,
  country: null,
  contact: null,
  website: null,
  email: null,
};

export default defineComponent({
  name: "CompanyModal",
  props: {
    hideModal: { type: Function },
    modalVisible: { type: Boolean, default: false },
    modalData: { type: Object, default: null },
  },
  watch: {
    modalVisible: function (newVal, oldVal) {
      this.visible = newVal;
    },
    modalData: function (newVal, oldVal) {
      this.data = newVal ? { ...newVal } : { ...defaultData };
    },
  },
  data() {
    return {
      visible: false,
      data: { ...defaultData },
    };
  },
  methods: {
    moment: function () {
      return moment();
    },
    resetData: function (flag) {
      this.data = flag
        ? { ...this.modalData }
          ? { ...this.modalData }
          : { ...defaultData }
        : { ...defaultData };
    },
    closeModal: function (flag) {
      this.hideModal({ ...this.data }, flag);
      this.resetData(false);
    },
  },
});
</script>
