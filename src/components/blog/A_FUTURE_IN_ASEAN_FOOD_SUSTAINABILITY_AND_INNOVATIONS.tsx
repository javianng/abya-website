import { MessageSquareWarning } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import { Separator } from "../ui/separator";

export default function blog() {
  return (
    <div className="flex flex-col gap-5">
      <p>
        As part of the Asia-Ready Webinar Series, ABYA and the National Youth
        Council co-hosted the webinar,
        <i>
          <strong>A Future in ASEAN | Food Sustainability & Innovations</strong>
          ,
        </i>
        on 13 November 2021. More than 100 attendees tuned in to catch the
        perspectives shared by the Webinar&rsquo;s three esteemed panelists:
        <strong> Benedict Tan </strong>
        from HATCH Blue,
        <strong> Ramesh Krish Kumar </strong>
        from Asmara, and
        <strong> Yien Li Yap </strong>
        who is a food sustainability specialist and currently a graduate student
        at the National University of Singapore.
      </p>
      <p>
        The session kick-started with each sharing about their involvement in
        different areas of the food system such as aquaculture, research and
        development, and waste reduction. Benedict also delivered an overview of
        the global billion-dollar aquaculture sector, while Ramesh and Yien Li
        gave a snapshot of their prior experiences and motivations in the food
        industry.
      </p>
      <h2>
        <strong>Issues on the Food and Agricultural Industry in ASEAN</strong>
      </h2>
      <p>
        The panelists next discussed the state of the food and agricultural
        industry in ASEAN. They agreed on the importance of harnessing
        technology to improve the industry, noting that technology could boost
        the aquacultural sector and reduce food waste. However, utilizing
        technology had its challenges, such as convincing firms, that are
        apprehensive to share confidential information for fear of data
        breaches.
      </p>
      <p>
        Other related matters were also considered; For starters, the panelists
        acknowledged that the very theme of “sustainability” belied easy
        definition. Ramesh and Benedict also proposed that “sustainability”
        possesses a monetary dimension on top of the environmental aspect. That
        is, a product may not be sustainable if it is too expensive and
        inaccessible to consumers, regardless of the technological innovation
        behind it. Furthermore, the panelists expressed concerns about
        “greenwashing” &ndash; the practice of purportedly championing
        sustainability efforts without regard to their actual impact on society.
      </p>
      <h2>
        <strong>What makes up a sustainable ecosystem?</strong>
      </h2>
      <p>
        The discussion then shifted to consider a closely related question: what
        does it mean to have a sustainable ecosystem? Benedict suggested
        assessing sustainability from the ESG perspective &ndash; environmental,
        social (e.g., fair wages for workers) and governance. Yien Li noted that
        innovation and problem-solving was more important than merely using
        technology, citing examples of firms using “low-tech” solutions (e.g.,
        seaweed farming) that were nonetheless more sustainable. This, she
        believed, could provide an avenue for additional sustainable economic
        opportunities in ASEAN.
      </p>
      <h2>
        <strong>
          The Future for Youths in Sustainability and the Food Industry
        </strong>
      </h2>
      <p>
        Finally, the panelists delved into the youths&rsquo; career prospects in
        this industry, and how they could be more involved in one way or
        another. Citing her own career experience, Yien Li advised that our
        choice of careers could be guided by two key concerns &ndash; what we
        feel we are good at, and what interests us. She also hoped for youths to
        bring sustainability into their careers irrespective of the industry.
        Ramesh believed that any research-based innovation should aim at
        commercialization, noting that some research ideas lacked this aim
        despite substantial research grants. Benedict, echoing a point made
        earlier by Yien Li, further advised that any such innovation should
        answer a real business problem, rather than a perceived problem, and
        this would require clear communication with stakeholders.
      </p>
      <Separator />
      <Alert>
        <MessageSquareWarning className="h-4 w-4" />
        <AlertTitle>Missed this chance to attend this webinar?</AlertTitle>
        <AlertDescription>
          Watch out for upcoming fireside chats, webinars and masterclasses on
          ABYA&rsquo;s telegram or Instagram to gain interesting insights!
        </AlertDescription>
      </Alert>
    </div>
  );
}
