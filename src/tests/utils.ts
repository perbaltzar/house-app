import { ReactNode } from 'react'
import { render as testRender } from '@testing-library/react'

export const render = (Node: ReactNode) => {
  return testRender(Node)
}
export * from '@testing-library/react'
