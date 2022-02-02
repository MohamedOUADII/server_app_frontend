import { Status } from './../enum/status.enum';

export interface Server {
  id : number
  name : string
  ipAddress : string
  imageUrl : string
  memory : string
  type : string
  status : Status
}
