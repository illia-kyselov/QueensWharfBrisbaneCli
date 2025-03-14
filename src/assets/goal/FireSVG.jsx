import * as React from "react"
import Svg, { Path } from "react-native-svg"
const FireSVG = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={126}
        height={96}
        fill="none"
        {...props}
    >
        <Path
            stroke="#FC5252"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={10}
            d="M53.125 90.625A15.625 15.625 0 0 0 68.75 75c0-8.625-3.125-12.5-6.25-18.75-6.7-13.394-1.4-25.337 12.5-37.5 3.125 15.625 12.5 30.625 25 40.625s18.75 21.875 18.75 34.375a43.76 43.76 0 0 1-12.814 30.936 43.762 43.762 0 0 1-47.678 9.484 43.764 43.764 0 0 1-23.678-23.678 43.747 43.747 0 0 1-3.33-16.742c0-7.206 2.706-14.338 6.25-18.75a15.625 15.625 0 0 0 15.625 15.625Z"
        />
    </Svg>
)
export default FireSVG
