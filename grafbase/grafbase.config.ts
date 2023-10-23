import { g, auth, config } from "@grafbase/sdk";

const User = g.model("User", {
  name: g.string().length({ min: 2, max: 20 }),
  email: g.string().unique(),
  avatarUrl: g.url(),
  description: g.string(),
  projects: g
    .relation(() => Posts)
    .list()
    .optional(),
});

const Posts = g.model("Posts", {
  title: g.string().length({ min: 1 }),
  description: g.string(),
  image: g.url(),
  category: g.string().search(),
  createBy: g.relation(() => User),
});

export default config({
  schema: g,
});
