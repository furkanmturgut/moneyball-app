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
</template>

<script setup>
import { ref } from "vue";
import { useCurrencify } from "src/use/useCurrencify";
import { useCurrencifyColorClass } from "src/use/useCurrencifyColorClass";

const entries = ref([
  {
    id: "id1",
    amount: "+500",
    name: "salary"
  },
  {
    id: "id2",
    amount: "-300",
    name: "Rent"
  },
  {
    id: "id3",
    name: "Unknown",
    amount: "+15"
  },
  {
    id: "id4",
    name: "Car",
    amount: "-150"
  }
]);


</script>
