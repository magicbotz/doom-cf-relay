export default {
  async fetch(request) {
    const url = new URL(request.url).searchParams.get("url");

    if (!url) {
      return new Response("OK", { status: 200 });
    }

    if (!/^https?:\/\//i.test(url)) {
      return new Response("Invalid URL scheme", { status: 400 });
    }

    const headers = new Headers(request.headers);

    ["host", "cf-connecting-ip", "cf-ipcountry", "cf-ray"].forEach((key) =>
      headers.delete(key)
    );

    return fetch(url, {
      method: request.method,
      headers,
      body:
        request.method === "GET" || request.method === "HEAD"
          ? undefined
          : request.body,
      redirect: "follow",
    });
  },
};
