import { flow, Instance, SnapshotOut, types } from "mobx-state-tree"
import { Api } from "../../services/api"
import { ProductModel } from "../product/product"

/**
 * Model description here for TypeScript hints.
 */
export const ProfileModel = types
  .model("Profile")
  .props({
    email : types.optional(types.string,"email@email.com"),
    password : types.optional(types.string,"password"),
    token : types.optional(types.string,"token"),
    status : types.optional(types.number,123),
    products: types.optional(types.map(ProductModel),{})

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
    },
    get getStatus(){
      return self.status
    },
    get getProduct(){
      return self.products
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
      },
     setStatus(value : number){
       self.status=value
     },
     
     
      
  })
  
  )
  .actions((self)=>({
    Login : flow (function* (email : string, password: string){
      const api = new Api()
      api.setup()
      yield api.ProfileLogin(email, password).then((response : any)=>{
        self.setToken(response.token)
        self.setEmail(response.email)
        self.setPassword(response.password)
        self.setStatus(response.status)
      })
      
    }),
    Register : flow (function * (email : string , password : string ){
      const api = new Api()
      api.setup()
      yield api.ProfileRegister(email, password).then((response: any)=>{

        self.setToken(response.token)
        self.setEmail(response.email)
        self.setPassword(response.password)
        self.setStatus(response.status)
      })
    }),
    GetPorducts : flow (function * (token : string){
      const api = new Api()
      api.setup()
      yield api.ProductFetch(token).then((response : any)=>{
        self.setStatus(response.status);
        //self.products=response.products
        console.log(response.products[0])
      })
    })
  })) // eslint-disable-line @typescript-eslint/no-unused-vars

type ProfileType = Instance<typeof ProfileModel>
export interface Profile extends ProfileType {}
type ProfileSnapshotType = SnapshotOut<typeof ProfileModel>
export interface ProfileSnapshot extends ProfileSnapshotType {}
export const createProfileDefaultModel = () => types.optional(ProfileModel, {})
