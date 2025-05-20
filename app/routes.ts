import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/main.tsx"),
  route("contact", "routes/contact.tsx")
] satisfies RouteConfig;
