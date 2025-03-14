import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"
const FinanceSVG = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={30}
        height={30}
        fill="none"
        {...props}
    >
        <Rect width={30} height={30} fill="#84B8FB" rx={15} />
        <Path
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.333}
            d="M19.667 11.667v-2A.667.667 0 0 0 19 9h-8.667a1.333 1.333 0 0 0 0 2.667h10a.667.667 0 0 1 .667.666V15m0 0h-2a1.333 1.333 0 0 0 0 2.667h2a.667.667 0 0 0 .667-.667v-1.333A.667.667 0 0 0 21 15Z"
        />
        <Path
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.333}
            d="M9 10.333v9.334A1.333 1.333 0 0 0 10.333 21h10a.667.667 0 0 0 .667-.667v-2.666"
        />
    </Svg>
)
export default FinanceSVG
