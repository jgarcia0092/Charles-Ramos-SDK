# SDK Structure

## Summary

This SDK has the structure similar to [Sripe Javascript SDK](https://stripe.com/docs/js) and has the following folder structure.

```
|-src
    |- modules
        |- BaseModule.ts
        |- index.ts
        |- Movie.ts
        |- Quote.ts
    |- index.ts
```

The primary class(default export variable) in `src/index.ts` has member variables that are instances of class to approach each endpoint of The One API.

For example `movie` member variable(an instance of `src/modules/Movie.ts`) manage the API requests under the route `/movie`, while `quote`(an instance of `src/modules/Quote.ts`) manages endpoints under `/quote`.

## How to extend

If you need to extend the SDK to include other endpionts like `character` or `book`, you can create new classes in `src/modules` folder by extending `BaseModule` class.

For instance, add `Book.ts` file in `src/modules` and add an instance of `Book` class in the primary class. Then you will organize the requests under `/book` endpoint in `Book` module.