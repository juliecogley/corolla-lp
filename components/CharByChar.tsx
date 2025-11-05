import React from "react";

type Props = {
text: string;
delayStepMs?: number; // 1文字ごとの遅延（任意）
className?: string;
};

export function CharByChar({ text, className }: Props) {
return (
<span aria-label={text} className={className}>
{[...text].map((ch, i) => (
<span
key={i}
className="inline-block animate-char"
style={{ ["--d" as any]: i }}
>
{ch === " " ? "\u00A0" : ch}
</span>
))}
</span>
);
}