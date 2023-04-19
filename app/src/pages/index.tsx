import { useColorMode, Switch, Box } from '@chakra-ui/react';

function IndexPage() {
  const { toggleColorMode } = useColorMode();
  return (
    <div>
      <Box ml="1rem" mt="1rem">
        <Switch onChange={toggleColorMode}>Dark mode</Switch>
      </Box>
    </div>
  )
}

export default IndexPage