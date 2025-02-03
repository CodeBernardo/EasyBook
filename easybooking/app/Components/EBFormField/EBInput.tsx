"use client"

import { InputHTMLAttributes } from "react"
import { IEBFormFieldDefaults } from "./EBFormField"
import classNames from "classnames"

type IEBInput = IEBFormFieldDefaults &
  InputHTMLAttributes<HTMLInputElement> & {}

const EBInput = (props: IEBInput) => {
  const {
    readOnly,
    name,
    id,
    containerClassNames,
    label,
    labelClassNames,
    errorMessage,
    errorMessageClassNames,
    className,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    inputType,
    ...rest
  } = props

  const hasFlexProperty = /flex-/.test(containerClassNames || "")
  const hasAlignProperty = /items-/.test(containerClassNames || "")
  const hasGapProperty = /gap-/.test(containerClassNames || "")
  const hasBorderProperty = /border/.test(className || "")
  const hasInputPaddingProperties = /(p-|px-|py-|pt-|pr-|pb-|pl-)/.test(
    className || ""
  )
  const hasErrorPositionProperties = /\b-?(top|bottom|left|right|inset)\b/.test(errorMessageClassNames || "")

  return (
    <div
      className={classNames({
        [containerClassNames || ""]: containerClassNames,
        "flex w-fit": true,
        "flex-col": !hasFlexProperty,
        "items-start": !hasFlexProperty && !hasAlignProperty,
        "gap-1": !hasGapProperty
      })}
    >
      <label htmlFor={id} className={labelClassNames}>
        {label}
      </label>
      <div className="flex flex-col items-center relative">
        <input
          {...rest}
          name={name}
          readOnly={readOnly}
          id={id}
          className={classNames({
            [className || ""]: className,
            border: !hasBorderProperty,
            "border-error": errorMessage,
            "rounded focus:outline-none focus:ring-0": true,
            "px-2 py-1": !hasInputPaddingProperties
          })}
        />
        {errorMessage && (
          <small
            className={classNames({
              [errorMessageClassNames || ""]: errorMessageClassNames,
              "text-error absolute": true,
              "-bottom-[14px]": !hasErrorPositionProperties
            })}
          >
            {errorMessage}
          </small>
        )}
      </div>
    </div>
  )
}

export default EBInput
