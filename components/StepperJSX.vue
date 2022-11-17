<script lang="tsx">
import { defineComponent, reactive } from 'vue'

export default defineComponent({
  props: {
    max: { type: Number, required: true },
  },
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
})
</script>

<!-- TODO: 下記のようなscript setup的な書き方はできない！！JSXの場合はdefineComponentのsetupまたはrenderで書く必要がある。
  <script lang="tsx" setup>
const props = defineProps<{
  max: number
}>()
const counter = reactive<{ count: number }>({ count: 0 })

defineExpose({
  props,
  counter,
})
</script>

<script lang="tsx">
import { defineComponent, reactive } from 'vue'

export default defineComponent({
  render() {
    return (
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
    )
  },
})
</script>

-->
