import React from 'react'
import styled from 'styled-components'
import {Text} from './Text'
import { tokens } from '../../data/tokens'

const DarkBg = styled.div`
width: 100%;
background: rgb(%{tokens.colors.turquise});
`

export const Demo = () => {
   return <div>
      <Text inverse size='s'>This is a title</Text>
      <Text inverse size='m'>This is a title</Text>
      <Text inverse size='l'>This is a title</Text>
      <Text inverse size='xl'>This is a title</Text>

      <Text size='s'>hgjbgvbhbu yfghbgfhjb ghjbkjghb btygbhgb 
         fhdghvb fhdghjbn fhgfhb dgfhjvbn rtyuu tfgbhn lihjvf</Text>

      <Text size='m'>hgjbgvbhbu yfghbgfhjb ghjbkjghb btygbhgb 
         fhdghvb fhdghjbn fhgfhb dgfhjvbn rtyuu tfgbhn lihjvf</Text>

      <Text size='l'>hgjbgvbhbu yfghbgfhjb ghjbkjghb btygbhgb 
         fhdghvb fhdghjbn fhgfhb dgfhjvbn rtyuu tfgbhn lihjvf</Text>

         <DarkBg>
      <Text inverse size='s'>This is a title</Text>
      <Text inverse size='m'>This is a title</Text>
      <Text inverse size='l'>This is a title</Text>
      <Text inverse size='xl'>This is a title</Text>
    
      <Text inverse size='s'>hgjbgvbhbu yfghbgfhjb ghjbkjghb btygbhgb 
         fhdghvb fhdghjbn fhgfhb dgfhjvbn rtyuu tfgbhn lihjvf</Text>

      <Text inverse size='m'>hgjbgvbhbu yfghbgfhjb ghjbkjghb btygbhgb 
         fhdghvb fhdghjbn fhgfhb dgfhjvbn rtyuu tfgbhn lihjvf</Text>

      <Text inverse size='l'>hgjbgvbhbu yfghbgfhjb ghjbkjghb btygbhgb 
         fhdghvb fhdghjbn fhgfhb dgfhjvbn rtyuu tfgbhn lihjvf</Text>
         </DarkBg>

      </div>
}    

export default Demo