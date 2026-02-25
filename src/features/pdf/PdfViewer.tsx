import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import workerUrl from "pdfjs-dist/build/pdf.worker.min.js?url";

type PdfViewerProps = {
  fileUrl: string;
  highlight?: {
    page: number;
    top: number;
    height: number;
  };
};

export const PdfViewer = ({ highlight }: PdfViewerProps) => {
  const fileUrl = sessionStorage.getItem("uploadedPDF");

  const renderPageLayer = (props: any) => {
    if (!highlight || props.pageIndex !== highlight.page - 1) return null;

    return (
      <div
        style={{
          position: "absolute",
          top: highlight.top,
          left: 0,
          width: "100%",
          height: highlight.height,
          backgroundColor: "rgba(255,255,0,0.3)",
          pointerEvents: "none",
        }}
      />
    );
  };

  return (
    <div className="w-full h-full border rounded">
      <Worker workerUrl={workerUrl}>
        {fileUrl && <Viewer fileUrl={fileUrl} renderPageLayer={renderPageLayer} />}
        Nothing is uploaded yet. Please upload a PDF to view it here.
      </Worker>
    </div>
  );
};

export default PdfViewer;