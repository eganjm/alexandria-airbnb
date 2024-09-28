import React from 'react';
import { Worker, Viewer, SpecialZoomLevel } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import pdfjsVersion from 'pdfjs-dist/package.json';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

const PdfViewer = ({ pdfUrl }) => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin({
    sidebarTabs: (defaultTabs) => []
  });

  return (

  <div style={{ height: '750px' }}>
    <Worker workerUrl="pdf.worker.min.js">
      <Viewer 
      fileUrl={pdfUrl} 
      plugins={[defaultLayoutPluginInstance]}
      initialPage={0}
      defaultScale={SpecialZoomLevel.PageFit}
      />
    </Worker>
  </div>
  );
};

export default PdfViewer;