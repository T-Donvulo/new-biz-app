import React from 'react'
import {Alert} from './Alert'

export const Demo = () => {
   return <div>
      <Alert title="Hello World" />
      <Alert title="Hello World" nature="validation"/>
      <Alert title="Hello World" nature="error"/>
      <Alert title="Hello World" nature="resolving"/>

      <Alert title="Hello World" description="This is the description message on a specific alert"/>
      <Alert title="Hello World" nature="validation" description="This is the description message on a specific alert"/>
      <Alert title="Hello World" nature="error" description="This is the description message on a specific alert"/>
      <Alert title="Hello World" nature="resolving" description="This is the description message on a specific alert"/>
   </div>
}    

export default Demo