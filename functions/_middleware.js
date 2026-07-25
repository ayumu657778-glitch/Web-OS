export async function onRequest(context) {

  const url = new URL(context.request.url);

  // 仮想OSだけチェック
  if (url.pathname === "/仮想os.html") {

    const cookie = context.request.headers.get("Cookie") || "";

    // 入場券がない場合
    if (!cookie.includes("access=yes")) {

      return Response.redirect(
        new URL("/", url.origin),
        302
      );

    }
  }

  return context.next();
}
