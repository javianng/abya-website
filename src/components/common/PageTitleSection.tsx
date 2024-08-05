import type { ReactNode } from "react";
import ContentContainer from "./ContentContainer";

type PageTitleSectionProps = {
  title: string;
  children: ReactNode;
};

const PageTitleSection: React.FC<PageTitleSectionProps> = ({
  title,
  children,
}) => {
  return (
    <ContentContainer>
      <div className="flex w-full max-w-7xl flex-col flex-nowrap border-b-4 pb-4 pt-0 sm:pt-20">
        <h1 className="heading1 pb-4 uppercase">{title}</h1>
        <div>{children}</div>
      </div>
    </ContentContainer>
  );
};

export default PageTitleSection;
