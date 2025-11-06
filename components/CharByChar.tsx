import React from "react";

type Props = {
text: string;
delayStepMs?: number; // 1文字ごとの遅延（任意）
className?: string;
};

export function CharByChar({ text, delayStepMs = 60, className }: Props) {
return (
<span aria-label={text} className={className}>
{[...text].map((ch, i) => {
// style の型を正しく付ける（--d を許可）
const style: React.CSSProperties & { ["--d"]?: string } = {
["--d"]: `${i * delayStepMs}ms`,
};

return (
<span key={i} className="inline-block animate-char" style={style}>
{ch === " " ? "\u00A0" : ch}
</span>
);
})}
</span>
);
}