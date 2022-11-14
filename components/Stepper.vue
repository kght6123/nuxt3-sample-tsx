<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    max: { type: Number, required: true },
  },
  data() {
    return {
      counter: 0,
    }
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
