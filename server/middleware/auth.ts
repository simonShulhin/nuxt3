export default defineEventHandler(async (event) => {
  const auth = getCookie(event, "app-auth");
  if (!auth && event.path !== "/login") {
    sendRedirect(event, "/login", 302);
  }
  // console.log("event:", event.path);
});
