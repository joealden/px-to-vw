# px-to-vw

A tool that calculates the `vw` value from a `px` value for a given breakpoint
to make the measurement responsive.

When creating a responsive webpage, it can be a time consuming task to ensure
that text scales correctly. For example, say you want to have a heading with a
font size of `50px` at a breakpoint of `2000px` and you want the heading to
scale responsively when the viewport size is different (smaller or larger) than
the breakpoint defined.

To achieve this, we can calculate a measurement using the `vw` unit that scales
with the viewport instead of using an absolute unit like `px`. This `vw`
measurement needs to be equivalent to the `px` measurement at the breakpoint
specified. The following formula is used to calculate this value:
`(absoluteSize / breakpoint) * 100`.

In the example scenario above, substituting the values into the formula would
give the following result: `(50) / 2000) * 100 = 2.5`. This means that the value
`2.5vw` can be used in place of the `50px` value for the font-size of the
heading to make it scale with the viewport width.

This is a tool to calculate this value so you don't have to remember this
formula everytime you need to use it.
