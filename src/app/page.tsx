import { SignedIn, SignedOut } from "@clerk/nextjs";
import Images from "./_components/images";

export const dynamic = "force-dynamic";

export default function HomePage() {
  return (
    <main>
      <SignedOut>
        <div className="h-full w-full p-4 text-center text-2xl">
          Please sign in
        </div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
