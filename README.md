# bumper

Figures out what the current version of your git project is, bumps it, and tags the current commit with the new version.

**It very intentionally does not commit the version number into `package.json` or `bower.json` or any other file.**  Can be used with  on its own as bower does not require you to commit the version number into `bower.json`.

To use with npm you might like to use [npm-prepublish](https://github.com/matthew-andrews/npm-prepublish) which eliminates the need for commiting the version number into modules' `package.json` files.

## Installation

```
npm install -g bmpr
```

## Usage

To bump the major version number:-

```
bmpr major
```

You can also bump the `minor`, `patch` and a number of other types.  See `bmpr --help` for more details.

### Options

- `--verbose, -v` will give more information as to how **bumper** is working.
- `--dry-run` will skip the tagging step.
- `--message, -m` optional message which gets added to the tag.

## Credits and collaboration ##

The lead developer of **bumper** is [Matt Andrews](http://twitter.com/andrewsmatt) at FT Labs. All open source code released by FT Labs is licenced under the MIT licence. We welcome comments, feedback and suggestions.  Please feel free to raise an issue or pull request.
