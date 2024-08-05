import Image from "next/image";
import { useState } from "react";
import router from "next/router";
import logo from "public/logo.png";
import { Label } from "~/components/ui/label";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import { doc, setDoc } from "firebase/firestore";
import { auth, db, googleProvider } from "~/firebase";
import PageLayout from "~/components/common/PageLayout";
import ContentContainer from "~/components/common/ContentContainer";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      const user = userCredential.user;
      await setDoc(doc(db, "users", user.uid), {
        email: user.email,
      });
      await router.push("/register/details");
    } catch (error) {
      setError((error as Error).message);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const userCredential = await signInWithPopup(auth, googleProvider);
      const user = userCredential.user;
      await setDoc(doc(db, "users", user.uid), {
        email: user.email,
      });
      await router.push("/register/details");
    } catch (error) {
      setError((error as Error).message);
    }
  };

  return (
    <PageLayout>
      <div className="min-h-screen bg-[url('/register.jpg')] bg-cover bg-bottom">
        <ContentContainer className="flex min-h-screen items-center bg-black bg-opacity-60">
          <div className="flex flex-col items-center gap-9 py-12 sm:flex-row sm:justify-between sm:py-24">
            <div className="flex w-full flex-col gap-3 text-white sm:w-1/2">
              <h2 className="heading3">
                Get involved in shaping ASEAN&apos;s future.
              </h2>
              <p>
                Dive into our dynamic programs focusing on Political, Economic,
                and Cultural sectors. Collaborate with industry leaders, engage
                in cutting-edge projects, and gain invaluable insights.
              </p>
              <p>
                Take the first step to be a part of the ASEAN community by
                registering with ABYA now.
              </p>
            </div>
            <form
              onSubmit={handleRegister}
              className="w-full max-w-sm rounded bg-white p-6 shadow-md sm:w-1/2"
            >
              <div className="mb-4 flex justify-center">
                <Image src={logo} alt="Logo" className="h-[3rem] w-[3rem]" />
              </div>
              <h2 className="mb-4 text-center text-2xl font-semibold">
                Register
              </h2>
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
                Register
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

export default Register;
