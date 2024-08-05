const ABYADiscoverDetails = [
  {
    title: "Education and Skills",
    description:
      "Equip yourself with essential knowledge and skills for personal and professional growth. Our resources are designed to help you thrive in a global landscape.",
  },
  {
    title: "Health and Well-Being",
    description:
      "Focus on holistic development with content that addresses both your mental and physical well-being, ensuring a balanced approach to personal growth.",
  },
  {
    title: "Employment and Opportunities",
    description:
      "Gain insights into career development and growth. Discover potential career paths and opportunities within the ASEAN region.",
  },
  {
    title: "ASEAN Participation and Engagement",
    description:
      "Cultivate a sense of belonging and active involvement in the ASEAN community through engaging content and interactive discussions.",
  },
];

export default function DiscoverOffer() {
  return (
    <ul className="grid gap-4">
      {ABYADiscoverDetails.map((item) => (
        <li
          className="rounded-lg bg-brandYellow-10 p-4 shadow-sm"
          key={item.title}
        >
          <h2 className="heading4 pb-4 underline decoration-brandYellow decoration-8 underline-offset-8">
            {item.title}
          </h2>
          <ul>
            <li>{item.description}</li>
          </ul>
        </li>
      ))}
    </ul>
  );
}
