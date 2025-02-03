"use client"

import Image from "next/image"
import logo from "../../../public/eb_logo_extended.png"
import classNames from "classnames"

type IEBLogo = {
  /**
   * Defines the width of the logo image.
   * @default 100
   */
  width?: number

  /**
   * Defines the height of the logo image.
   * @default 100
   */
  height?: number

  /**
   * Determines whether the subtitle will be displayed below the logo.
   * @default false
   */
  displaySub?: boolean

  /**
   * Custom CSS class for styling the subtitle.
   * Overrides the default classes applied to the subtitle.
   */
  subtitleClassName?: string
}

/**
 * Component to display the Easy Booking logo with an optional subtitle.
 *
 * @param {Object} props - Component properties.
 * @param {number} [width=100] - Defines the width of the logo image.
 * @param {number} [height=100] - Defines the height of the logo image.
 * @param {boolean} [displaySub=false] - Determines whether the subtitle is displayed below the logo.
 * @param {string} [subtitleClassName] - Custom CSS class for the subtitle.
 * @returns {JSX.Element} A JSX element that displays the logo and optionally a subtitle.
 */
const EBLogo = (props: IEBLogo) => {
  const { height, width, displaySub, subtitleClassName } = props

  return (
    <div className="flex flex-col items-center">
      <Image
        alt="Easy Booking logo"
        width={width ?? 100}
        height={height ?? 100}
        src={logo}
      />
      {displaySub && (
        <p
          className={classNames({
            "pt-1 font-semibold uppercase text-logo-primary": true,
            [subtitleClassName || ""]: subtitleClassName
          })}
        >
          Agendamento simples e eficiente para pequenas empresas
        </p>
      )}
    </div>
  )
}

export default EBLogo
