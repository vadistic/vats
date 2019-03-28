import { ElementType } from '@vats/utils'
import { IComputedValue } from 'mobx'
import { MultiStoreValue, SingleStoreValue, StoreTyping } from './create'
import { StoreObservables } from './observables'

export interface CreateStoreHelperProps<Typing extends StoreTyping> {
  observables: StoreObservables<Typing, any>
}

interface SingleTypeguard {
  data: {
    [name: string]: SingleStoreValue
  }
  value: IComputedValue<SingleStoreValue>
}

interface MultiTypeguard {
  data: {
    [name: string]: MultiStoreValue
  }
  value: IComputedValue<MultiStoreValue>
}

export const isSingle = <Typing extends StoreTyping>(
  obs: StoreObservables<Typing, any>,
): obs is StoreObservables<Typing, 'single'> & SingleTypeguard => obs.config.type === 'single'

export const isMulti = <Typing extends StoreTyping>(
  obs: StoreObservables<Typing, any>,
): obs is StoreObservables<Typing, 'multi'> & MultiTypeguard => obs.config.type === 'multi'

export const isAnyArray = (val: any): val is any[] => Array.isArray(val)

export interface StoreHelper<Typing extends StoreTyping> {
  actionName: (name: string) => string
  getValue: () => Typing['value']
  setValue: (val: Typing['value']) => void
  setElementByIndex: (index: number, val: ElementType<Typing['value']>) => void
  setElementById: (id: string, val: ElementType<Typing['value']>) => void
  getElementByIndex: (index: number) => ElementType<Typing['value']>
  getElementById: (id: string) => ElementType<Typing['value']>
  pushElement: (val: ElementType<Typing['value']>) => void
  removeElementByIndex: (index: number) => ElementType<Typing['value']>
  removeElementById: (id: string) => ElementType<Typing['value']>
}

export const createStoreHelper = <Typing extends StoreTyping>({
  observables,
}: CreateStoreHelperProps<Typing>) => {
  const actionName = (name: string) => observables.config.name + ': ' + name

  /*
   * Those dead simple getters/setters are mainly to not fight with typings in mutations
   */
  const getValue = () => observables.data[observables.config.roots.query] as Typing['value']

  const setValue = (val: Typing['value']) => {
    observables.data[observables.config.roots.query] = val
  }

  const setElementByIndex = (index: number, val: ElementType<Typing['value']>) => {
    const value = observables.data[observables.config.roots.query] as any[]

    value[index] = val
  }

  const setElementById = (id: string, val: ElementType<Typing['value']>) => {
    const value = observables.data[observables.config.roots.query] as any[]

    const index = value.findIndex(el => el.id === id)
    value[index] = val
  }

  const getElementByIndex = (index: number): ElementType<Typing['value']> => {
    const value = observables.data[observables.config.roots.query] as any[]
    return value[index]
  }

  const getElementById = (id: string): ElementType<Typing['value']> => {
    const value = observables.data[observables.config.roots.query] as any[]
    return value.find(el => el.id === id)
  }

  const pushElement = (val: ElementType<Typing['value']>) => {
    const value = observables.data[observables.config.roots.query] as any[]
    value.push(val)
  }

  const removeElementByIndex = (index: number): ElementType<Typing['value']> => {
    const value = observables.data[observables.config.roots.query] as any[]
    return value.splice(index, 1)[0]
  }

  const removeElementById = (id: string): ElementType<Typing['value']> => {
    const value = observables.data[observables.config.roots.query] as any[]
    const index = value.findIndex(el => el.id === id)
    return value.splice(index, 1)[0]
  }

  return {
    actionName,
    getValue,
    setValue,
    setElementByIndex,
    setElementById,
    getElementByIndex,
    getElementById,
    pushElement,
    removeElementByIndex,
    removeElementById,
  }
}
