import { useContext } from "react";
import { LoginStatusContext } from "./LoginStatusContext";

export function useLoginStatus() {
  return useContext(LoginStatusContext);
}
