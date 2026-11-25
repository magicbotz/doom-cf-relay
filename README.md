# Doom Cloudflare Relay

Lightweight public Cloudflare Worker HTTP/HTTPS relay to bypass cloud/datacenter IP blocks (`HTTP 403`) on Koyeb.

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/magicbotz/doom-cf-relay)

## Usage

After deploying, test the Worker URL in browser — it returns `OK` (`200`).

Then set it in your bot:

```
/setproxy https://your-worker.workers.dev/?url=
```
