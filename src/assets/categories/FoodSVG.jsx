import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"
const FoodSVG = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={30}
        height={30}
        fill="none"
        {...props}
    >
        <Rect width={30} height={30} fill="#96FB84" rx={15} />
        <Path
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.333}
            d="M9 8.333V13c0 .733.6 1.333 1.333 1.333H13A1.333 1.333 0 0 0 14.333 13V8.333M11.667 8.333v13.334M21 17V8.333a3.333 3.333 0 0 0-3.333 3.334v4c0 .733.6 1.333 1.333 1.333h2Zm0 0v4.667"
        />
    </Svg>
)
export default FoodSVG
