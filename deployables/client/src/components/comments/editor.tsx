import { TextField } from 'office-ui-fabric-react'
import React from 'react'

export const CommentEditor: React.FC = () => {
  return <TextField multiline={true} placeholder={`write something`} />
}
