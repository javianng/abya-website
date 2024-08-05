import { useState } from "react";
import { auth, db } from "~/firebase";
import { useRouter } from "next/router";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Button } from "~/components/ui/button";
import { doc, setDoc } from "firebase/firestore";
import TagSelection from "~/components/register/TagSelection";
import CountrySelector from "~/components/register/CountrySelector";

const RegisterDetails = () => {
  const [nationality, setNationality] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [profession, setProfession] = useState("");
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const user = auth.currentUser;
    if (user) {
      try {
        await setDoc(
          doc(db, "users", user.uid),
          {
            nationality,
            name,
            age,
            profession,
            interests: selectedInterests,
          },
          { merge: true },
        );
        await router.push("/");
      } catch (error) {
        setError((error as Error).message);
      }
    } else {
      setError("User not logged in");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm rounded bg-white p-6 shadow-md"
      >
        <h2 className="mb-4 text-center text-2xl font-semibold">
          Complete Registration
        </h2>
        {error && <p className="mb-4 text-red-500">{error}</p>}
        <div className="mb-4">
          <Label htmlFor="name">Name</Label>
          <Input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full"
          />
        </div>
        <div className="mb-4">
          <Label htmlFor="nationality">Nationality</Label>
          <CountrySelector
            selectedCountry={nationality}
            setSelectedCountry={setNationality}
          />
        </div>
        <div className="mb-4">
          <Label htmlFor="age">Age</Label>
          <Input
            type="number"
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
            className="w-full"
          />
        </div>
        <div className="mb-4">
          <Label htmlFor="profession">Profession</Label>
          <Input
            type="text"
            id="profession"
            value={profession}
            onChange={(e) => setProfession(e.target.value)}
            required
            className="w-full"
          />
        </div>
        <div className="mb-6">
          <Label htmlFor="interest">Interest (ASEAN related)</Label>
          <TagSelection
            selectedInterests={selectedInterests}
            setSelectedInterests={setSelectedInterests}
          />
        </div>
        <Button type="submit" className="w-full">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default RegisterDetails;
