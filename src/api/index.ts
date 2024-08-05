import { Router } from "express"
import auth from "./auth"

export default () => {
  const router = Router()
  auth({router})
  return router
}
