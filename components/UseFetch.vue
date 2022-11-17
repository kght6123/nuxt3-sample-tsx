<script setup>
const count = ref(1)
const { data } = await useFetch(() => `/api/hello/hello/${count.value}`, { params: { token: 123 } })
</script>

<template>
  <UseFetchDataView :path="data.path" :count="count" @click="count = $event" />
</template>
