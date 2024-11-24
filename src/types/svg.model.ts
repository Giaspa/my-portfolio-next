const SVG_LIST = {
  angular: "angular.svg",
  figma: "figma.svg",
  firebase: "firebase.svg",
  flutter: "flutter.svg",
  java: "java.svg",
  javascript: "js.svg",
  miro: "miro.svg",
  mybatis: "mybatis.svg",
  mongodb: "mongodb.svg",
  next: "nextjs.svg",
  prisma: "prisma.svg",
  react: "react.svg",
  reactnative: "reactnative.svg",
  redux: "redux.svg",
  sass: "sass.svg",
  sonarcloud: "sonarcloud.svg",
  spring: "spring.svg",
  mysql: "sql.svg",
  supabase: "supabase.svg",
  svelte: "svelte.svg",
  tailwind: "tailwind.svg",
  typescript: "ts.svg",
  vite: "vite.svg",
  vue: "vue.svg",
  css: "css.svg",
  html: "html.svg",
  google: "google.svg",
  gitlab: "gitlab.svg",
  github: "github.svg",
  git: "git.svg",
  pandacss: "pandacss.svg",
  hibernate: "hibernate.svg",
  docker: "docker.svg",
  jira: "jira.svg",
  trello: "trello.svg",
  postman: "postman.svg",
  vercel: "vercel.svg",
  bootstrap: "bootstrap.svg",
  daisyui: "daisyui.svg",
}

const SVG_DIRECTORY_PATH: string = "assets/svg/";

export const SVG_MAP: {[k: string]: string} = Object.fromEntries(
  Object.entries(SVG_LIST)
    .map(obj => {
      return [
        obj[0],
        `${SVG_DIRECTORY_PATH}${obj[1]}`
      ]
    })
)
