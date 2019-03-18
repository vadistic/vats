import { css } from '@emotion/core'
import { Theme } from '@vats/styling'
import { Callout, ICommandBarItemProps, IComponentAsProps } from 'office-ui-fabric-react'
import React, { useRef, useState } from 'react'

const calloutInnerStyles = (theme: Theme) => css`
  padding: ${theme.spacing.m};
`

export const renderBarCalloutButton = (
  renderContent: (props: ICommandBarItemProps) => JSX.Element,
) => {
  const CalloutBarButton: React.FC<IComponentAsProps<ICommandBarItemProps>> = ({
    defaultRender: Button,
    ...props
  }) => {
    if (!Button) {
      return null
    }

    const [hidden, setHidden] = useState(true)
    const ref = useRef(null)

    return (
      <>
        <div ref={ref} onClick={() => setHidden(false)}>
          <Button {...props} />
        </div>
        <Callout hidden={hidden} target={ref.current} onDismiss={() => setHidden(true)}>
          <div css={calloutInnerStyles}>{renderContent(props)}</div>
        </Callout>
      </>
    )
  }

  return CalloutBarButton
}
