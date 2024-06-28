import { useState } from 'react'
import {Center, Text} from '@chakra-ui/react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Center>
      <Text fontSize='4xl'>Hello Eduardo</Text>
    </Center>
  )
}

export default App
