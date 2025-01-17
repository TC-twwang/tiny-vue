import { mount } from '@vue/test-utils'
import { describe, expect, test, vi } from 'vitest'
import { Switch } from '@opentiny/vue'
import { nextTick, ref } from 'vue'
import { randomValues } from './common/globalConfig'

randomValues(global)

let value = false

describe('switch', () => {
  test('size', async () => {
    const wrapper = mount(() => <Switch mini={true}></Switch>)
    expect(wrapper.find('.mini').exists()).toBe(true)
  })

  test('slot', async () => {
    const wrapper = mount(() => <Switch v-model={value} show-text={true} v-slots={{
      open: () => <span class="yes">是</span>,
      close: () => <span class="no">否</span>
    }}></Switch>)
    expect(wrapper.find('.no').exists()).toBe(true)
  })

  test('events', async () => {
    const handleClick = vi.fn()
    const wrapper = mount(() => <Switch v-model={value} onChange={handleClick}></Switch>)
    await wrapper.find('.tiny-switch').trigger('click')
    await nextTick()
    expect(handleClick).toHaveBeenCalled()
  })
})
