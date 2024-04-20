import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export const dynamic = "force-dynamic";

export default function Application(): JSX.Element {
  return (
    <main className="flex min-h-screen flex-col">
      <nav className="flex items-center justify-between">
        <p className="text-xl font-bold">Wisdom Academy</p>
        <div>
          <SignedOut>
            <SignInButton>
              <button>Hello World</button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </nav>
      <section className=""></section>
    </main>
  );
}
