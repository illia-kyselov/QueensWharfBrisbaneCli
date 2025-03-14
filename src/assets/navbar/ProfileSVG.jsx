import * as React from "react";
import Svg, { Path } from "react-native-svg";

const ProfileSVG = ({ color = "#ACACAC", ...props }) => (
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
            d="M12.5 13a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z"
        />
        <Path
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20.5 21a8 8 0 0 0-16 0"
        />
    </Svg>
);

export default ProfileSVG;
