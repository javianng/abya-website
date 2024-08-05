import { type ReactNode } from "react";

type ContentContainerProps = {
  children: ReactNode;
  className?: string;
};

const ContentContainer: React.FC<ContentContainerProps> = ({
  children,
  className,
}) => {
  return (
    <section className={`flex justify-center ${className ?? ""}`}>
      <div className="w-full max-w-7xl items-center p-9">{children}</div>
    </section>
  );
};

export default ContentContainer;
