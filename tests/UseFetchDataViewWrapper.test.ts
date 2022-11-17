import UseFetchDataViewWrapper from '../components/UseFetchDataViewWrapper.vue'
import { describe, expect, test, vi } from 'vitest'
import { mount } from '@vue/test-utils'

// npm run test:run ./tests/UseFetchDataViewWrapper.test.ts

describe('example', async () => {
  const codeSelector = 'code'
  const buttonSelector = 'button'
  test('Renders Hello Nuxt', async () => {
    const wrapper = mount(UseFetchDataViewWrapper, {
      props: {
        path: 'vitest2',
        count: 100,
      },
      global: {
        stubs: {
          UseFetchDataView: {
            template: '<div><code>{{ path }}</code><button @click="onClick">click</button></div>',
            props: ['path', 'count'],
            methods: {
              onClick() {
                this.$emit('click', 999)
              },
            },
          },
        },
      },
    })
    console.log(wrapper.html())
    expect(wrapper.find(codeSelector).text()).toContain('vitest2')
    await wrapper.find(buttonSelector).trigger('click')
    expect(wrapper.emitted().click[0]).toEqual([999 + 1])
  })
})
