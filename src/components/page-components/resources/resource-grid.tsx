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

  const { caseStudyCount, blogPostCount, visibleCount, isVisible } =
    useMemo(() => {
      const caseStudies = resources.filter(
        (resource) => resource.caseStudy === true
      );
      const blogPosts = resources.filter(
        (resource) => resource.caseStudy !== true
      );

      const isVisible = (resource: Resource) => {
        switch (activeTab) {
          case 'case-studies':
            return resource.caseStudy === true;
          case 'blog-posts':
            return resource.caseStudy !== true;
          default:
            return true;
        }
      };

      return {
        caseStudyCount: caseStudies.length,
        blogPostCount: blogPosts.length,
        visibleCount: resources.filter(isVisible).length,
        isVisible,
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
      {/* Every resource (including case studies) always renders in the HTML;
          only its visibility is toggled per the active tab. */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {resources.map((resource) => (
          <div
            key={resource._id}
            className={isVisible(resource) ? undefined : 'hidden'}
          >
            <ResourceCard resource={resource} />
          </div>
        ))}
      </div>
      {visibleCount === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-ink text-xl">
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
