import * as React from "react"
import Svg, { Path } from "react-native-svg"
const GiftSVG = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={126}
        height={96}
        fill="none"
        {...props}
    >
        <Path
            stroke="#EAFA56"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={10}
            d="M125 50H25a6.25 6.25 0 0 0-6.25 6.25v12.5A6.25 6.25 0 0 0 25 75h100a6.25 6.25 0 0 0 6.25-6.25v-12.5A6.25 6.25 0 0 0 125 50ZM75 50v81.25"
        />
        <Path
            stroke="#EAFA56"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={10}
            d="M118.75 75v43.75a12.501 12.501 0 0 1-12.5 12.5h-62.5a12.5 12.5 0 0 1-12.5-12.5V75M46.875 50a15.625 15.625 0 1 1 0-31.25c6.03-.105 11.938 2.82 16.955 8.395C68.847 32.719 72.74 40.684 75 50c2.26-9.316 6.153-17.28 11.17-22.855 5.017-5.575 10.926-8.5 16.955-8.395a15.628 15.628 0 0 1 15.625 15.625A15.625 15.625 0 0 1 103.125 50"
        />
    </Svg>
)
export default GiftSVG
