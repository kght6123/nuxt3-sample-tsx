<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      counter: 0,
    }
  },
  props: {
    max: { type: Number, required: true },
  },
})
</script>

<template>
  <!-- type checking and auto-completion enabled -->
  <div>
    <span>{{ counter }}</span>
    <button @click="max >= counter ? counter++ : counter">Increment</button>
  </div>
</template>
