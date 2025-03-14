import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"
const ShopingSVG = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={30}
        height={30}
        fill="none"
        {...props}
    >
        <Rect width={30} height={30} fill="#8684FB" rx={15} />
        <Path
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.333}
            d="M11 8.333 9 11v9.333a1.333 1.333 0 0 0 1.333 1.334h9.334A1.334 1.334 0 0 0 21 20.333V11l-2-2.667h-8ZM9 11h12"
        />
        <Path
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.333}
            d="M17.667 13.667a2.667 2.667 0 1 1-5.334 0"
        />
    </Svg>
)
export default ShopingSVG
