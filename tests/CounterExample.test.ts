import CounterExample from '../components/CounterExample.vue'
import { describe, expect, test, vi } from 'vitest'
import { mount } from '@vue/test-utils'

describe('example', async () => {
  // TODO: useFetchのモックはうまくいかない、この場合はuseFetch以外を別コンポーネントにするか、NuxtのE2Eテストを使う必要がありそう。 https://nuxt.com/docs/getting-started/testing/
  // const codeSelector = 'code'
  // const buttonSelector = 'button'
  // const useFetch = async () =>
  //   vi.fn(() => ({
  //     data: {
  //       path: 'vitest',
  //     },
  //     observe: vi.fn(),
  //     takeRecords: vi.fn(),
  //     unobserve: vi.fn(),
  //   }))
  // vi.stubGlobal('useFetch', useFetch)
  test('Renders Hello Nuxt', async () => {
    const wrapper = mount(CounterExample, {
      props: {},
    })
    console.log(wrapper.html())
    // expect(wrapper.find(codeSelector).text()).toContain('vitest')
    // await wrapper.find(buttonSelector).trigger('click')
    // expect(wrapper.find(valueSelector).text()).toContain('1')
  })
})
