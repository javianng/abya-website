import Image from "next/image";
import ABYA_END_OF_YEAR_PARTY_2023_2 from "public/Blog/ABYA_END_OF_YEAR_PARTY_2023_2.png";

export default function blog() {
  return (
    <div className="flex flex-col items-start gap-5">
      <p>
        In 2023, we had the great opportunity of hearing the insights from
        Guest-Of-Honour Hiroshi Ishikawa the Special Advisor to the Minister for
        ASEAN and Asia Pacific Affairs at Japan's Ministry of Economy, Trade and
        Industry (METI), and Hasliza Ahmad, director at National Youth Council
        of Singapore at our End of Year Party.
      </p>
      <Image src={ABYA_END_OF_YEAR_PARTY_2023_2} alt={""} />
      <p>
        They were invited to share their insights regarding the future of the
        ASEAN region, and key technological trends that youths should take note
        of.
      </p>
    </div>
  );
}
