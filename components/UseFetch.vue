<script setup>
const count = ref(1)
const { data } = await useFetch(() => `/api/hello/hello/${count.value}`, { params: { token: 123 } })
</script>

<template>
  <div>
    Fetch result:
    <pre class="text-left"><code>{{ data }}</code></pre>
    <button @click="count++">+</button>
  </div>
</template>
