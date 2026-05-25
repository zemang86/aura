"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type Row = { ix: string; blob: string; tag: string; key: number };

const CHARS =
  "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz0123456789+/=";
const TAGS = [
  "SWAP",
  "XFER",
  "VOTE",
  "BORROW",
  "REPAY",
  "MINT",
  "BURN",
  "BID",
  "ROUTE",
  "SIGN",
];

export function CipherStream({ rows: rowCount = 14 }: { rows?: number }) {
  const [rows, setRows] = useState<Row[]>([]);
  const counter = useRef(4831092);

  const makeRow = useCallback((): Row => {
    counter.current++;
    const len = 24 + ((Math.random() * 8) | 0);
    let s = "";
    for (let i = 0; i < len; i++) s += CHARS[(Math.random() * CHARS.length) | 0];
    const grouped = s.match(/.{1,4}/g)?.join(" ") ?? s;
    return {
      ix: String(counter.current).padStart(8, "0"),
      blob: grouped,
      tag: TAGS[(Math.random() * TAGS.length) | 0],
      key: counter.current,
    };
  }, []);

  useEffect(() => {
    setRows(Array.from({ length: rowCount }, makeRow));
    const id = setInterval(() => {
      setRows((prev) => [...prev.slice(1), makeRow()]);
    }, 1100);
    return () => clearInterval(id);
  }, [rowCount, makeRow]);

  return (
    <div className="cipher-stage" aria-hidden="true">
      {rows.map((r, i) => {
        const isLive = i === rowCount - 2;
        return (
          <div key={r.key} className={`row ${isLive ? "fresh live" : ""}`}>
            <span className="ix">{r.ix}</span>
            <span className="blob">{r.blob}</span>
            <span className="tag">{r.tag}</span>
          </div>
        );
      })}
    </div>
  );
}
