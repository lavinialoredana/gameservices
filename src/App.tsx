import "./App.css";
import { Box, Button, Heading } from "@chakra-ui/react";

function App() {
  return (
    <>
      <Box>
        <Heading>Developer Portal </Heading>
        <Box padding="5">
          <p>
            Everything you need to create and manage your organization, all in
            one place
          </p>
        </Box>

        <Button
          colorScheme="pink"
          size="lg"
          onClick={() => console.log("Lavinia is trying to sign in")}
        >
          Sign In
        </Button>
      </Box>
    </>
  );
}

export default App;
