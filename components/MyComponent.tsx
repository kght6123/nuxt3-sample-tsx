export default defineComponent({
  props: {
    message: { type: String, default: "Not Found Value.", required: false },
  },
  render: (props: { message: string }) => {
    return <div>{props.message}</div>
  },
})
