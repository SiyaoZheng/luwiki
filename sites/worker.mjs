function requestForPath(request, pathname) {
  const url = new URL(request.url);
  url.pathname = pathname;
  return new Request(url, request);
}

function candidatePaths(pathname) {
  const paths = [];
  const add = (value) => {
    if (!paths.includes(value)) paths.push(value);
    const escaped = value.replaceAll("%", "%25");
    if (!paths.includes(escaped)) paths.push(escaped);
  };

  add(pathname);
  if (pathname.endsWith("/")) {
    add(`${pathname}index.html`);
  } else if (!pathname.split("/").at(-1)?.includes(".")) {
    add(`${pathname}/index.html`);
  }
  return paths;
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    for (const pathname of candidatePaths(url.pathname)) {
      const response = await env.ASSETS.fetch(requestForPath(request, pathname));
      if (response.status !== 404) return response;
    }

    return env.ASSETS.fetch(requestForPath(request, "/404/index.html"));
  },
};
