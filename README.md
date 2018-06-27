# vw-breakpoint-calculator

A tool that calculates the `vw` value of an CSS rule for a given breakpoint.

When creating a responsive webpage, it can a time consuming task to ensure that
text scales correctly. For example, say you want to have a heading have a font
size of `30px` at a breakpoint of `2560px` and you want the heading to scale
responively when the viewport is bigger and smaller than the breakpoint defined.

To achieve this, we can calculate a relative measurement (`vw`) that scales with
the viewport instead of using an absolute measurement like `px`. This `vw`
measurement needs to be equivalent to 30px at the breakpoint specified. The
following formula is used to calculate this value:
`(elementSizeAtBreakpoint / breakpoint) x 100`.

In the example given above, putting the values into the formula would give the
following result: `(30 / 2560) \* 100 = 1.17`. This means that the value
`1.17vw` can be used in place of the `30px` value for the font-size of this
heading to make it scale with the viewport width.

Here is a tool to calculate this value so you don't have to remember this
formula everytime you need to use it (using pixels).
