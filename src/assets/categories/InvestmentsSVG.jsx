import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"
const InvestmentsSVG = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={30}
        height={30}
        fill="none"
        {...props}
    >
        <Rect width={30} height={30} fill="#FBC984" rx={15} />
        <Path
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.333}
            d="M13 10.333V13M13.667 13h-1.334a.667.667 0 0 0-.666.667v2.666c0 .369.298.667.666.667h1.334a.667.667 0 0 0 .666-.667v-2.666a.667.667 0 0 0-.666-.667ZM13 17v1.333M18.333 9v1.333M19 10.333h-1.333A.667.667 0 0 0 17 11v4c0 .368.299.667.667.667H19a.667.667 0 0 0 .667-.667v-4a.667.667 0 0 0-.667-.667ZM18.333 15.667v2"
        />
        <Path
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.333}
            d="M9 9v10.667A1.333 1.333 0 0 0 10.333 21H21"
        />
    </Svg>
)
export default InvestmentsSVG
