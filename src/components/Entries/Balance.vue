<template>
        <div class="row q-mb-sm q-px-md q-py-sm shadow-up-3">
      <div class="col text-grey-7 text-h6">
        Balance :
      </div>
      <div class="col text-h6 text-right" :class="useCurrencifyColorClass(storeEntries.balance)">
        {{ useCurrencify(storeEntries.balance) }}
      </div>
    </div>
</template>
<script setup>
import { useStoreEntries } from "src/stores/storeEntries";
import { useCurrencify } from "src/use/useCurrencify";
import { useCurrencifyColorClass } from "src/use/useCurrencifyColorClass";

const storeEntries = useStoreEntries();
</script>