'use client';

interface ResourceTabsProps {
  activeTab: 'all' | 'case-studies' | 'blog-posts';
  onTabChange: (tab: 'all' | 'case-studies' | 'blog-posts') => void;
  caseStudyCount: number;
  blogPostCount: number;
  totalCount: number;
}

export default function ResourceTabs({
  activeTab,
  onTabChange,
  caseStudyCount,
  blogPostCount,
  totalCount,
}: ResourceTabsProps) {
  const tabs = [
    { id: 'blog-posts' as const, label: 'Blog Posts', count: blogPostCount },
    {
      id: 'case-studies' as const,
      label: 'Case Studies',
      count: caseStudyCount,
    },
    { id: 'all' as const, label: 'All Resources', count: totalCount },
  ];

  return (
    <div className="border-b border-clinical-border mb-8">
      <nav className="-mb-px flex space-x-8" aria-label="Tabs">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`
              whitespace-nowrap py-3 px-1 border-b-2 font-medium text-[1.2rem] transition-colors duration-200
              ${
                activeTab === tab.id
                  ? 'border-medical-blue text-medical-blue'
                  : 'border-transparent text-muted-ink hover:text-ink hover:border-clinical-border'
              }
            `}
            aria-current={activeTab === tab.id ? 'page' : undefined}
          >
            {tab.label}
            {tab.count > 0 && (
              <span
                className={`
                ml-2 py-0.5 px-2 rounded-full text-[0.82rem] font-medium
                ${
                  activeTab === tab.id
                    ? 'bg-medical-sky text-medical-navy'
                    : 'bg-white border border-clinical-border text-muted-ink'
                }
              `}
              >
                {tab.count}
              </span>
            )}
          </button>
        ))}
      </nav>
    </div>
  );
}
