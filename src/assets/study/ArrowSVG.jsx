import * as React from "react"
import Svg, { Path } from "react-native-svg"
const ArrowSVG = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={20}
        height={20}
        fill="none"
        {...props}
    >
        <Path
            fill="#fff"
            fillRule="evenodd"
            d="M6.875 3.125h9.375a.625.625 0 0 1 .625.625v9.375a.624.624 0 1 1-1.25 0V5.258L4.192 16.692a.625.625 0 0 1-.884-.884L14.742 4.375H6.875a.625.625 0 0 1 0-1.25Z"
            clipRule="evenodd"
        />
    </Svg>
)
export default ArrowSVG
