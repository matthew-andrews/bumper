# bumper

Figures out what the current version of your git project is, bumps it, and tags the current commit with the new version.

## Installation

```
npm install -g bum
```

(All the good names were already taken)

## Usage

To bump the major version number:-

```
bum major
```

You can also bump the `minor`, `patch` and a number of other types.  See `bum --help` for more details.

### Options

- `--verbose, -v` will give more information as to how **bumper** is working.
- `--dry-run` will skip the tagging step.
- `--message` optional message which gets added to the tag.
