<script setup lang="ts">
import axios from "axios";
import { useDefaultStore } from "@/stores/store";
import { mapStores, storeToRefs } from "pinia";
import SubmitButton from "./SubmitButton.vue";
import ListItem from "./ListItem.vue";
import { request } from "@/api/api";

const defaultStore = useDefaultStore();
const { loading, error } = storeToRefs(defaultStore);
</script>

<template>
  <form id="form">
    <select class="select" v-model="$data.current">
      <option v-for="item in items">
        {{ item }}
      </option>
    </select>
    <div class="separate">
      <SubmitButton
        :disabled="$data.disabled"
        :loading="loading.valueOf()"
        :click-event="createItem"
      />
    </div>
  </form>
  <div v-if="error" class="error">{{ error }}</div>
  <ListItem />
</template>

<script lang="ts">
export default {
  data() {
    return {
      items: ["Не выбрано", "Сделка", "Компания", "Контакт"],
      current: "",
      disabled: true,
    };
  },
  mounted() {
    this.$data.current = this.$data.items[0];
    this.getCompanies();
    this.getLeads();
    this.getContacts();
  },
  watch: {
    current() {
      this.current === this.$data.items[0]
        ? (this.disabled = true)
        : (this.disabled = false);
    },
  },
  computed: {
    ...mapStores(useDefaultStore),
  },
  methods: {
    async createItem() {
      switch (this.current) {
        case this.items[1]:
          this.createLead();
          break;
        case this.items[2]:
          this.createCompany();
          break;
        case this.items[3]:
          this.createContact();
          break;
        default:
          return;
      }
    },

    async createCompany() {
      const { data } = await request("/api/companies", "POST", {
        name: this.current,
      });
      this.getCompanies();
      alert(`${data.message} | id: ${data.id}`);
    },
    async createLead() {
      const { data } = await request("/api/leads", "POST", {
        name: this.current,
      });
      this.getLeads();
      alert(`${data.message} | id: ${data.id}`);
    },
    async createContact() {
      const { data } = await request("/api/contacts", "POST", {
        name: this.current,
      });
      this.getContacts();
      alert(`${data.message} | id: ${data.id}`);
    },

    async getCompanies() {
      const { data } = await request("/api/companies");
      this.defaultStoreStore.setCompanies(data);
    },
    async getLeads() {
      const { data } = await request("/api/leads");
      this.defaultStoreStore.setLeads(data);
    },
    async getContacts() {
      const { data } = await request("/api/contacts");
      this.defaultStoreStore.setContacts(data);
    },
  },
};
</script>

<style>
.select {
  width: 99%;
  padding: 10px;
  border: 1px solid black;
  outline: none;
}

.separate {
  margin-top: 20px;
  display: flex;
  justify-content: center;
}

.error {
  text-align: center;
  color: red;
  margin-top: 20px;
}
</style>
