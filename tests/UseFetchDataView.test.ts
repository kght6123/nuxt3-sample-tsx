import UseFetchDataView from '../components/UseFetchDataView.vue'
import { describe, expect, test, vi } from 'vitest'
import { mount } from '@vue/test-utils'

describe('example', async () => {
  const codeSelector = 'code'
  const buttonSelector = 'button'
  test('Renders Hello Nuxt', async () => {
    const wrapper = mount(UseFetchDataView, {
      props: {
        path: 'vitest',
        count: 100,
      },
    })
    console.log(wrapper.html())
    expect(wrapper.find(codeSelector).text()).toContain('vitest')
    await wrapper.find(buttonSelector).trigger('click')
    expect(wrapper.emitted().click[0]).toEqual([101])
  })
})
