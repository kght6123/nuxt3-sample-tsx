<script lang="ts" setup>
const props = defineProps<{
  path?: string
  count: number
}>()
const emit = defineEmits<{
  (e: 'click', count: number): void
}>()
</script>

<template>
  <UseFetchDataView :path="props.path" :count="props.count" @click="emit('click', $event + 1)" />
</template>
