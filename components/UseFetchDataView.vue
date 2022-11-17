<script lang="ts" setup>
const props = defineProps<{
  path?: string
  count: number
}>()
const emit = defineEmits<{
  (e: 'click', count: number): void
  (e: 'update', value: string): void
}>()
</script>
<template>
  <div>
    Fetch result:
    <pre class="text-left"><code>{{ props.path }}</code></pre>
    <button @click="emit('click', props.count + 1)">+</button>
  </div>
</template>
