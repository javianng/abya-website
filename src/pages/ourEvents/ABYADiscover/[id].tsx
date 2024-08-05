import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import PageLayout from "~/components/common/PageLayout";
import { ABYA_DISCOVER_DETAILS } from "~/database/ABYADiscoverData";
import PageTitleSection from "~/components/common/PageTitleSection";
import ContentContainer from "~/components/common/ContentContainer";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
  BreadcrumbPage,
} from "~/components/ui/breadcrumb";

export default function ProjectPage() {
  const router = useRouter();
  const { id } = router.query;

  const discover = ABYA_DISCOVER_DETAILS.find(
    (discover) => discover.link === `/ourEvents/ABYADiscover/${String(id)}`,
  );

  if (!discover) {
    return (
      <div className="bg-brand-300 flex h-screen items-center justify-center">
        <Link href="/">
          <div className="bg-brand-100 text-brand-300 hover:bg-brand-50 flex w-fit items-center gap-3 rounded-md p-4 shadow-md transition duration-150">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 shrink-0 stroke-current"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>
              Error 404! Page not found. <br /> Return to Home?
            </span>
          </div>
        </Link>
      </div>
    );
  }

  return (
    <PageLayout>
      <PageTitleSection title={discover.title} children={undefined} />
      <ContentContainer>
        <Breadcrumb className="pb-4">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbEllipsis className="h-4 w-4" />
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/ourEvents/ABYADiscover">
                ABYA Discover
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-brandRed">
                {discover.title}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="flex flex-col items-center justify-center gap-3">
          <Image
            src={discover.thumbnail}
            alt={""}
            width={800}
            height={800}
            className="w-full"
          />
          {discover.content}
        </div>
      </ContentContainer>
    </PageLayout>
  );
}
