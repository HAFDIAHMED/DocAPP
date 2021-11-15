import { flow, Instance, SnapshotOut, types } from "mobx-state-tree"
import { Api } from "../../services/api"

/**
 * Model description here for TypeScript hints.
 */
export const ProfileModel = types
  .model("Profile")
  .props({
    email : types.optional(types.string,"email@email.com"),
    password : types.optional(types.string,"password"),
    token : types.optional(types.string,"token")
  })
  .views((self) => ({
    get getEmail(){
      return self.email
    },
    get getPassword(){
      return self.password
    },
    get getToken(){
      return self.token
    }
  })) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions((self) => ({
      setEmail(value : string){
        self.email=value
      },
      setPassword(value : string){
        self.password=value
      },
      setToken(value : string){
        self.token=value
      }
     
      
  })
  
  )
  .actions((self)=>({
    Login : flow (function* (email : string, password: string){
      const api = new Api()
      api.setup()
      yield api.ProfileLogin(email, password).then((response : any)=>{
        //console.log(response)
        
      })
      
    }),
    Register : flow (function * (email : string , password : string ){
      const api = new Api()
      api.setup()
      yield api.ProfileRegister(email, password).then((response: any)=>{
        self.setToken(response.token)
        self.setEmail(response.email)
        self.setPassword(response.password)
      })
    })
  })) // eslint-disable-line @typescript-eslint/no-unused-vars

type ProfileType = Instance<typeof ProfileModel>
export interface Profile extends ProfileType {}
type ProfileSnapshotType = SnapshotOut<typeof ProfileModel>
export interface ProfileSnapshot extends ProfileSnapshotType {}
export const createProfileDefaultModel = () => types.optional(ProfileModel, {})
