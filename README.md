# Cloudflare Workers Cookie

Using CloudFlare Workers with cookies.

The worker:

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

Using the cookie with CRA:

## To-Do

### Finalize the demo
