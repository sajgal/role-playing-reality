import { createFileRoute, Outlet } from '@tanstack/react-router'
import { createIsomorphicFn } from '@tanstack/react-start'
import { createContext } from 'react'

export const Route = createFileRoute('/test')({
  component: RouteComponent,
})

type ContextType = {
  name: string,
  number?: number,
} | null;

export const MyOwnContext = createContext<ContextType>(null);

const logger = createIsomorphicFn()
  .server((msg) => console.log(`[SERVER]: ${msg}`))
  .client((msg) => console.log(`[CLIENT]: ${msg}`))

function RouteComponent() {
  logger('this is the message');

  return (
    <MyOwnContext value={{name: 'Test Page', number: 25}}>
      <div>Hello "/test"!</div>
      <Outlet />
    </MyOwnContext>
  )
}
