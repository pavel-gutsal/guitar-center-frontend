import { SignupForm } from "./components/SignupForm";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

const queryClient = new QueryClient();

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="bg-slate-800">
        <SignupForm />
      </div>
    </QueryClientProvider>
  )
}