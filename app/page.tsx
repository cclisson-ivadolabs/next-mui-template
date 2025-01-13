"use client";

import { Button } from "@mui/material";
import { useRouter } from "next/navigation";

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
