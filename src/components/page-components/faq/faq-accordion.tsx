'use client';

import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

type FAQItem = {
  question: string;
  answer: string;
};

type FAQSectionProps = {
  title: string;
  items: FAQItem[];
};

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
}: FAQItem & { isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border-b border-clinical-border last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 py-5 text-left group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-medical-blue/40 focus-visible:ring-offset-1 rounded-sm"
        aria-expanded={isOpen}
      >
        <span className="text-[1rem] sm:text-[1.05rem] font-semibold text-medical-navy group-hover:text-medical-blue transition-colors duration-150">
          {question}
        </span>
        <FaChevronDown
          size={14}
          className={`flex-shrink-0 text-medical-blue transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      {/* Answer stays in the HTML source at all times; only its visibility is toggled. */}
      <div
        aria-hidden={!isOpen}
        className={`grid transition-all duration-200 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
      >
        <div className="overflow-hidden">
          <p className="pb-5 text-[0.975rem] sm:text-[1rem] text-muted-ink leading-relaxed">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export function FAQSection({ title, items }: FAQSectionProps) {
  const [openIndexes, setOpenIndexes] = useState<Set<number>>(new Set());
  const allOpen = openIndexes.size === items.length;

  const toggleAll = () => {
    if (allOpen) {
      setOpenIndexes(new Set());
    } else {
      setOpenIndexes(new Set(items.map((_, i) => i)));
    }
  };

  const toggle = (index: number) => {
    setOpenIndexes((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

  return (
    <div className="border border-clinical-border rounded-2xl overflow-hidden bg-white shadow-sm">
      {/* Section header */}
      <div className="flex items-center justify-between gap-4 px-6 py-5 border-b border-clinical-border bg-medical-sky/50">
        <h2 className="font-lora text-xl sm:text-2xl font-bold text-medical-navy tracking-[-0.02em]">
          {title}
        </h2>
        <button
          onClick={toggleAll}
          className="flex-shrink-0 text-xs font-semibold uppercase tracking-[0.14em] text-medical-blue hover:text-dark-blue transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-medical-blue/40 focus-visible:ring-offset-1 rounded-sm"
        >
          {allOpen ? 'Collapse All' : 'Expand All'}
        </button>
      </div>

      {/* Questions */}
      <div className="px-6">
        {items.map((item, i) => (
          <FAQItem
            key={i}
            question={item.question}
            answer={item.answer}
            isOpen={openIndexes.has(i)}
            onToggle={() => toggle(i)}
          />
        ))}
      </div>
    </div>
  );
}
