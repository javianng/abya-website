import { auth, db } from "~/firebase";
import { signOut } from "firebase/auth";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Button } from "~/components/ui/button";
import PageLayout from "~/components/common/PageLayout";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { useAuth } from "~/components/common/AuthContext";
import TagSelection from "~/components/register/TagSelection";
import ContentContainer from "~/components/common/ContentContainer";

interface ProfileData {
  name: string;
  nationality: string;
  age: string;
  profession: string;
  interests: string[];
}

const Profile = () => {
  const { user } = useAuth();
  const [profileData, setProfileData] = useState<ProfileData | null>(null);
  const [editMode, setEditMode] = useState(false);
  const [name, setName] = useState("");
  const [nationality, setNationality] = useState("");
  const [age, setAge] = useState("");
  const [profession, setProfession] = useState("");
  const [interests, setInterests] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (user) {
      fetchProfileData().catch((error: Error) => setError(error.message));
    }
  }, [user]);

  const fetchProfileData = async (): Promise<void> => {
    if (user) {
      try {
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const data = docSnap.data() as ProfileData;
          setProfileData(data);
          setName(data.name || "");
          setNationality(data.nationality || "");
          setAge(data.age || "");
          setProfession(data.profession || "");
          setInterests(data.interests || []);
        }
      } catch (error) {
        setError((error as Error).message);
      }
    }
  };

  const handleSave = async (): Promise<void> => {
    if (user) {
      try {
        const docRef = doc(db, "users", user.uid);
        await setDoc(
          docRef,
          {
            name,
            nationality,
            age,
            profession,
            interests,
          },
          { merge: true },
        );
        setEditMode(false);
        router.reload();
      } catch (error) {
        setError((error as Error).message);
      }
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      await router.push("/");
    } catch (error) {
      setError((error as Error).message);
    }
  };

  if (!user) {
    return <div>Please sign in to view your profile.</div>;
  }

  return (
    <PageLayout>
      <ContentContainer>
        <div className="py-32">
          <h1 className="heading1 mb-4 text-2xl font-bold">Profile</h1>
          {error && <div className="text-red-500">{error}</div>}
          {profileData ? (
            <div>
              {editMode ? (
                <div className="space-y-4">
                  <div>
                    <Label>Name</Label>
                    <Input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full rounded-md border px-3 py-2 focus:outline-none focus:ring focus:ring-indigo-200"
                    />
                  </div>
                  <div>
                    <Label>Nationality</Label>
                    <Input
                      type="text"
                      value={nationality}
                      onChange={(e) => setNationality(e.target.value)}
                      className="w-full rounded-md border px-3 py-2 focus:outline-none focus:ring focus:ring-indigo-200"
                    />
                  </div>
                  <div>
                    <Label>Age</Label>
                    <Input
                      type="number"
                      value={age}
                      onChange={(e) => setAge(e.target.value)}
                      className="w-full rounded-md border px-3 py-2 focus:outline-none focus:ring focus:ring-indigo-200"
                    />
                  </div>
                  <div>
                    <Label>Profession</Label>
                    <Input
                      type="text"
                      value={profession}
                      onChange={(e) => setProfession(e.target.value)}
                      className="w-full rounded-md border px-3 py-2 focus:outline-none focus:ring focus:ring-indigo-200"
                    />
                  </div>
                  <div>
                    <Label>Interests</Label>
                    <TagSelection
                      selectedInterests={interests}
                      setSelectedInterests={setInterests}
                    />
                  </div>
                  <Button
                    onClick={handleSave}
                    className="rounded-md bg-blue-500 px-4 py-2 text-white"
                  >
                    Save
                  </Button>
                </div>
              ) : (
                <div>
                  <div className="mb-4">
                    <Label>Name</Label>
                    <div>{profileData.name}</div>
                  </div>
                  <div className="mb-4">
                    <Label>Nationality</Label>
                    <div>{profileData.nationality}</div>
                  </div>
                  <div className="mb-4">
                    <Label>Age</Label>
                    <div>{profileData.age}</div>
                  </div>
                  <div className="mb-4">
                    <Label>Profession</Label>
                    <div>{profileData.profession}</div>
                  </div>
                  <div className="mb-4">
                    <Label>Interests</Label>
                    <div>{profileData.interests.join(", ")}</div>
                  </div>
                  <div className="flex gap-2">
                    <Button onClick={() => setEditMode(true)}>Edit</Button>
                    <Button variant="destructive" onClick={handleLogout}>
                      Logout
                    </Button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div>Loading...</div>
          )}
        </div>
      </ContentContainer>
    </PageLayout>
  );
};

export default Profile;
