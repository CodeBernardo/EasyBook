"use client"

import { useForm } from "react-hook-form"
import EBFormField from "./Components/EBFormField/EBFormField"
import EBPapper from "./Components/EBPaper/EBPaper"

export default function Home() {
  const { control } = useForm()
  return (
    <EBPapper>
      <EBFormField
        name="number"
        inputType="number"
        control={control}
        id="2"
        label="Number"
        containerClassNames=""
      />
      <EBFormField
        name="text"
        inputType="text"
        control={control}
        id="2"
        label="Text"
        containerClassNames=""
      />
      <EBFormField
        name="password"
        inputType="password"
        control={control}
        id="2"
        label="Password"
        containerClassNames=""
      />
    </EBPapper>
  )
}
