<template>
  <div>
    <div class="row">
      <div role="group" aria-label="Basic example">
        <button class="border-white border rounded p-2" @click="add">Add</button>
        <button class="border-white border rounded p-2" @click="replace">Replace</button>
      </div>

      <div class="form-check">
        <input id="disabled" v-model="enabled" type="checkbox" class="form-check-input" />
        <label class="form-check-label" for="disabled">DnD enabled</label>
      </div>
    </div>
    <h3>Draggable {{ draggingInfo }}</h3>

    <draggable
      :list="list"
      :disabled="!enabled"
      item-key="name"
      class="space-y-2"
      ghost-class="ghost"
      :move="checkMove"
      @start="dragging = true"
      @end="dragging = false"
    >
      <template #item="{ element }">
        <div class="p-2 border-white border rounded" :class="{ 'not-draggable': !enabled }">
          {{ element.name }}
        </div>
      </template>
    </draggable>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
let id = 1
export default {
  name: 'Simple',
  display: 'Simple',
  order: 0,
  components: {
    draggable,
  },
  data() {
    return {
      enabled: true,
      list: [
        { name: 'John', id: 0 },
        { name: 'Joao', id: 1 },
        { name: 'Jean', id: 2 },
      ],
      dragging: false,
    }
  },
  computed: {
    draggingInfo() {
      return this.dragging ? 'under drag' : ''
    },
  },
  methods: {
    add: function () {
      this.list.push({ name: 'Juan ' + id, id: id++ })
    },
    replace: function () {
      this.list = [{ name: 'Edgard', id: id++ }]
    },
    checkMove: function (e) {
      window.console.log('Future index: ' + e.draggedContext.futureIndex)
    },
  },
}
</script>
<style scoped>
.buttons {
  margin-top: 35px;
}
.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}
.not-draggable {
  cursor: no-drop;
}
</style>
