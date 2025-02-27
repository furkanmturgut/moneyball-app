<template>
  <q-page>
    <div class="q-pa-md">
      <q-list bordered separator v-for="entry in entries" :key="entry.id">
        <q-item>
          <q-item-section class="text-weight-bold" :class="useCurrencifyColorClass(entry.amount)">
            <q-item-label>{{ entry.name }}</q-item-label>
          </q-item-section>

          <q-item-section class="text-weight-bold" :class="useCurrencifyColorClass(entry.amount)" side>
            {{ useCurrencify(entry.amount) }}
          </q-item-section>
        </q-item>
      </q-list>
    </div>
  </q-page>

  <q-footer class="bg-transparent">
    <div class="row q-mb-sm q-px-md q-py-sm shadow-up-3">
      <div class="col text-grey-7 text-h6">
        Balance :
      </div>
      <div class="col text-h6 text-right" :class="useCurrencifyColorClass(balance)">
        {{ useCurrencify(balance) }}
      </div>
    </div>

    <q-form @submit.prevent="addEntry" class="row q-px-sm q-pb-sm q-col-gutter-sm bg-primary">
      <div class="col">
        <q-input ref="nameRef" v-model="addEntriyForm.name" outlined bg-color="white" dense placeholder="Name" />
      </div>
      <div class="col">
        <q-input v-model.number="addEntriyForm.amount" input-class="text-right" type="number" step="0.01" outlined
          bg-color="white" dense placeholder="Amount" />
      </div>
      <div class="col col-auto">
        <q-btn color="primary" round icon="add" type="submit" />
      </div>
    </q-form>
  </q-footer>
</template>

<script setup>
import { computed, reactive, ref } from "vue";
import { useCurrencify } from "src/use/useCurrencify";
import { useCurrencifyColorClass } from "src/use/useCurrencifyColorClass";
import { uid } from "quasar";

const entries = ref([
  {
    id: "id1",
    amount: +500,
    name: "salary"
  },
  {
    id: "id2",
    amount: -300,
    name: "Rent"
  },
  {
    id: "id3",
    name: "Unknown",
    amount: +15
  },
  {
    id: "id4",
    name: "Car",
    amount: -150
  }
]);


const balance = computed(() => {
  let balance = 0;
  entries.value.forEach(entry => {
    balance = balance + entry.amount
  });

  return balance;
});

const addEntriyForm = reactive({
  name: "",
  amount: null
});

const nameRef = ref(null);

const addEntry = () => {
  let newEntry = {
    id: uid(),
    name: addEntriyForm.name,
    amount: addEntriyForm.amount
  };

  entries.value.push(newEntry);
  clearFunc();
  nameRef.value.focus();
}

const clearFunc = () => {
  addEntriyForm.amount = null,
    addEntriyForm.name = ""
}
</script>
