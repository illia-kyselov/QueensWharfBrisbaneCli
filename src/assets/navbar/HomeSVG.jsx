import * as React from "react";
import Svg, { Path } from "react-native-svg";

const HomeSVG = ({ color = "#ACACAC", ...props }) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={25}
        height={24}
        fill="none"
        {...props}
    >
        <Path
            fill={color}
            d="M11.97 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z"
        />
        <Path
            fill={color}
            d="m12.5 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15.5a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H6.125a1.875 1.875 0 0 1-1.875-1.875v-6.198c.031-.028.061-.056.091-.086L12.5 5.432Z"
        />
    </Svg>
);

export default HomeSVG;
