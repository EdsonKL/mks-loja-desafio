"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import React, { ReactNode, useState } from "react";
import ContextProvider from "./contexts/context";

// Criação do provider do react query
function Providers({ children }: { children: ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());

  // Implementação dos providers do React-Query e do Context
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <ContextProvider>{children}</ContextProvider>
    </QueryClientProvider>
  );
}

export default Providers;
