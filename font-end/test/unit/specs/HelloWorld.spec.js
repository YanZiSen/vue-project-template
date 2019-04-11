/**
 * @jest-environment node
 */

import Vue from 'vue'
import HelloWorld from '@/views/HelloWorld.vue'
import {sum} from '@/views/test'

test('1 add 2', () => {
  expect(sum(1, 2)).toBe(3)
})
describe('HelloWorld.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(HelloWorld)
    const vm = new Constructor().$mount()

    expect(vm.$el.querySelector('.hello h1').textContent)
      .toEqual('Welcome to Your Vue.js App')
  })
})
