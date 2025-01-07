"use client"

import React, { CSSProperties } from "react"
import classNames from "classnames"
import { isCSSMeasure } from "@/app/Utils/Styles"

type IEBPaper = {
  /**
   * Child elements that will be rendered inside the component.
   */
  children: React.ReactNode
  /**
   * The title of the component, displayed at the top.
   */
  title?: string
  /**
   * Additional CSS classes to style the title.
   */
  titleClasses?: string
  /**
   * The subtitle of the component, displayed below the title.
   */
  subtitle?: string
  /**
   * Additional CSS classes to style the subtitle.
   */
  subtitleClasses?: string
  /**
   * Defines the width of the component. Can be a Tailwind value (`w-...`) or a valid CSS unit (px, %, etc.).
   */
  width?: string
  /**
   * Removes the rounded borders from the component.
   */
  straightBorder?: boolean
  /**
   * Removes the shadow effect from the component.
   */
  removeShadow?: boolean
  /**
   * Defines the elevation (shadow) level of the component, from 0 to 5.
   * Values outside this range will be clamped.
   */
  elevation?: number
  /**
   * Additional CSS classes to style the main container.
   */
  className?: string
  /**
   * Removes automatic padding from the component.
   */
  removeAutopadding?: boolean
  /**
   * Inline CSS styles for component customization.
   */
  styles?: CSSProperties
  /**
   * Additional CSS classes to style the content.
   */
  contentClasses?: string
  /**
   * A unique ID for the component.
   */
  id?: string
}

/**
 * EBPapper Component
 * A styled paper component that supports a title, subtitle, and customizable shadows.
 *
 * @param {React.ReactNode} children - The child elements to render inside the component.
 * @param {string} [title] - The title of the component, displayed at the top.
 * @param {string} [titleClasses] - Additional CSS classes to style the title.
 * @param {string} [subtitle] - The subtitle of the component, displayed below the title.
 * @param {string} [subtitleClasses] - Additional CSS classes to style the subtitle.
 * @param {string} [width] - The width of the component. Can be a Tailwind measure or a CSS unit.
 * @param {boolean} [straightBorder] - Removes rounded borders from the component.
 * @param {boolean} [removeShadow] - Removes the shadow from the component.
 * @param {number} [elevation=1] - The elevation level (shadow) of the component, between 0 and 5.
 * @param {string} [containerClasses] - Additional CSS classes for the main container.
 * @param {boolean} [removeAutopadding] - Removes automatic padding from the component.
 * @param {CSSProperties} [styles] - Inline CSS styles.
 * @param {string} [contentClasses] - Additional CSS classes for the content area.
 * @param {string} [id] - A unique ID for the component.
 *
 * @returns {JSX.Element} The JSX for the EBPapper component.
 */

const EBPapper = (props: IEBPaper) => {
  const {
    children,
    className,
    removeShadow,
    straightBorder,
    subtitle,
    subtitleClasses,
    title,
    titleClasses,
    width,
    elevation = 2,
    removeAutopadding,
    styles,
    contentClasses,
    id
  } = props

  const haveContentHeightClass = /h-/.test(contentClasses || "")
  const haveWidthClass = /w-/.test(className || "")
  const isNotUnderlined = /no-underline/.test(titleClasses || "")
  const haveBGClass = /bg-/.test(className || "")
  const havePaddingClass = /(p-|pb-|pt-)/.test(className || "")
  const haveJustifyClass = /justify-/.test(className || "")

  const elevationClasses = [
    "shadow-none",
    "shadow-sm",
    "shadow",
    "shadow-md",
    "shadow-lg",
    "shadow-xl",
    "shadow-2xl"
  ]
  const shadowClass = removeShadow
    ? "shadow-none"
    : elevationClasses[Math.min(elevation, 5)]

  return (
    <section
      className={classNames({
        "flex flex-col": true,
        [shadowClass]: true,
        "rounded-xl": !straightBorder,
        "justify-between": !haveJustifyClass,
        "bg-neutral": !haveBGClass,
        "px-2 pb-2 pt-2": !havePaddingClass && !removeAutopadding,
        "w-full": !width && !haveWidthClass,
        [`w-[${width}]`]: width && isCSSMeasure(width),
        [`w-${width}`]: width && !isCSSMeasure(width),
        [className || ""]: className
      })}
      style={styles}
      id={id}
    >
      {title && (
        <h2
          className={classNames({
            "card-title text-sm": true,
            underline: !isNotUnderlined,
            [titleClasses || ""]: titleClasses
          })}
        >
          {title}
        </h2>
      )}
      <div
        className={classNames({
          "text-xs": true,
          "h-full": !haveContentHeightClass,
          [contentClasses || ""]: contentClasses
        })}
      >
        {subtitle && typeof subtitle === "string" && (
          <p
            className={classNames({
              "min-h-6 self-baseline pb-2 font-medium opacity-40": true,
              [subtitleClasses || ""]: subtitleClasses
            })}
          >
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </section>
  )
}

export default EBPapper
