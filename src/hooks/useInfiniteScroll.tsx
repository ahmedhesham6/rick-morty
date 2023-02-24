import { useCallback, useEffect, useRef } from "react";

export function useInfiniteScroll<IFetchNextPageResponse>(
  fetchNextPage: () => Promise<IFetchNextPageResponse>,
  hasNextPage?: boolean
) {
  const observerElem = useRef<HTMLDivElement | null>(null);

  const handleObserver = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const [target] = entries;
      console.log("target", target);
      if (target?.isIntersecting) {
        void fetchNextPage();
      }
    },
    [fetchNextPage]
  );

  useEffect(() => {
    const element = observerElem.current;
    const option = { threshold: 0 };

    const observer = new IntersectionObserver(handleObserver, option);
    console.log("element", { element }, { observerElem });
    if (element && hasNextPage) observer.observe(element);
    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [fetchNextPage, hasNextPage, handleObserver]);

  return observerElem;
}
