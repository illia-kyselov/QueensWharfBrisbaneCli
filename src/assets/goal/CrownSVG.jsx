import * as React from "react"
import Svg, { Path } from "react-native-svg"
const CrownSVG = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        {...props}
    >
        <Path
            stroke="#F8C63D"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294l2.952-5.605ZM5 21h14"
        />
    </Svg>
)
export default CrownSVG
