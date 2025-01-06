"use client";

import { useRouter } from "next/navigation";
import { Button } from "@mui/material";

export default function Home() {
  const router = useRouter();

  return (
    <div className="flex-1">
      <div className="flex justify-center mt-6">
        <Button variant="contained" onClick={() => router.push("/dashboard")}>
          Login
        </Button>
      </div>
    </div>
  );
}
