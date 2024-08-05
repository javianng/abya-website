import clsx from "clsx";

const interestsList = [
  "Technology",
  "Education",
  "Health",
  "Environment",
  "Politics",
  "Economics",
  "Culture",
  "Tourism",
  "Science",
  "Sports",
];

interface TagSelectionProps {
  selectedInterests: string[];
  setSelectedInterests: (interests: string[]) => void;
}

const TagSelection: React.FC<TagSelectionProps> = ({
  selectedInterests,
  setSelectedInterests,
}) => {
  const toggleInterest = (interest: string) => {
    if (selectedInterests.includes(interest)) {
      setSelectedInterests(selectedInterests.filter((i) => i !== interest));
    } else {
      setSelectedInterests([...selectedInterests, interest]);
    }
  };

  return (
    <div className="flex flex-wrap gap-2">
      {interestsList.map((interest) => (
        <div
          key={interest}
          onClick={() => toggleInterest(interest)}
          className={clsx(
            "cursor-pointer rounded-md px-4 py-2",
            selectedInterests.includes(interest)
              ? "bg-brandYellow text-white"
              : "bg-neutral-200 text-gray-800",
          )}
        >
          {interest}
        </div>
      ))}
    </div>
  );
};

export default TagSelection;
