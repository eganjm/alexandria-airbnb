// FAQItem.js
import React, { useState } from 'react';
import VideoTabs from './VideoTabs';
import VideoTabs2 from './VideoTabs2';
import VideoTabs3 from './VideoTabs3';
import VideoTabs4 from './VideoTabs4';
import TabsDoor from './TabsDoor';
import TabsDoor2 from './TabsDoor2';
import PdfViewer from './PdfViewer';

// Component to display individual FAQ items, including nested sub-questions
const FAQItem = ({ faq }) => {
  const { question, answer, pdfUrl } = faq;
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleVisibility = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div style={{ marginBottom: '20px' }}>
        <h3 onClick={toggleVisibility} style={{ cursor: 'pointer' }}>
          {faq.question}
        </h3>
        {isExpanded && (
          <div>
            <div dangerouslySetInnerHTML={{ __html: faq.answer }} />
            {faq.id === 1.1 && <VideoTabs />} {}
            {faq.id === 1.2 && <VideoTabs2 />} {}
            {faq.id === 1.3 && <VideoTabs3 />} {}
            {faq.id === 1.4 && <VideoTabs4 />} {}
            {faq.id === 11.1 && <TabsDoor />} {}
            {faq.id === 11.2 && <TabsDoor2 />} {}
            
            {faq.imageUrl && <img src={faq.imageUrl} alt={faq.question} style={{ maxWidth: '100%', marginTop: '10px' }} />}
            
            {pdfUrl && (
              <div style={{ marginTop: '10px' }}>
                <PdfViewer pdfUrl={pdfUrl} />
              </div>
            )}

            {faq.videoUrl && (
              <video controls style={{ maxWidth: '100%', marginTop: '10px' }}>
                <source src={faq.videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
            
            {faq.subQuestions && faq.subQuestions.length > 0 && (
              <div style={{ marginLeft: '20px' }}>
                {faq.subQuestions.map((subFaq) => (
                  <FAQItem key={subFaq.id} faq={subFaq} />
                ))}
              </div>
            )}
          </div>
        )}
    </div>
  );
};

export default FAQItem;