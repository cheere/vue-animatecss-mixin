import { mount } from '@vue/test-utils'
import Elevator from '@/components/layouts/Elevator.vue'
import Footer from '@/components/layouts/Footer.vue'

describe('Elevator', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Elevator)
    expect(wrapper.vm).toBeTruthy()
  })
})

describe('Footer', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Footer)
    expect(wrapper.vm).toBeTruthy()
  })
})

