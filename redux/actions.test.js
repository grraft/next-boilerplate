/* global describe, it, expect */
import { oneMoreYear } from './actions.js'

describe('Sync actions', () => {
  describe('oneMoreYear', () => {
    it('should have no value', () => {
      const action = oneMoreYear()
      expect(action.value).toBe(undefined)
    })
  })
})
