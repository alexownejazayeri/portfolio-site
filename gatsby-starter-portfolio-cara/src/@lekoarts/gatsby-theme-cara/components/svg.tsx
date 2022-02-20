/** @jsx jsx */
import * as React from "react"
import { jsx } from "theme-ui"
import { hidden } from "../../styles/utils"

const icons = {
  eyeball: {
    shape: (
      <React.Fragment>
        <svg>
          <path d="M39.0366 17.345C26.1871 20.619 19.8142 23.9599 10.2723 33.2245C7.77819 40.345 8.23517 44.5067 11.9111 52.189C11.9212 57.7031 12.8445 60.474 18.4497 64.0332C21.199 69.5187 23.9917 71.2254 30.0644 73.075C35.3721 75.8561 38.5604 76.6793 44.508 77.2436C52.3597 79.8497 56.6504 80.3096 64.0276 78.61C67.2796 79.0624 69.3943 79.1 79.4319 74.5213C86.1725 72.8514 89.1097 70.6933 92.4129 64.0435C96.4312 58.8413 97.0551 52.9633 97.5423 41.3426C98.0295 29.7219 99.6216 31.8682 97.3927 27.0752C88.5556 20.2189 82.0856 17.463 66.6374 15.3539C60.3278 14.118 55.2248 14.1305 39.0366 17.345Z" fill="url(#paint0_linear_8_210)" />
          <path d="M52.9452 18.352C62.1056 17.4494 66.2728 19.0023 72.641 24.0365C72.6727 32.6433 71.1137 37.1726 65.2646 44.6663C61.82 50.7994 62.7712 50.7024 57.7386 51.0288C52.7059 51.3552 49.579 51.2607 44.2291 48.5522C39.3204 45.4218 36.7811 43.4381 32.6144 39.5104C26.1563 34.1342 24.8034 30.7087 27.2127 23.7271C29.7742 21.6639 32.5757 20.9167 39.6119 20.1935C44.1555 18.7274 46.9374 18.169 52.9452 18.352Z" fill="#383838" stroke="white" />
          <path d="M36.4155 35.2324C32.0974 35.4085 29.5548 34.9745 25.9111 32.2007C25.2871 28.6879 25.8914 26.9931 28.1849 24.3223C31.925 22.1128 33.8875 21.8241 37.2001 22.657C40.9479 24.2737 43.1224 25.0638 45.2546 29.2489C45.2546 29.2489 40.7336 35.0562 36.4155 35.2324Z" fill="white" stroke="white" />
          <defs>
            <linearGradient id="paint0_linear_8_210" x1="62.3451" y1="12.845" x2="43.5765" y2="77.8757" gradientUnits="userSpaceOnUse">
              <stop offset="0.0885417" stop-color="#9BB4F4" stop-opacity="0.848437" />
              <stop offset="0.369792" stop-color="#EA66FF" stop-opacity="0.7" />
              <stop offset="0.854167" stop-color="#FFD18B" />
            </linearGradient>
          </defs>
        </svg>
      </React.Fragment>
    ),
    viewBox: `0 0 106 91`,
  },
  triangle: {
    shape: (
      <polygon
        strokeWidth="1px"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        points="14.921,2.27 28.667,25.5 1.175,25.5 "
      />
    ),
    viewBox: `0 0 30 30`,
  },
  circle: {
    shape: (
      <path d="M15,30A15,15,0,1,1,30,15,15,15,0,0,1,15,30ZM15,6.23A8.77,8.77,0,1,0,23.77,15,8.77,8.77,0,0,0,15,6.23Z" />
    ),
    viewBox: `0 0 30 30`,
  },
  arrowUp: {
    shape: (
      <React.Fragment>
        <path d="M28.74,20.81H1.26a1.26,1.26,0,0,1-1-2L14.16.5a1.25,1.25,0,0,1,1-.5h0a1.24,1.24,0,0,1,1,.51L29.75,18.8a1.25,1.25,0,0,1-1,2ZM3.81,18.29H26.22L15.16,3.37Z" />
        {` `}
        <path d="M28.74,42H1.26a1.28,1.28,0,0,1-1.13-.71A1.26,1.26,0,0,1,.26,40l13.9-18.29a1.28,1.28,0,0,1,1-.5h0a1.24,1.24,0,0,1,1,.51L29.75,40a1.26,1.26,0,0,1,.12,1.32A1.28,1.28,0,0,1,28.74,42ZM3.81,39.47H26.22L15.16,24.55Z" />
      </React.Fragment>
    ),
    viewBox: `0 0 30 42`,
  },
  upDown: {
    shape: (
      <React.Fragment>
        <path d="M28.74,44.58a1.28,1.28,0,0,1-1-.51L15.16,27.13l-12.89,17a1.26,1.26,0,1,1-2-1.53l13.9-18.29a1.34,1.34,0,0,1,1-.5,1.24,1.24,0,0,1,1,.51L29.75,42.56a1.27,1.27,0,0,1-1,2Z" />
        <path d="M14.83,20.82h0a1.28,1.28,0,0,1-1-.52L.25,2a1.27,1.27,0,0,1,2-1.51L14.84,17.45,27.73.5a1.26,1.26,0,0,1,2,1.53L15.84,20.32A1.28,1.28,0,0,1,14.83,20.82Z" />
      </React.Fragment>
    ),
    viewBox: `0 0 30 44.58`,
  },
  box: {
    shape: (
      <path d="M28,2V28H2V2H28m.13-2H1.88A1.88,1.88,0,0,0,0,1.88V28.13A1.88,1.88,0,0,0,1.88,30H28.13A1.87,1.87,0,0,0,30,28.13V1.88A1.88,1.88,0,0,0,28.13,0Z" />
    ),
    viewBox: `0 0 30 30`,
  },
  hexa: {
    shape: (
      <polygon
        strokeLinejoin="round"
        strokeMiterlimit="10"
        points="27.5,21.904 15,28.809  2.5,21.904 2.5,8.095 15,1.19 27.5,8.095 "
      />
    ),
    viewBox: `0 0 30 30`,
  },
  cross: {
    shape: (
      <path
        strokeWidth="3px"
        d="M60.5,50l34.8-34.8c2.9-2.9,2.9-7.6,0-10.5c-2.9-2.9-7.6-2.9-10.5,0L50,39.5L15.2,4.7c-2.9-2.9-7.6-2.9-10.5,0    c-2.9,2.9-2.9,7.6,0,10.5L39.5,50L4.7,84.8c-2.9,2.9-2.9,7.6,0,10.5c1.4,1.4,3.3,2.2,5.2,2.2s3.8-0.7,5.2-2.2L50,60.5l34.8,34.8    c1.4,1.4,3.3,2.2,5.2,2.2c1.9,0,3.8-0.7,5.2-2.2c2.9-2.9,2.9-7.6,0-10.5L60.5,50z"
      />
    ),
    viewBox: `0 0 100 100`,
  },
}

type IconType = "triangle" | "circle" | "arrowUp" | "upDown" | "box" | "hexa" | "cross" | "eyeball"

type SVGProps = {
  stroke?: boolean
  color?: string | number | any
  width: number
  icon: IconType
  left: string
  top: string
  hiddenMobile?: boolean
}

const Svg = ({ stroke = false, color = ``, width, icon, left, top, hiddenMobile = false }: SVGProps) => (
  <svg
    sx={{
      position: `absolute`,
      stroke: stroke ? `currentColor` : `none`,
      fill: stroke ? `none` : `currentColor`,
      display: hiddenMobile ? hidden : `block`,
      color,
      width,
      left,
      top,
    }}
    viewBox={icons[icon].viewBox}
  >
    {icons[icon].shape}
  </svg>
)

export default Svg
