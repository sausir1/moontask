import { objKeys } from "./object"

async function generateMenu() {
  const files = import.meta.glob("../views/**.vue", { eager: false })
  const paths = objKeys(files)
}
