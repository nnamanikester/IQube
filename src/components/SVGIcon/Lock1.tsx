import * as React from "react"
import Svg, {
  SvgProps,
  Path,
  Defs,
  Pattern,
  Use,
  Image,
} from "react-native-svg"

function Lock1(props: SvgProps) {
  return (
    <Svg
      width={142}
      height={180}
      viewBox="0 0 142 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <Path fill="url(#prefix__pattern0)" d="M0 0h142v180H0z" />
      <Defs>
        <Pattern
          id="prefix__pattern0"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <Use
            xlinkHref="#prefix__image0"
            transform="matrix(.0007 0 0 .00056 0 -.003)"
          />
        </Pattern>
        <Image
          id="prefix__image0"
          width={1414}
          height={1803}
        />
      </Defs>
    </Svg>
  )
}
export default Lock1;