<script lang="tsx">
import { defineComponent, reactive } from 'vue'

export default defineComponent({
  setup(props) {
    const counter = reactive<{ count: number }>({ count: 0 })
    return () => (
      <>
        <div>
          <span>{counter.count}</span>
          <button
            onClick={() => {
              counter.count <= props.max ? counter.count++ : counter.count
            }}
          >
            Increment
          </button>
        </div>
      </>
    )
  },
  props: {
    max: { type: Number, required: true },
  },
})
</script>
