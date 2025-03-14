import * as React from "react"
import Svg, { Path } from "react-native-svg"
const ArrowRightSVG = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={18}
        height={18}
        fill="none"
        {...props}
    >
        <Path
            fill="#000"
            fillRule="evenodd"
            d="M12.21 8.602a.563.563 0 0 1 0 .795l-5.625 5.625a.563.563 0 0 1-.795-.795L11.018 9 5.79 3.772a.562.562 0 0 1 .795-.795l5.625 5.625Z"
            clipRule="evenodd"
        />
    </Svg>
)
export default ArrowRightSVG
