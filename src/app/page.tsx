import { SignInButton, SignedIn, SignedOut, UserProfile } from "@clerk/nextjs";

export const dynamic = "force-dynamic";

export default function Application(): JSX.Element {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="m-auto">
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserProfile />
        </SignedIn>
      </div>
    </main>
  );
}
