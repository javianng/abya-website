import Link from "next/link";
import Image from "next/image";
import { BLOG_DETAILS } from "~/database/BlogData";
import PDFViewer from "~/components/blog/PDFViewer";
import { Separator } from "~/components/ui/separator";
import { BookOpen, ChevronRight } from "lucide-react";
import PageLayout from "~/components/common/PageLayout";
import ContentContainer from "~/components/common/ContentContainer";
import PageTitleSection from "~/components/common/PageTitleSection";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";

export default function Blog() {
  return (
    <PageLayout>
      <PageTitleSection title={"Blog"}>
        Take a read to find out more about the latest happenings within the
        ASEAN Business Youth Association! &ndash; We've got opinion pieces,
        event roundups, as well as current affairs news within the ASEAN region.
      </PageTitleSection>
      <ContentContainer>
        <h2 className="heading2">ABYA Annual Report</h2>
        <PDFViewer />
        <Separator className="mb-8 mt-2" />
        <div className="flex items-end justify-center gap-2 pb-8">
          <h1 className="heading1 text-center underline decoration-brandRed-70  decoration-8 underline-offset-8">
            Blogs
          </h1>
          <BookOpen className="h-16 w-16" />
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {BLOG_DETAILS.map((item, index) => (
            <Link href={item.link} key={index} className="group">
              <Card className="w-80 border-2 duration-200 group-hover:border-brandYellow">
                <CardHeader>
                  <CardTitle className="line-clamp-3 h-20 group-hover:text-brandBlue-50">
                    {item.title}
                  </CardTitle>
                  <p className="line-clamp-1 gap-1 text-neutral-600">
                    <span>By: </span>
                    {item.writer && <span>{item.writer}</span>}
                    {item.editor && <span> & {item.editor}</span>}
                    {!item.writer && !item.editor && <span>ABYA</span>}
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="flex overflow-hidden rounded-md">
                    <Image
                      src={item.thumbnail}
                      alt={""}
                      width={800}
                      height={800}
                      className="h-52 object-cover grayscale duration-200 group-hover:scale-110 group-hover:grayscale-0"
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <ChevronRight className="text-neutral-200 duration-200 group-hover:translate-x-1 group-hover:text-brandYellow" />
                  <p className="text-transparent duration-200 group-hover:text-brandYellow">
                    Read more
                  </p>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      </ContentContainer>
    </PageLayout>
  );
}
