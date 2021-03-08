import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

function Facebook(props: SvgProps) {
  return (
    <Svg
      width={30}
      height={30}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 0a5 5 0 00-5 5v20a5 5 0 005 5h20a5 5 0 005-5V5a5 5 0 00-5-5H5zm15.698 18.382V30h-4.675V18.383h-3.91v-4.527h3.91v-3.34c0-3.874 2.367-5.984 5.823-5.984 1.656 0 3.079.124 3.494.179v4.049l-2.398.001c-1.88 0-2.244.893-2.244 2.204v2.89h4.484l-.584 4.528h-3.9z"
        fill="#2672D8"
      />
    </Svg>
  )
}

export default Facebook;
