import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import {
  ChakraProvider,
} from "@chakra-ui/react";

import styles from "./theme.tsx";


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ChakraProvider theme={styles} cssVarsRoot="body">
      <App />
    </ChakraProvider>
  </StrictMode>
);
