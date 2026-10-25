"use client";

import { useState, type ReactNode } from "react";

// Shows the first `initial` items, then the rest after "Load More".
export default function LoadMore({ items, initial, className, done }: { items: ReactNode[]; initial: number; className: string; done?: string }) {
  const [all, setAll] = useState(false);
  const shown = all ? items : items.slice(0, initial);
  return (
    <>
      <div className={className}>{shown}</div>
      <div className="mt-10 flex justify-center">
        {!all && items.length > initial ? (
          <button
            onClick={() => setAll(true)}
            className="rounded-lg bg-ink px-[22px] py-2.5 font-medium text-white transition-colors hover:bg-black"
          >
            Load More
          </button>
        ) : (
          done && <p className="text-[15px] font-medium text-muted">{done}</p>
        )}
      </div>
    </>
  );
}
