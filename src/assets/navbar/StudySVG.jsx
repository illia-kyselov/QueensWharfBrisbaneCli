import * as React from "react";
import Svg, { Path } from "react-native-svg";

const StudySVG = ({ color = "#ACACAC", ...props }) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        {...props}
    >
        <Path
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="m16 6 4 14M12 6v14M8 8v12M4 4v16"
        />
    </Svg>
);

export default StudySVG;
