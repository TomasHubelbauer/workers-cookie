# Cloudflare Workers Cookie

Using CloudFlare Workers with cookies demonstrated by a CRA site which proxies
the calls to the setter and getter endpoints.

## Worker

https://cookie.tomashubelbauer.workers.dev

```javascript
addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const url = new URL(request.url);
  switch (url.pathname) {
    case '/set': {
      return new Response(undefined, {
        headers: {
          'Set-Cookie': `site=${url.search}; HttpOnly`
        }
      });
    }
    case '/get': {
      const cookie = request.headers.get('Cookie');
      return new Response('hello world ' + cookie);
    }
  }

  throw new Error(`Invalid route ${request.url}.`);
}
```

## Site

```sh
npm i --save-dev create-react-app
npx create-react-app site --template typescript
cd site
echo HTTP=true > .env
npm start
```

`package.json`
```json
{
  "proxy": "https://cookie.tomashubelbauer.workers.dev"
}
```

## To-Do
