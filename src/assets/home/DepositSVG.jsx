import * as React from "react"
import Svg, { Path } from "react-native-svg"
const DepositSVG = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={19}
        height={18}
        fill="none"
        {...props}
    >
        <Path
            fill="#000"
            fillRule="evenodd"
            d="M9.5 1.688a7.312 7.312 0 1 0 0 14.624 7.312 7.312 0 0 0 0-14.625Zm.563 5.062a.563.563 0 0 0-1.126 0v1.688H7.25a.563.563 0 1 0 0 1.124h1.688v1.688a.562.562 0 1 0 1.124 0V9.562h1.688a.562.562 0 1 0 0-1.124h-1.688V6.75Z"
            clipRule="evenodd"
        />
    </Svg>
)
export default DepositSVG
