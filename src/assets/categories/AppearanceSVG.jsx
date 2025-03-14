import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"
const AppearanceSVG = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={30}
        height={30}
        fill="none"
        {...props}
    >
        <Rect width={30} height={30} fill="#FB8484" rx={15} />
        <Path
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.667}
            d="M15 10a.833.833 0 1 0 0-1.667A.833.833 0 0 0 15 10ZM12.5 21.667l2.5-5 2.5 5M10 11.667l5 1.666 5-1.666M15 13.333v3.334"
        />
    </Svg>
)
export default AppearanceSVG
