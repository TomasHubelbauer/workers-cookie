# Cloudflare Workers Cookie

Using CloudFlare Workers with cookies.

## Worker

https://cookie.tomashubelbauer.workers.dev

```javascript
addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const url = new URL(request.url);
  if (url.search) {
    return new Response(undefined, {
      headers: {
        'Set-Cookie': url.search
      }
    });
  }

  const cookie = request.headers.get('Cookie');
  return new Response('hello world ' + cookie);
}
```

## Site

- [ ] Build a CRA site to demo this

## To-Do

### Finalize the demo
