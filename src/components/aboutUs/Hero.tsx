import ContentContainer from "../common/ContentContainer";

export default function Hero() {
  return (
    <ContentContainer className="h-fit min-h-[32rem] items-center bg-[url('/VisionMissionBackground.png')] bg-cover bg-fixed bg-center">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <section className="rounded-lg border-2 px-4 py-12">
          <h1 className="heading1 text-white">Vision</h1>
          <p className="text-white">
            To be the leading youth organisation that nurtures future ASEAN
            business leaders.
          </p>
        </section>
        <section className="rounded-lg border-2 px-4 py-12">
          <h1 className="heading1 text-white">Mission</h1>
          <p className="text-white">
            Empower a community of ASEAN youth to work and communicate
            effectively with people regionally, through cross-cultural training,
            exposure, application, and networking.
          </p>
        </section>
      </div>
    </ContentContainer>
  );
}
