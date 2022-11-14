import UseFetch from '../components/UseFetch.vue'
import { describe, expect, it, vi } from 'vitest'
import { mount } from '@vue/test-utils'

describe('example', async () => {
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
  it('Renders Hello Nuxt', async () => {
    const wrapper = mount(UseFetch, {
      props: {},
    })
    console.log(wrapper.html())
    // expect(wrapper.find(codeSelector).text()).toContain('vitest')
    // await wrapper.find(buttonSelector).trigger('click')
    // expect(wrapper.find(valueSelector).text()).toContain('1')
  })
})
