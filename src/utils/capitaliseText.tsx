import React from "react"

export const capitaliseText = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}