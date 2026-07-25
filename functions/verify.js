export async function onRequest(context) {

  const cookie = "access=yes; Path=/; HttpOnly; Secure; SameSite=Lax";

  return new Response(null, {
    status: 302,
    headers: {
      "Location": "/仮想os/",
      "Set-Cookie": cookie
    }
  });
}
