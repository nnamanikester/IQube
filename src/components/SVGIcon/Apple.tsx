import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

function Apple(props: SvgProps) {
  return (
    <Svg
      width={27}
      height={31}
      viewBox="0 0 27 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M25.815 10.566C24.27 8.639 22.1 7.524 20.051 7.524c-2.71 0-3.855 1.287-5.735 1.287-1.937 0-3.41-1.285-5.754-1.285-2.302 0-4.75 1.398-6.302 3.788-2.183 3.36-1.814 9.684 1.727 15.072 1.266 1.927 2.958 4.094 5.169 4.114 1.965.018 2.521-1.253 5.188-1.268 2.667-.015 3.171 1.282 5.136 1.264 2.212-.021 3.996-2.42 5.262-4.347.907-1.38 1.245-2.078 1.95-3.639-5.12-1.934-5.943-9.167-.877-11.944z"
        fill="#000"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.995 5.37c.985-1.263 1.732-3.047 1.461-4.87-1.608.111-3.489 1.134-4.587 2.467-.997 1.211-1.82 3.006-1.5 4.75 1.756.055 3.572-.994 4.626-2.347z"
        fill="#000"
      />
    </Svg>
  )
}

export default Apple;
