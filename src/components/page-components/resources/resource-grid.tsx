'use client';

import { useState, useMemo } from 'react';
import ResourceCard from './resource-card';
import ResourceTabs from './resource-tabs';
import type { Resource } from '@/types/resource';

interface ResourceGridProps {
  resources: Resource[];
}

export default function ResourceGrid({ resources }: ResourceGridProps) {
  const [activeTab, setActiveTab] = useState<
    'all' | 'case-studies' | 'blog-posts'
  >('blog-posts');

  const { filteredResources, caseStudyCount, blogPostCount } = useMemo(() => {
    const caseStudies = resources.filter(
      (resource) => resource.caseStudy === true
    );
    const blogPosts = resources.filter(
      (resource) => resource.caseStudy !== true
    );

    let filtered: Resource[];
    switch (activeTab) {
      case 'case-studies':
        filtered = caseStudies;
        break;
      case 'blog-posts':
        filtered = blogPosts;
        break;
      default:
        filtered = resources;
    }

    return {
      filteredResources: filtered,
      caseStudyCount: caseStudies.length,
      blogPostCount: blogPosts.length,
    };
  }, [resources, activeTab]);

  return (
    <>
      <ResourceTabs
        activeTab={activeTab}
        onTabChange={setActiveTab}
        caseStudyCount={caseStudyCount}
        blogPostCount={blogPostCount}
        totalCount={resources.length}
      />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredResources.map((resource) => (
          <ResourceCard key={resource._id} resource={resource} />
        ))}
      </div>
      {filteredResources.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-ink text-lg">
            No{' '}
            {activeTab === 'case-studies'
              ? 'case studies'
              : activeTab === 'blog-posts'
                ? 'blog posts'
                : 'resources'}{' '}
            found.
          </p>
        </div>
      )}
    </>
  );
}
