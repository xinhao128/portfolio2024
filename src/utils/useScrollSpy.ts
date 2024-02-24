import { useState, useEffect, useRef, RefObject } from "react";

/**
 *
 * @param record - a key value pair that keeps track of the intersection ratio of each section
 * @returns the id of the section that has the highest intersection ratio
 */
function findKeyWithLargestNumber(record: Record<string, number>): string {
  let largestKey = "";
  let largestValue = -Infinity;

  for (const key in record) {
    if (record.hasOwnProperty(key)) {
      const value = record[key];
      if (value > largestValue) {
        largestValue = value;
        largestKey = key;
      }
    }
  }

  return largestKey;
}

/**
 *
 * @param sectionRefs a list of HTMLElement refs
 * @param options intersection observer configs
 * @returns the current active section
 */
function useScrollSpy(
  sectionRefs: RefObject<HTMLElement | null>[],
  options: IntersectionObserverInit
): [string] {
  const [activeSection, setActiveSection] = useState<string>("");
  const intersectionRatioRef = useRef<Record<string, number>>({});

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        intersectionRatioRef.current = {
          ...intersectionRatioRef.current,
          [entry.target.id]: entry.intersectionRatio,
        };
      });

      const currentSection = findKeyWithLargestNumber(
        intersectionRatioRef.current
      );
      setActiveSection(currentSection);
    }, options);

    sectionRefs.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      if (sectionRefs && sectionRefs.length > 0) {
        sectionRefs.forEach((ref) => {
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        });
      }
    };
  }, [sectionRefs, options, activeSection]);
  return [activeSection];
}

export default useScrollSpy;
