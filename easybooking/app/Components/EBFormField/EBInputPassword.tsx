"use client"

import { InputHTMLAttributes, useState } from "react"
import { IEBFormFieldDefaults } from "./EBFormField"
import classNames from "classnames"
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid"

type IEBInput = IEBFormFieldDefaults &
  InputHTMLAttributes<HTMLInputElement> & {}

const EBInputPassword = (props: IEBInput) => {
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

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const hasFlexProperty = /flex-/.test(containerClassNames || "")
  const hasAlignProperty = /items-/.test(containerClassNames || "")
  const hasGapProperty = /gap-/.test(containerClassNames || "")
  const hasBorderProperty = /border/.test(className || "")
  const hasInputPaddingProperties = /(p-|px-|py-|pt-|pr-|pb-|pl-)/.test(
    className || ""
  )
  const hasErrorPositionProperties = /\b-?(top|bottom|left|right|inset)\b/.test(
    errorMessageClassNames || ""
  )

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
      <div className="relative flex flex-col items-center">
        <input
          {...rest}
          name={name}
          type={showPassword ? "text" : "password"}
          readOnly={readOnly}
          id={id}
          className={classNames({
            [className || ""]: className,
            border: !hasBorderProperty,
            "border-error": errorMessage,
            "rounded focus:outline-none focus:ring-0": true,
            "px-2 py-1 pr-[1.3rem]": !hasInputPaddingProperties
          })}
        />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute right-1 translate-y-1/3"
          >
            {showPassword ? (
              <EyeIcon width={16} />
            ) : (
              <EyeSlashIcon width={16} />
            )}
          </button>
        {errorMessage && (
          <small
            className={classNames({
              [errorMessageClassNames || ""]: errorMessageClassNames,
              "absolute text-error": true,
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

export default EBInputPassword
