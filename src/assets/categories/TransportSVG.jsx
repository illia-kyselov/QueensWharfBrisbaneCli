import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"
const TransportSVG = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={30}
        height={30}
        fill="none"
        {...props}
    >
        <Rect width={30} height={30} fill="#FB84A8" rx={15} />
        <Path
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.333}
            d="m9.667 11-1.334.667M13.667 11h2.666M21.667 11.667 20.333 11M19 9h-8c-.736 0-1.333.597-1.333 1.333v8c0 .737.597 1.334 1.333 1.334h8c.736 0 1.333-.597 1.333-1.334v-8C20.333 9.597 19.736 9 19 9ZM9.667 14.333h10.666M12.333 17h.007M17.667 17h.006M11 19.667V21M19 21v-1.333"
        />
    </Svg>
)
export default TransportSVG
