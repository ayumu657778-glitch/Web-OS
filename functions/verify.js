export async function onRequest() {

  return new Response(null, {
    status: 302,
    headers: {
      "Location": "/仮想os.html",
      "Set-Cookie": "access=yes; Path=/; HttpOnly; Secure; SameSite=Lax"
    }
  });

}
