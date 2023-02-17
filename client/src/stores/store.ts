import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useDefaultStore = defineStore("defaultStore", {
  state: () => ({
    loading: false as Boolean,
    error: "" as String,
    companies: [] as any[],
    leads: [] as any[],
    contacts: [] as any[],
  }),
  actions: {
    setLoading(loading: any) {
      this.loading = loading;
    },
    setCompanies(data: typeof this.companies) {
      this.companies = data;
    },
    setLeads(data: typeof this.leads) {
      this.leads = data;
    },
    setContacts(data: typeof this.contacts) {
      this.contacts = data;
    },
    setError(error: String) {
      this.error = error;
    },
  },
});
