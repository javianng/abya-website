import Image from "next/image";
import { MessageSquareWarning } from "lucide-react";
import { Alert, AlertTitle, AlertDescription } from "../ui/alert";
import img1 from "/public/Blog/AN_AGILE_GUIDE_TO_PROJECT_MANAGEMENT_1.png";
import img2 from "/public/Blog/AN_AGILE_GUIDE_TO_PROJECT_MANAGEMENT_2.png";
import { Separator } from "../ui/separator";

export default function blog() {
  return (
    <div className="flex flex-col gap-5">
      <p>
        “It&rsquo;s not the motivation level of your teammates that influences
        the project management framework, it&rsquo;s the project that decides
        the framework you use,” said Felix Goh, Google&rsquo;s Singapore
        Strategic Lead for education, research and EdTech. Mr Goh also works
        closely with educational institutions and government agencies to equip
        the current and future workforce with industry-relevant skillsets. On 28
        August 2021, Mr Goh conducted a masterclass on project management at
        ABYA&rsquo;s invitation, bringing his 15 years of experience in the
        education and technology industry to the participants. In this
        masterclass, he covered the following elements of project management:
      </p>
      <h2 className="blogheading1">
        <strong>First, what is the project management framework?</strong>
      </h2>
      <p>
        Mr Goh shared that the project management framework is a set of
        standardized processes with goals and milestones at each stage of the
        project timeline. The 5 phases of the project management framework are
        as follows:
      </p>
      <Image src={img1} alt="" />
      <h2 className="blogheading1">
        <strong>
          What&rsquo;s the difference between a project life cycle and a project
          control cycle then?
        </strong>
      </h2>
      <p>
        A project life cycle is a sequence of project phases that has a roadmap
        with milestones to accomplish at each stage. On the other hand, a
        project control cycle describes how a task or components within the
        project is being managed. It involves active monitoring such as managing
        and mitigating risks, tracking progress across teams and team members
        and communicating project status with external stakeholders.
      </p>
      <h2 className="blogheading1">
        <strong>
          So, what are the different project management frameworks?
        </strong>
      </h2>
      <p>
        “AGILE is one of the project management methodologies that rely on short
        delivery cycles and is often employed for projects where speed and
        flexibility are prioritized,” emphasized Mr Goh. At the core of AGILE is
        the requirement to improve solutions through collaboration among
        self-organising and cross-functional teams. Below are the 4 key values
        and 12 principles of AGILE that create a people-centric approach to
        project management. 4 key values of AGILE:
      </p>
      <ul className="list-disc pl-4">
        <li>Individuals and interactions over processes and tools</li>
        <li>Working software over comprehensive documentation</li>
        <li>Customer collaboration over contract negotiation</li>
        <li>Responding to change over following a plan</li>
      </ul>
      <Image src={img2} alt="" />
      <p>
        Mr Goh also highlighted the importance of maintaining controlled methods
        of communication and establishing a central repository to store and
        access notes, documents and comments to ensure that everyone can track
        amendments.
      </p>
      <p>
        Other than AGILE, Mr Goh also introduced 4 other project management
        frameworks:
      </p>
      <ul className="list-disc pl-4">
        <li>
          <strong>The Waterfall method:</strong> Workflows sequentially between
          defined phases and workstations. Each stage can only begin after the
          completion of the previous stage. This method is helpful for projects
          that have longer delivery cycles.
        </li>
        <li>
          <strong>The PRINCE2 method:</strong> Involves a high degree of
          early-stage planning and is commonly employed for IT projects.
        </li>
        <li>
          <strong>SCRUM:</strong> Adaptation of the AGILE framework that uses
          cause and effect to classify situations driving a new project and to
          decide the most appropriate response.
        </li>
        <li>
          <strong>LEAN</strong>: Data-driven framework that relies on systematic
          measurement and analysis of quality to minimize defects in the
          project.
        </li>
      </ul>
      <h2 className="blogheading1">
        <strong>Conclusion</strong>
      </h2>
      <p>
        Mr Goh wrapped up the masterclass with a simulation activity, which
        allowed participants to apply the AGILE framework and a short
        question-and-answer segment.
      </p>
      <p>
        “Above all, remember not to let the age of your teammates restrict you
        when managing projects &ndash; leverage on their experience and allow
        them to guide you through what works and what doesn&rsquo;t,” he
        highlighted.
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
