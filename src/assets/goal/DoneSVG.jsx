import * as React from "react"
import Svg, { Path } from "react-native-svg"
const DoneSVG = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={20}
        height={20}
        fill="none"
        {...props}
    >
        <Path
            fill="#000"
            fillRule="evenodd"
            d="M16.597 3.855a.625.625 0 0 1 .173.867l-7.5 11.25a.625.625 0 0 1-.962.095l-5-5a.625.625 0 0 1 .884-.884l4.46 4.461L15.73 4.027a.625.625 0 0 1 .867-.172Z"
            clipRule="evenodd"
        />
    </Svg>
)
export default DoneSVG
