import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"
const EntertainmentSVG = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={30}
        height={30}
        fill="none"
        {...props}
    >
        <Rect width={30} height={30} fill="#FB9E84" rx={15} />
        <Path
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.333}
            d="M20.467 11 9 14.333l-.6-1.6c-.2-.733.2-1.466.867-1.666l9-2.667c.733-.2 1.466.2 1.666.867L20.467 11ZM11.133 10.533l2.067 2.6M15.267 9.267l2.066 2.666M9 14.333h12v5.334A1.334 1.334 0 0 1 19.667 21h-9.334A1.334 1.334 0 0 1 9 19.667v-5.334Z"
        />
    </Svg>
)
export default EntertainmentSVG
