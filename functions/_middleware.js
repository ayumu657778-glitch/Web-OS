export async function onRequest(context) {

  const url = new URL(context.request.url);

  if (url.pathname.includes("仮想os.html")) {

    const cookie = context.request.headers.get("Cookie") || "";

    if (!cookie.includes("access=yes")) {
      return Response.redirect(
        new URL("/index.html", url.origin),
        302
      );
    }
  }

  return context.next();
}
