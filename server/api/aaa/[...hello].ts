export default defineEventHandler(event => ({
  path: '/api/' + event.context.params.hello,
  aaa: 111,
  query: getQuery(event)
}))
