"use client"; // Se estiver usando Next.js App Router (app/)

import { useRouter } from "next/navigation";
import { useEffect } from "react";

const HomePage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/fsw-donalds");
  }, [router]); // ✅ Adicionado para evitar o warning

  return null;
};

export default HomePage;
