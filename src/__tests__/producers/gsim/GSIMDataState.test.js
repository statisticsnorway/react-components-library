import { generateGSIMDataState, updateGSIMDataState, updateNewGSIMDataState } from '../../../producers/gsim'

describe('generateGSIMDataState', () => {
  it('shall return valid uuid if id', () => {
    const result = generateGSIMDataState('id', 'user')
    expect(result).toMatch(/^[a-z0-9\-]{36}$/i)
  })

  it('shall return right version if version', () => {
    const result = generateGSIMDataState('version', 'user')
    expect(result).toMatch('1.0.0')
  })

  it('shall return given user if createdBy', () => {
    const result = generateGSIMDataState('createdBy', 'thegivenuser')
    expect(result).toMatch('thegivenuser')
  })

  it('shall return given user if lastUpdatedBy', () => {
    const result = generateGSIMDataState('lastUpdatedBy', 'thegivenuser')
    expect(result).toMatch('thegivenuser')
  })

  it('shall return null if non declared element', () => {
    const result = generateGSIMDataState('notdeclare', 'user')
    expect(result).toBeNull()
  })
})

describe('updateNewGSIMDataState', () => {
  it('shall return right version if version', () => {
    const result = updateNewGSIMDataState('version', 'user')
    expect(result).toMatch('1.0.0')
  })

  it('shall return given user if createdBy', () => {
    const result = updateNewGSIMDataState('createdBy', 'thegivenuser')
    expect(result).toMatch('thegivenuser')
  })

  it('shall return given user if lastUpdatedBy', () => {
    const result = updateNewGSIMDataState('lastUpdatedBy', 'thegivenuser')
    expect(result).toMatch('thegivenuser')
  })

  it('shall return null if non declared element', () => {
    const result = updateNewGSIMDataState('notdeclared', 'user')
    expect(result).toBeNull()
  })
})

describe('updateGSIMDataState', () => {
  it('shall return version number if version', () => {
    const result = updateGSIMDataState('version', 'user', '1', '')
    expect(result).toEqual(expect.stringContaining('1'))
  })

  it('shall return given user if lastUpdatedBy', () => {
    const result = updateGSIMDataState('lastUpdatedBy', 'thegivenuser')
    expect(result).toMatch('thegivenuser')
  })

  it('shall return null if non declared element', () => {
    const result = updateGSIMDataState('notdeclared', 'user')
    expect(result).toBeNull()
  })
})
