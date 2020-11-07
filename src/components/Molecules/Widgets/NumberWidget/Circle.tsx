import React from "react";
import styled from "styled-components";

const ProgressCircle = styled.svg`
    transform: rotate(-90deg);
`;

export const Circle = ({
    numerator = 0,
    denominator = 1,
}: {
    numerator?: number | string;
    denominator?: number | string;
}) => {
    const value = (numerator as number) / (denominator as number);
    const r = 52;
    const circumference = Math.PI * (r * 2);
    const pct = circumference * (1 - value);

    return (
        <ProgressCircle width="120" height="120" viewBox="0 0 120 120">
            <circle
                cx="60"
                cy="60"
                r="52"
                fill="none"
                stroke="#ffffff"
                strokeWidth="5"
            />
            <circle
                cx="60"
                cy="60"
                r="52"
                fill="none"
                stroke="#ffffff"
                strokeWidth="16"
                strokeDasharray={circumference}
                strokeDashoffset={pct}
                strokeLinecap="round"
            />
        </ProgressCircle>
    );
};
