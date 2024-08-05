import Image from "next/image";
import { useState } from "react";
import logo from "public/logo.png";
import { useRouter } from "next/router";
import { Label } from "~/components/ui/label";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import { auth, googleProvider } from "~/firebase";
import PageLayout from "~/components/common/PageLayout";
import ContentContainer from "~/components/common/ContentContainer";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      await router.push("/profile"); // Redirect to profile page upon successful login
    } catch (error) {
      setError((error as Error).message);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      await router.push("/profile"); // Redirect to profile page upon successful login
    } catch (error) {
      setError((error as Error).message);
    }
  };

  return (
    <PageLayout>
      <div className="min-h-screen bg-[url('/login.JPG')] bg-cover bg-bottom">
        <ContentContainer className="flex min-h-screen items-center bg-black bg-opacity-60">
          <div className="flex items-center justify-center py-24">
            <form
              onSubmit={handleLogin}
              className="w-full max-w-sm rounded bg-white p-6 shadow-md"
            >
              <div className="mb-4 flex justify-center">
                <Image src={logo} alt="Logo" className="h-[3rem] w-[3rem]" />
              </div>
              <h2 className="mb-4 text-center text-2xl font-semibold">Login</h2>
              {error && <p className="mb-4 text-red-500">{error}</p>}
              <div className="mb-4">
                <Label htmlFor="email">Email</Label>
                <Input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full"
                />
              </div>
              <div className="mb-6">
                <Label htmlFor="password">Password</Label>
                <Input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full"
                />
              </div>
              <Button type="submit" className="w-full">
                Login
              </Button>
              <p className="my-2 text-center text-sm text-gray-600">Or</p>
              <Button
                type="button"
                onClick={handleGoogleSignIn}
                className="w-full"
              >
                <Image
                  src={"/google.svg"}
                  alt={""}
                  width={100}
                  height={100}
                  className="mr-2 h-5 w-5"
                />
                Sign in with Google
              </Button>
            </form>
          </div>
        </ContentContainer>
      </div>
    </PageLayout>
  );
};

export default Login;
