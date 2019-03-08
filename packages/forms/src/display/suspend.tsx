import React, { Suspense } from 'react'

// TODO: fallback skeleton?
export const suspendField = <Props extends {}>(
  Component: React.FC<Props>,
): React.FC<Props> => props => {
  console.log('Field suspended')
  return (
    <Suspense fallback={<p>Loading field</p>}>
      <Component {...props} />
    </Suspense>
  )
}
