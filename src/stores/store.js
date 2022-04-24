import { defineStore, acceptHMRUpdate } from 'pinia'

export const useAppStore = defineStore({
  id: 'company',
  state: () => {
    return {
      companyList: localStorage.getItem('companyList') ? JSON.parse(localStorage.getItem('companyList')) : [],
    }
  },

  actions: {
    /**
     * @param {any} company
     */
    add(company) {
      let temp = [...this.companyList];
      if (company.id) {
        temp.map((item) => {
          if (item.id === company.id) {
            item = company;
          }
          return item;
        })
      } else {
        temp.push(company);
      }
      this.$patch({
        companyList: temp,
      })
      this.saveLocal();
    },
    /**
     * @param {any[]} removeCompanyList
     */
    remove(removeCompanyList) {
      let temp = [...this.companyList];
      let data = temp.filter((item) => !removeCompanyList.includes(item.id));
      this.$patch({
        companyList: data,
      })
      this.saveLocal();
    },
    saveLocal() {
      localStorage.setItem('companyList', JSON.stringify(this.companyList))
    },
  },
})
