import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"
const HousingSVG = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={30}
        height={30}
        fill="none"
        {...props}
    >
        <Rect width={30} height={30} fill="#EDFB84" rx={15} />
        <Path
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.333}
            d="M17 21v-5.333a.666.666 0 0 0-.667-.667h-2.666a.666.666 0 0 0-.667.667V21"
        />
        <Path
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.333}
            d="M9 13.667a1.333 1.333 0 0 1 .473-1.019l4.666-4a1.333 1.333 0 0 1 1.722 0l4.666 4A1.332 1.332 0 0 1 21 13.667v6A1.333 1.333 0 0 1 19.667 21h-9.334A1.333 1.333 0 0 1 9 19.667v-6Z"
        />
    </Svg>
)
export default HousingSVG
