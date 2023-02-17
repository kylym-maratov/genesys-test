<script setup lang="ts">
import { useDefaultStore } from "@/stores/store";
import { storeToRefs } from "pinia";
const defaultStore = useDefaultStore();
const { companies, contacts, leads } = storeToRefs(defaultStore);
</script>

<template>
  <div class="list">
    <div v-if="companies.length">
      <p class="title">Companies</p>
      <div v-for="(company, key) in companies">
        <div :key="key">
          <span>id: {{ company.id }} | name: {{ company.name }}</span>
        </div>
      </div>
    </div>
    <div v-if="leads.length">
      <p class="title">Leads</p>
      <div v-for="(lead, key) in leads">
        <div :key="key">
          <span>id: {{ lead.id }} | name: {{ lead.name }}</span>
        </div>
      </div>
    </div>
    <div v-if="contacts.length">
      <p class="title">Contacts</p>
      <div v-for="(contact, key) of contacts">
        <div :key="key">
          <span>id: {{ contact.id }} | name: {{ contact.name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.list::-webkit-scrollbar {
  display: none;
}

.title {
  font-weight: bold;
}

.list {
  text-align: center;
  margin-top: 20px;
  padding: 10px;
  overflow-y: scroll;
  height: 400px;
  display: flex;
  justify-content: space-around;
}
</style>
