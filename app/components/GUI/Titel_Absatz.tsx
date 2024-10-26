import { I_Faq } from '@/app/lib/Interfaces/I_Faq';
import React, { useState } from 'react';

interface TitelAbsatzProps {
  content?: { titel: string; absatz: string }[];
  faqList?: I_Faq[];
  sectionIndex?: number;
}

const TitelAbsatz = ({ content, faqList, sectionIndex }: TitelAbsatzProps) => {
  const [openAbsatz, setOpenAbsatz] = useState<{
    [key: number]: number | null;
  }>({});

  const toggleAbsatz = (
    sectionIdx: number | undefined,
    questionIdx: number
  ) => {
    if (sectionIdx === undefined) return;
    setOpenAbsatz((prevOpenQuestions) => ({
      ...prevOpenQuestions,
      [sectionIdx]:
        prevOpenQuestions[sectionIdx] === questionIdx ? null : questionIdx,
    }));
  };

  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  return (
    <>
      {content?.map((el, questionIndex) => (
        <div key={`content-${questionIndex}`} className="px-4">
          <div
            className="transition-all duration-200 border border-gray-500 cursor-pointer hover:bg-gray-800"
            onClick={() => toggleAbsatz(sectionIndex, questionIndex)}>
            <button
              type="button"
              className="bg-gray-950 flex items-center justify-between w-full px-2 py-2 text-teal-400 hover:text-black hover:bg-teal-400">
              <span className="text-md font-semibold">
                {questionIndex + 1 + '- ' + el.titel}
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className={`w-6 h-6 text-indigo-700 transform transition-transform duration-200 ${
                  openAbsatz[sectionIndex || 0] === questionIndex
                    ? 'rotate-0'
                    : '-rotate-180'
                }`}>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {openAbsatz[sectionIndex || 0] === questionIndex && (
              <div className="px-4 py-4 sm:px-6 sm:pb-4 bg-gray-950 text-gray-300 text-left">
                <p>{el.absatz}</p>
              </div>
            )}
          </div>
        </div>
      ))}

      {faqList?.map((el, questionId) => (
        <div key={`faq-${questionId}`}>
          <div
            className="transition-all duration-200 border border-gray-500 cursor-pointer hover:bg-gray-800"
            onClick={() => toggleQuestion(questionId)}>
            <button
              type="button"
              className="bg-gray-950 flex items-center justify-between w-full px-2 py-2 text-teal-400 hover:text-black hover:bg-teal-400">
              <span className="text-lg font-semibold">{el.question}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className={`w-6 h-6 text-gray-400 transform transition-transform duration-200 ${
                  openQuestion === questionId ? 'rotate-0' : '-rotate-180'
                }`}>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {openQuestion === questionId && (
              <div className="px-4 py-4 sm:px-6 sm:pb-4 bg-gray-950 text-gray-300 text-left">
                <p>{el.reponse}</p>
              </div>
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default TitelAbsatz;
