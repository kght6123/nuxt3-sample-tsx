import Stepper from '../components/StepperJSX.vue'
import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'

describe('example', async () => {
  const valueSelector = 'span'
  const buttonSelector = 'button'
  it('Renders Hello Nuxt', async () => {
    const wrapper = mount(Stepper, {
      props: {
        max: 1,
      },
    })
    expect(wrapper.find(valueSelector).text()).toContain('0')
    await wrapper.find(buttonSelector).trigger('click')
    expect(wrapper.find(valueSelector).text()).toContain('1')
  })
})
