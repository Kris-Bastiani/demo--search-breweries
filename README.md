# Demo: Search historical events

Created by Kris Bastiani.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Limitations & areas for improvement

I haven't implemented any testing, nor proper linting standards beyond what came from `vue-cli`. Usually I would give these much higher priority, however given the limited time frame I've prioritised as I would for a rapid prototype- i.e, just focus on getting something done that works.

While it doesn't prevent subsequent requests, stale requests are not being aborted curtrently. This would probably be my highest priority to address with more time, and I would likely do so through the use of JavaScript's [AbortController](https://developer.mozilla.org/en-US/docs/Web/API/AbortController). This should eliminate the need to queue requests to prevent them completing out of order.

The other improvement I'd ideally make given more time would be to throttle requests so that they're not firing on every keystroke- obviouosly throttling is what's sensible here and not debouncing as we'd need to make sure the final keystroke always fires.
