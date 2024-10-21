import { asyncHandler } from '../utils/asyncHandler.js'
import {apiError} from '../utils/apiError.js'
const registerUser = asyncHandler( async (req, res) => {
  console.log("email", req.body.email);
  const {name, email} = req.body
  if([name, email].some(item => item.trim() === "")){
    throw new apiError(400, "some required field is missing")
  }
  res.status(200).json({
    message: "ok"
  })
})

export { registerUser }