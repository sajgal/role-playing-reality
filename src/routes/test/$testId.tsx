import { createFileRoute } from '@tanstack/react-router'
import { MyOwnContext } from '../test';
import { useContext } from 'react';

export const Route = createFileRoute('/test/$testId')({
  component: RouteComponent,
})

function RouteComponent() {
  const { testId } = Route.useParams();
  const context = useContext(MyOwnContext);
  const contextNumber = context?.number;

  return <div>TestId: {testId} {contextNumber ? ` or ${contextNumber}` : ''}</div>
  // return <div>Hello `/test/${testId}`!</div>
}
