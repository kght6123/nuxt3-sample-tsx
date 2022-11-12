export default defineEventHandler((event) => ({
  message: `Hello world (${event.context.params.slug}) (Generated at ${new Date().toUTCString()})`,
}))
