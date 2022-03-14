// this file required to be able use svg images as react components
// also do not forget adding  '"typeRoots": ["./src/@types", "./node_modules/@types"],' into tsconfig file
declare module '*.svg' {
  import React = require('react')
  export const ReactComponent: React.SFC<React.SVGProps<SVGSVGElement>>
  const src: string
  export default src
}
