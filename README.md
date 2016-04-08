# random-password-cli

Generate random password in cli.

## Install

```
$ npm install random-password-cli -g
```

## Usage

|Parameter| Description |
|----|----|
|`-l`|the length of password. |
|`-t`|the table used to generate password|

The corresponding values should not start with `-`.

**Example:**

```
$ random-password -l 12
lkkyT3wUqEW@
```

```
$  random-password -l 12 -t 'abc'
aaacbbcaacaa
```

## Related

[random-password](https://github.com/someus/random-password): Generate random password.


## License

MIT

