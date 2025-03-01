<template>
  <q-page>
    <div class="q-pa-md">
      <q-list bordered separator>
        <q-slide-item v-for="entry in storeEntries.entriesList" :key="entry.id" @left="onLeft"
          @right="onRight($event, entry.id)" right-color="negative">
          <template v-slot:right>
            <q-icon name="delete" />
          </template>

          <q-item>
            <q-item-section class="text-weight-bold" :class="useCurrencifyColorClass(entry.amount)">
              <q-item-label>{{ entry.name }}</q-item-label>
            </q-item-section>

            <q-item-section class="text-weight-bold" :class="useCurrencifyColorClass(entry.amount)" side>
              {{ useCurrencify(entry.amount) }}
            </q-item-section>
          </q-item>
        </q-slide-item>
      </q-list>
    </div>
  </q-page>

  <q-footer class="bg-transparent">
    <Balance />
    <AddEntry />

  </q-footer>
</template>

<script setup>
import { useCurrencify } from "src/use/useCurrencify";
import { useCurrencifyColorClass } from "src/use/useCurrencifyColorClass";
import { useQuasar } from "quasar";
import { useStoreEntries } from "src/stores/storeEntries";
import Balance from "src/components/Entries/Balance.vue";
import AddEntry from "src/components/Entries/AddEntry.vue";

const $q = useQuasar()
const storeEntries = useStoreEntries();

const onRight = ({ reset }, entryId) => {
  $q.dialog({
    title: 'Delete',
    message: 'Delete entry?',
    cancel: true,
    persistent: true,
    ok: {
      label: "Delete",
      color: "negative",
      noCaps: true
    },
    cancel: {
      color: "primary",
      noCaps: true
    }
  }).onOk(() => {
    deleteEntry(entryId)
  }).onCancel(() => {
    reset();
  })
}

const deleteEntry = (id) => {
  const index = storeEntries.entriesList.value.findIndex(entry => entry.id === id);
  entries.value.splice(index, 1);
  $q.notify("Delete entry!");
}
</script>
