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
    <div className="border-b border-gray-200 mb-8">
      <nav className="-mb-px flex space-x-8" aria-label="Tabs">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`
              whitespace-nowrap py-2 px-1 border-b-2 font-medium text-sm transition-colors duration-200
              ${
                activeTab === tab.id
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }
            `}
            aria-current={activeTab === tab.id ? 'page' : undefined}
          >
            {tab.label}
            {tab.count > 0 && (
              <span
                className={`
                ml-2 py-0.5 px-2 rounded-full text-xs font-medium
                ${
                  activeTab === tab.id
                    ? 'bg-blue-100 text-blue-600'
                    : 'bg-gray-100 text-gray-500'
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
