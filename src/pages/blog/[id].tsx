import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { BLOG_DETAILS } from "~/database/BlogData";
import PageLayout from "~/components/common/PageLayout";
import { ArrowLeft, ArrowRight, CircleX } from "lucide-react";
import PageTitleSection from "~/components/common/PageTitleSection";
import ContentContainer from "~/components/common/ContentContainer";
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "~/components/ui/breadcrumb";

function getNextAndPrevBlog(currentBlogLink: string) {
  const currentIndex = BLOG_DETAILS.findIndex(
    (blog) => blog.link === currentBlogLink,
  );

  const nextBlog = BLOG_DETAILS[currentIndex + 1] ?? null;
  const prevBlog = currentIndex > 0 ? BLOG_DETAILS[currentIndex - 1] : null;

  return { nextBlog, prevBlog };
}

export default function ProjectPage() {
  const router = useRouter();
  const { id } = router.query;

  const blog = BLOG_DETAILS.find((blog) => blog.link === `/blog/${String(id)}`);
  const { nextBlog, prevBlog } = getNextAndPrevBlog(`/blog/${String(id)}`);

  if (!blog) {
    return (
      <div className="flex h-screen items-center justify-center bg-brandBlue">
        <Link href="/">
          <div className="flex w-fit items-center gap-3 rounded-md bg-brandYellow-40 p-4 shadow-md transition duration-150 hover:bg-red-100">
            <CircleX className="h-7 w-7 text-red-600" />
            <p>
              Error 404! Page not found. <br /> Return to Home?
            </p>
          </div>
        </Link>
      </div>
    );
  }

  return (
    <PageLayout>
      <PageTitleSection title={blog.title} children={undefined} />
      <ContentContainer>
        {(blog.writer || blog.editor) && (
          <div className="pb-8">
            {blog.writer && <p>Written by: {blog.writer}</p>}
            {blog.editor && <p>Edited by: {blog.editor}</p>}
          </div>
        )}

        <Breadcrumb className="pb-4">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbEllipsis className="h-4 w-4" />
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/blog">Blog</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-brandRed">
                {blog.title}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="flex flex-col items-center justify-center gap-3">
          <Image
            src={blog.thumbnail}
            alt={""}
            width={800}
            height={800}
            className="w-full pb-3"
          />
          {blog.content}
        </div>

        <div className="grid grid-cols-2 pt-12">
          {prevBlog ? (
            <Link
              href={prevBlog.link}
              className="line-clamp-2 flex flex-col items-center text-center duration-200 hover:text-red-600"
            >
              <ArrowLeft className="h-5 w-5" />
              <div className="max-w-xs">
                <p>{prevBlog.title}</p>
              </div>
            </Link>
          ) : (
            <div></div>
          )}
          {nextBlog && (
            <Link
              href={nextBlog.link}
              className="line-clamp-2 flex flex-col items-center text-center duration-200 hover:text-red-600"
            >
              <ArrowRight className="h-5 w-5" />
              <div className="max-w-xs">
                <p>{nextBlog.title}</p>
              </div>
            </Link>
          )}
        </div>
      </ContentContainer>
    </PageLayout>
  );
}
