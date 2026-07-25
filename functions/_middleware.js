export async function onRequest(context) {

  const url = new URL(context.request.url);

  // 仮想os.htmlだけを保護
  if (url.pathname.endsWith("/仮想os.html")) {

    const cookie = context.request.headers.get("Cookie") || "";

    if (!cookie.includes("access=yes")) {

      return Response.redirect(
        new URL("/index.html", url.origin),
        302
      );

    }
  }

  return await context.next();
}
