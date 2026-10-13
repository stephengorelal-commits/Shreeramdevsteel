import { useEffect } from 'react';


export function useRevealAnimation(): void {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );

    const observeRevealElements = (root: ParentNode) => {
      if (root instanceof Element && root.matches('.reveal')) {
        observer.observe(root);
      }

      root.querySelectorAll('.reveal').forEach((element) => {
        observer.observe(element);
      });
    };

    // Observe elements that already exist.
    observeRevealElements(document);

    // Also observe gallery cards and other elements added dynamically.
    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node instanceof Element) {
            observeRevealElements(node);
          }
        });
      });
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      mutationObserver.disconnect();
      observer.disconnect();
    };
  }, []);
}

export function useSectionTracking(): void {
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id') || '';
            const name = entry.target.getAttribute('data-section-name') || id;
            import('./analytics').then(({ trackSectionView }) => {
              trackSectionView(id, name);
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);
}
