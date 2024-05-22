import React from 'react';
import { Viewer, Worker, Toolbar, PageNavigation } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
// Import styles
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

const PreviewPDF = ({ link }) => {
  const pdfLink = `https://youthatwork.s3.eu-north-1.amazonaws.com/${link}`;
  //const pdfLink = `sample.pdf`;

  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <div style={{ height: '100%' }}>
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
        <Viewer fileUrl={pdfLink} plugins={[defaultLayoutPluginInstance]} />
      </Worker>
    </div>
  );
};

export default PreviewPDF;
