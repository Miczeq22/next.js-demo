import React from 'react';

export enum ScrollDirection {
  UP = 'up',
  DOWN = 'down',
}

interface UseStickyNavProps {
  initialDirection?: ScrollDirection;
  thresholdPixels?: number;
  stickyRef: React.RefObject<HTMLElement>;
}

export const useStickyNav = ({
  initialDirection = ScrollDirection.DOWN,
  thresholdPixels,
  stickyRef,
}: UseStickyNavProps) => {
  const [scrollDirection, setScrollDirection] = React.useState<ScrollDirection>(
    initialDirection
  );
  const [isSticky, setSticky] = React.useState(false);

  React.useEffect(() => {
    const threshold = thresholdPixels ?? 0;

    let lastScrollPositon = 0;
    let ticking = false;

    const updateScrollDirection = () => {
      if (Math.abs(window.pageYOffset - lastScrollPositon) < threshold) {
        ticking = false;
        return;
      }

      setScrollDirection(
        window.pageYOffset > lastScrollPositon
          ? ScrollDirection.DOWN
          : ScrollDirection.UP
      );

      setSticky(
        stickyRef.current &&
          window.pageYOffset > stickyRef.current.getBoundingClientRect().top
          ? true
          : false
      );

      lastScrollPositon = window.pageYOffset > 0 ? window.pageYOffset : 0;
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDirection);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [initialDirection, thresholdPixels, stickyRef]);

  return scrollDirection === ScrollDirection.UP && isSticky;
};
