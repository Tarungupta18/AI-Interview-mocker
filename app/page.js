import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1>4845D2</h1>
      <Button>subscribe</Button>
      <UserButton/>
    </div>
  );
}
