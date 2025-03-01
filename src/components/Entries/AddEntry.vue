<template>
    <q-form @submit.prevent="addEntrySubmit" class="row q-px-sm q-pb-sm q-col-gutter-sm bg-primary">
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
</template>

<script setup>
import { useStoreEntries } from 'src/stores/storeEntries';
import { reactive, ref } from 'vue';


const storeEntries = useStoreEntries();
const nameRef = ref(null);

const addEntriyForm = reactive({
    name: "",
    amount: null
});

const addEntrySubmit = () => {
    storeEntries.addEntry(addEntriyForm)
    clearFunc();
    nameRef.value.focus();
}

const clearFunc = () => {
    addEntriyForm.amount = null,
    addEntriyForm.name = ""
}
</script>