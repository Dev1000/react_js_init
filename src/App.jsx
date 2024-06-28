import { useState } from 'react'
import {Button, Center, Stack, Text} from '@chakra-ui/react'
import api from "./utils/api.js";

function App() {
  const [message, setMessage] = useState(null)

  const handleOnClick = async () => {
    try {
      const response = await api.get(`/test`)
      console.log(response)

      if (response.status === 200) {
        setMessage(response.data.message)
      }

    } catch (e) {
      console.log(e)
    }
  }

  return (
    <Center>
      <Stack>
        <Text fontSize='4xl'>Hello Eduardo</Text>
        <Button
          onClick={handleOnClick}
          colorScheme='blue'
        >
          Connect with Rails API
        </Button>
        {message && <Text>{message}</Text>}
      </Stack>
    </Center>
  )
}

export default App
