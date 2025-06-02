"use client";
import { useState } from "react";
import api, { setAuthToken } from "@/utils/axios";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    try {
      const res = await api.post("/login", { email, password });
      const { token } = res.data;
      localStorage.setItem("token", token);
      setAuthToken(token);
      router.push("/profile");
    } catch (err) {
      console.error(err);
      alert("Login failed");
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
