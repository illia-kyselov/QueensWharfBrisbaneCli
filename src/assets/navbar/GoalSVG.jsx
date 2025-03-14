import * as React from "react";
import Svg, { Path } from "react-native-svg";

const GoalSVG = ({ color = "#ACACAC", ...props }) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={25}
        height={24}
        fill="none"
        {...props}
    >
        <Path
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12.5 22c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10Z"
        />
        <Path
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12.5 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z"
        />
        <Path
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12.5 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
        />
    </Svg>
);

export default GoalSVG;
