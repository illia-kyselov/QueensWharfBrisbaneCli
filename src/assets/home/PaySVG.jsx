import * as React from "react"
import Svg, { Path } from "react-native-svg"
const PaySVG = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={19}
        height={18}
        fill="none"
        {...props}
    >
        <Path
            fill="#000"
            d="M8.348 6.56c.17-.135.373-.234.59-.296V8.36a1.689 1.689 0 0 1-.59-.294c-.295-.235-.41-.511-.41-.753 0-.243.115-.519.41-.753Zm1.714 5.186V9.63c.26.063.498.17.691.315.32.24.434.515.434.743 0 .23-.114.504-.434.744-.207.15-.441.258-.69.316Z"
        />
        <Path
            fill="#000"
            fillRule="evenodd"
            d="M9.5 1.688a7.312 7.312 0 1 0 0 14.624 7.312 7.312 0 0 0 0-14.625Zm.563 2.812a.563.563 0 0 0-1.126 0v.612c-.47.08-.913.274-1.29.567-.534.425-.833 1.012-.833 1.633 0 .622.3 1.21.834 1.634.377.3.827.485 1.29.567v2.233a1.9 1.9 0 0 1-.691-.315l-.66-.495a.562.562 0 1 0-.675.9l.66.495c.4.3.876.484 1.365.562v.607a.562.562 0 1 0 1.126 0v-.607a3.093 3.093 0 0 0 1.365-.562c.559-.42.884-1.008.884-1.643 0-.636-.325-1.225-.884-1.644a3.092 3.092 0 0 0-1.366-.562V6.266c.218.061.42.16.59.294l.311.248a.562.562 0 1 0 .7-.881l-.311-.248a2.877 2.877 0 0 0-1.29-.566V4.5Z"
            clipRule="evenodd"
        />
    </Svg>
)
export default PaySVG
