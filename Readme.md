# Moment Timezone Parse

Parse an ISO8601 date string with timezone component into a [moment timezone](http://momentjs.com/timezone).

[![Build Status](https://travis-ci.org/activeprospect/moment-timezone-parse.svg?branch=master)](https://travis-ci.org/activeprospect/moment-timezone-parse)

### Installation

```bash
npm install moment-timezone-parse --save
```

### Usage

Parse an ISO8601 date string and parses it into a moment-timezone object. The moment-timezone library does not support
parsing a string including a timezone into a moment-timezone object. It only supports setting a timezone on a moment.

```javascript
const parse      = require('moment-timezone-parse');
console.log(parse('2017-11-08T23:16:00-0200').format());
// =>
// 2017-11-08T23:16:00-02:00
```

### How it works

The timezone designator (i.e. `-0200`) is parsed from the string and a timezone name is derived from that string
(i.e. `Etc/GMT+2`). Then the string is parsed by moment, which ignores the timezone component and creates a moment
in UTC. Then the moment-timezone `tz()` function is used to set the timezone on the moment.
