import { useEffect, useState } from "react";

// Returns true if nav should be solid (black), false if transparent
export function useNavSolidOnScroll(heroId?: string) {
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    function onScroll() {
      let threshold = 0;
      if (heroId) {
        const hero = document.getElementById(heroId);
        if (hero) {
          threshold = hero.offsetHeight - 80; // 80px nav height
        }
      } else {
        threshold = 400; // fallback
      }
      setSolid(window.scrollY > threshold);
    }
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [heroId]);

  return solid;
}
