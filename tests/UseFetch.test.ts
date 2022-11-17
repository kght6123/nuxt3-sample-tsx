import UseFetch from '../components/UseFetch.vue'
import { describe, expect, test, vi } from 'vitest'
import { mount } from '@vue/test-utils'

describe('example', async () => {
  // const codeSelector = 'code'
  // const buttonSelector = 'button'
  // TODO: useFetchのモックはうまくいかない、この場合はuseFetch以外を別コンポーネントにするか、NuxtのE2Eテストを使う必要がありそう。 https://nuxt.com/docs/getting-started/testing/
  // const useFetch = () => {
  //   return new Promise((resolve) => {
  //     console.log('useFetch called')
  //     resolve({
  //       data: {
  //         path: 'vitest',
  //       },
  //       observe: vi.fn(),
  //       takeRecords: vi.fn(),
  //       unobserve: vi.fn(),
  //     })
  //   })
  // }
  // vi.stubGlobal('useFetch', useFetch)
  // console.log(`aaa`)
  test('Renders Hello Nuxt', async () => {
    const wrapper = mount(UseFetch, {
      props: {},
    })
    // expect(wrapper).toMatchSnapshot()
    console.log(`bbb`)
    console.log(wrapper.html() + `ccc`)
    // expect(wrapper.find(codeSelector).text()).toContain('vitest')
    // await wrapper.find(buttonSelector).trigger('click')
    // expect(wrapper.find(valueSelector).text()).toContain('1')
  })
})
