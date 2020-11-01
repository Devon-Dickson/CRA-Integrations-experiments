import React, {
    DetailedHTMLProps,
    HTMLAttributes,
    ReactNode,
    useContext,
} from "react";

export const HeadingContext = React.createContext(1);

type SectionProps = {
    value?: number;
    children: ReactNode;
};

export const Section = (props: SectionProps) => {
    const headingContext = useContext(HeadingContext);
    const headingLevel = clampHeadingLevel(headingContext + 1);
    return (
        <HeadingContext.Provider value={headingLevel}>
            {props.children}
        </HeadingContext.Provider>
    );
};

export const Heading = (
    props: DetailedHTMLProps<
        HTMLAttributes<HTMLHeadingElement>,
        HTMLHeadingElement
    >
) => {
    const headingContext = useContext(HeadingContext);
    const headingLevel = clampHeadingLevel(headingContext);
    const Component = `h${headingLevel}`;
    return <Component {...props}>{props.children}</Component>;
};

/**
 * Clamps the headingLevel between 1 and 6 per the {@link https://html.spec.whatwg.org/multipage/sections.html#the-h1,-h2,-h3,-h4,-h5,-and-h6-elements | HTML5 spec}:
 *
 * @param headingLevel - The heading level
 * @returns The heading level clamped between 1 and 6
 */
export const clampHeadingLevel = (headingLevel: number): number => {
    if (headingLevel > 6) {
        throw Error("Heading too big!");
    } else if (headingLevel < 1) {
        return 1;
    } else {
        return headingLevel;
    }
};
