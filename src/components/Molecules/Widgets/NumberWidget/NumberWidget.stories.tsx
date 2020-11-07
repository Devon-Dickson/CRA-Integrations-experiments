import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import NumberWidget, { NumberWidgetProps, NumberWidgetVariant } from "./index";

export default {
    title: "Widgets/NumberWidget",
    component: NumberWidget,
    decorators: [
        (Story) => (
            <div style={{ display: "flex", flexWrap: "wrap" }}>
                <Story />
            </div>
        ),
    ],
} as Meta;

const Template: Story<NumberWidgetProps> = (args) => (
    <React.Fragment>
        <NumberWidget {...args} variant={NumberWidgetVariant.FRACTION} />
        <NumberWidget {...args} variant={NumberWidgetVariant.PERCENT} />
        <NumberWidget {...args} variant={NumberWidgetVariant.RAWNUMBER} />
    </React.Fragment>
);

export const ExampleOne = Template.bind({});
ExampleOne.args = {
    value: 100,
    denominator: 1000,
};
