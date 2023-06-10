import { defineStore } from "pinia";
import { getCaregoryHeadApi } from "../../apis/categoryHeadApi.js";
import { ref } from "vue";

export const useCaregoryStore = defineStore('caregory', () => {
    const caregoryHeadList = ref([])
    const getCaregoryHead = async () => {
        const res = await getCaregoryHeadApi()
        caregoryHeadList.value = res.result
    }

    return {
        caregoryHeadList,
        getCaregoryHead
    }

})
