import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
import 'react-pdf/dist/Page/TextLayer.css';

const BASE_URL= 'https://youthatwork.s3.eu-north-1.amazonaws.com/'

export default function PreviewPDF({ link }) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(0);

  console.log(link);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const pageStyles = {
    display: 'block',
    margin: '0 auto',
    marginBottom: '10px' // Adjust this value to reduce the space between pages
  };

  return (
    <Document file={`${BASE_URL}${link}`} onLoadSuccess={onDocumentLoadSuccess}>
      {Array.from(
        new Array(numPages),
        (el, index) => (
          <Page
            key={`page_${index + 1}`}
            pageNumber={index + 1}
            style={pageStyles}
          />
        ),
      )}
    </Document>
  );
}
