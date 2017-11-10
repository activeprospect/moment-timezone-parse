# Moment Timezone Parse

Parse the timezone component of a ISO8601 date string and return an approparite IANA timezone name.

[![Build Status](https://travis-ci.org/activeprospect/moment-timezone-parse.svg?branch=master)](https://travis-ci.org/activeprospect/moment-timezone-parse)

### Installation

```bash
npm install moment-timezone-parse --save
```

### Usage

```javascript
const parse      = require('moment-timezone-parse');
console.log(parse('2017-11-08T23:16:00-0200').format());
// =>
// Etc/GMT+2
```

### How it works

The timezone designator (i.e. `-0200`) is parsed from the string and a timezone name is derived from that string
(i.e. `Etc/GMT+2`).
