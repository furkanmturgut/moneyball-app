import { defineStore } from "pinia";
import { ref, computed } from "vue";
import { uid, useQuasar } from "quasar";

export const useStoreEntries = defineStore("entries", () => {
  //state
  const entriesList = ref([
    {
      id: "id1",
      amount: +500,
      name: "salary",
    },
    {
      id: "id2",
      amount: -300,
      name: "Rent",
    },
    {
      id: "id3",
      name: "Unknown",
      amount: +15,
    },
    {
      id: "id4",
      name: "Car",
      amount: -150,
    },
  ]);

  //action

  const addEntry = (entryVal) => {
    console.log("Val : ",entryVal);
    
    let newEntry = {
      id: uid(),
      name: entryVal.name,
      amount: entryVal.amount,
    };

    entriesList.value.push(newEntry);
    //   clearFunc();
    //   nameRef.value.focus();
  };

  //getters
  const balance = computed(() => {
    let balance = 0;
    entriesList.value.forEach((entry) => {
      balance = balance + entry.amount;
    });

    return balance;
  });

  //return
  return { entriesList, balance,addEntry };
});
