/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { cloneElement, InputHTMLAttributes } from "react"
import {
  Control,
  Controller,
  FieldValues,
  UseFormSetValue
} from "react-hook-form"
import EBInput from "./EBInput"
import EBInputPassword from "./EBInputPassword"

/**
 * Default field settings for a form.
 * Used to configure properties like labels, error messages, and input types.
 */
export type IEBFormFieldDefaults = {
  /**
   * The label for the field. It can be a string displayed next to the input field.
   * @example "Name"
   */
  label?: string;

  /**
   * Additional CSS classes for the label.
   * Can be used to style the label according to design requirements.
   * @example "text-gray-700 font-medium"
   */
  labelClassNames?: string;

  /**
   * Error message displayed when the field fails validation.
   * @example "This field is required."
   */
  errorMessage?: string;

  /**
   * Additional CSS classes for the error message.
   * Can be used to style the error message.
   * @example "text-red-500 text-sm"
   */
  errorMessageClassNames?: string;

  /**
   * Additional CSS classes for the field container.
   * Can be used to style the container of the input field.
   * @example "mb-4"
   */
  containerClassNames?: string;

  /**
   * The input type for the form field.
   * Can be one of the following HTML input types: text, number, password, date, radio, checkbox, time.
   */
  inputType:
  | "text"     // Text input
  | "number"   // Numeric input
  | "password" // Password input
  | "date"     // Date input
  | "radio"    // Radio button input
  | "checkbox" // Checkbox input
  | "time";    // Time input

  /**
   * Defines whether increment and decrement buttons should be displayed for numeric fields.
   * Only relevant when the input type is "number".
   * @default false
   */
  displayNumberInputButtons?: boolean;
}

type RenderInput = {
  text?: React.ReactElement
  number?: React.ReactElement
  password?: React.ReactElement
  date?: React.ReactElement
  radio?: React.ReactElement
  checkbox?: React.ReactElement
  time?: React.ReactElement
}

type IEBFormField<TFormType extends FieldValues> = IEBFormFieldDefaults & {
  name: string
  control: Control<TFormType>
  setValue?: UseFormSetValue<TFormType>
  maxLength?: number
} & InputHTMLAttributes<HTMLInputElement>

/**
 * @param label - The label of the form field. This is displayed next to the input field and provides context for what the user should enter.
 * @type {string | undefined}
 * @example "Name"
 *
 * @param labelClassNames - Additional CSS class names to style the label. Allows customization of the label's appearance.
 * @type {string | undefined}
 * @example "text-gray-700 font-medium"
 *
 * @param errorMessage - The error message displayed when the field fails validation. It provides feedback to the user.
 * @type {string | undefined}
 * @example "This field is required."
 *
 * @param errorMessageClassNames - Additional CSS class names for styling the error message. Used to modify the error message's look.
 * @type {string | undefined}
 * @example "text-red-500 text-sm"
 *
 * @param containerClassNames - Additional CSS class names for the field container. Used to style the container of the input field.
 * @type {string | undefined}
 * @example "mb-4"
 *
 * @param inputType - The input type of the form field. Specifies what kind of input field it is (e.g., text, number, password, etc.).
 * @type {"text" | "number" | "password" | "date" | "radio" | "checkbox" | "time"}
 * @example "text"
 *
 * @param displayNumberInputButtons - Determines whether increment and decrement buttons are shown for number fields.
 * Only relevant when the input type is "number". Helps provide a more user-friendly way of entering numeric values.
 * @type {boolean | undefined}
 * @default false
 * @example true
 */

const EBFormField = <T extends IEBFormField<any>>(props: T) => {
  const {
    control,
    inputType,
    name,
    label,
    labelClassNames,
    className,
    errorMessage,
    errorMessageClassNames,
    containerClassNames,
    readOnly,
    id,
    ...inputProps
  } = props

  const renderInput: RenderInput = {
    text: (
      <EBInput
        type="text"
        {...{
          defaultValue: "",
          label,
          labelClassNames,
          errorMessage,
          errorMessageClassNames,
          containerClassNames,
          name,
          className,
          readOnly,
          inputType,
          id,
          ...inputProps
        }}
      />
    ),
    number: (
      <EBInput
        type="number"
        {...{
          label,
          defaultValue: "",
          labelClassNames,
          errorMessage,
          errorMessageClassNames,
          containerClassNames,
          name,
          className,
          readOnly,
          inputType,
          id,
          ...inputProps
        }}
      />
    ),
    checkbox: (
      <EBInput
        type="checkbox"
        {...{
          label,
          labelClassNames,
          errorMessage,
          errorMessageClassNames,
          containerClassNames,
          inputType,
          name,
          className,
          readOnly,
          id,
          defaultValue: "",
          ...inputProps
        }}
      />
    ),
    password: (
      <EBInputPassword
        type="password"
        {...{
          defaultValue: "",
          label,
          labelClassNames,
          errorMessage,
          errorMessageClassNames,
          containerClassNames,
          inputType,
          name,
          className,
          readOnly,
          id,
          ...inputProps
        }}
      />
    ),
  }

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => {
        const inputElement = renderInput[inputType]
        if (!inputElement) {
          return <p>DEV_ERROR: You must provide a valid input type</p>
        }
        return cloneElement(inputElement, { ...field })
      }}
    />
  )
}

export default EBFormField
