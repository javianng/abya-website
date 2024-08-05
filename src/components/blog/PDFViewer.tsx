import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import { useAuth } from "../common/AuthContext";

export interface PDFFile {
  name: string;
  url: string;
}

const PDFViewer = () => {
  const { user } = useAuth();
  const [currentPDF, setCurrentPDF] = useState<string>("");

  const pdfFilesSignedOut: PDFFile[] = [
    {
      name: "Annual Impact Report 2021",
      url: "/Report/LockedAnnualImpactReport2021.pdf",
    },
    {
      name: "Annual Impact Report 2022",
      url: "/Report/LockedAnnualImpactReport2022.pdf",
    },
    {
      name: "Annual Impact Report 2023",
      url: "/Report/LockedAnnualImpactReport2023.pdf",
    },
  ];

  const pdfFilesSignedIn: PDFFile[] = [
    {
      name: "Annual Impact Report 2021",
      url: "/Report/AnnualImpactReport2021.pdf",
    },
    {
      name: "Annual Impact Report 2022",
      url: "/Report/AnnualImpactReport2022.pdf",
    },
    {
      name: "Annual Impact Report 2023",
      url: "/Report/AnnualImpactReport2023.pdf",
    },
  ];

  const pdfFiles: PDFFile[] = user ? pdfFilesSignedIn : pdfFilesSignedOut;

  useEffect(() => {
    if (!currentPDF && pdfFiles.length > 0 && pdfFiles[0]) {
      setCurrentPDF(pdfFiles[0].url);
    }
  }, [pdfFiles, currentPDF]);

  useEffect(() => {
    console.log(`Current PDF updated to: ${currentPDF}`);
  }, [currentPDF]);

  return (
    <div className="flex flex-col sm:flex-row">
      <div className="container mx-auto p-4">
        <div className="flex justify-center">
          <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
            <iframe
              src={currentPDF}
              className="absolute left-0 top-0 h-full w-full rounded border"
              onLoad={() => console.log(`Iframe loaded with: ${currentPDF}`)}
            />
          </div>
        </div>
      </div>
      <div className="flex w-fit flex-wrap justify-center gap-2 pb-4 sm:flex-col sm:pb-0">
        {pdfFiles.map((pdf) => (
          <Button
            key={pdf.url}
            variant="blue_outline"
            onClick={() => {
              if (currentPDF !== pdf.url) {
                console.log(`Changing PDF to: ${pdf.url}`);
                setCurrentPDF(pdf.url);
              }
            }}
          >
            {pdf.name}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default PDFViewer;
