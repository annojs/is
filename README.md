# annois - Generative type checkers for JavaScript

`annois` combines a simple type checking syntax popularized by [is.js](https://github.com/scottrabin/is-js) with possibility to generate elements belonging to a given type. This might not sound that useful `as is`. When combined with [annotate](https://github.com/bebraw/annotate) and various other tools this may be used for `generative testing`.

`generative testing` requires both internal and external invariants. This library focuses on that internal part that is dealt with at a function definition. The external invariants are defined separately and are beyond the scope of this library.

## License

`annois` is available under MIT. See LICENSE for more details.
