export default defineComponent({
  props: {
    message: String,
  },
  render: (props: { message: string }) => {
    return <div>{props.message}</div>
  },
})
