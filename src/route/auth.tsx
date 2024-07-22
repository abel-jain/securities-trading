import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Auth({ children }: any) {
  // const token = localStorage.getItem('token');
  const account = localStorage.getItem("account");

  const navigate = useNavigate();

  useEffect(() => {
    if (!account) {
      navigate("/login", { replace: true });
    }
  }, [account]);

  return children;
}
