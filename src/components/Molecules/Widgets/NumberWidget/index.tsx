/* eslint-disable react/display-name */
/* eslint-disable no-unused-vars */
import React from "react";
import * as S from "./style";
import { FiHash, FiPercent } from "react-icons/fi";
import { Circle } from "./Circle";

export enum NumberWidgetVariant {
    RAWNUMBER,
    PERCENT,
    FRACTION,
}

export type NumberWidgetProps = {
    denominator: number | string;
    variant?: NumberWidgetVariant;
    value: number | string;
    color?: string;
    subtitle?: string;
};

const NumberWidget = ({
    denominator,
    subtitle,
    value,
    variant,
}: NumberWidgetProps) => {
    let Icon;
    switch (variant) {
        case NumberWidgetVariant.FRACTION:
            Icon = () => <Circle numerator={value} denominator={denominator} />;
            break;
        case NumberWidgetVariant.PERCENT:
            Icon = () => <FiPercent />;
            break;
        case NumberWidgetVariant.RAWNUMBER:
        default:
            Icon = () => <FiHash />;
    }
    return (
        <S.Wrapper>
            <S.Content>
                <S.Value>{value}</S.Value>
                <S.Subtitle>{subtitle || "Actions taken"}</S.Subtitle>
            </S.Content>
            <S.Icon>
                <Icon />
            </S.Icon>
        </S.Wrapper>
    );
};

export default NumberWidget;
