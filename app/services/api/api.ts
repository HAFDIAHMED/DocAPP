import { ApisauceInstance, create, ApiResponse } from "apisauce"
import { getGeneralApiProblem } from "./api-problem"
import { ApiConfig, DEFAULT_API_CONFIG } from "./api-config"
import * as Types from "./api.types"
import { ProductModel } from "../../models/product/product"

/**
 * Manages all requests to the API.
 */
export class Api {
  /**
   * The underlying apisauce instance which performs the requests.
   */
  apisauce: ApisauceInstance

  /**
   * Configurable options.
   */
  config: ApiConfig

  /**
   * Creates the api.
   *
   * @param config The configuration to use.
   */
  constructor(config: ApiConfig = DEFAULT_API_CONFIG) {
    this.config = config
  }

  /**
   * Sets up the API.  This will be called during the bootup
   * sequence and will happen before the first React component
   * is mounted.
   *
   * Be as quick as possible in here.
   */
  setup() {
    // construct the apisauce instance
    this.apisauce = create({
      baseURL: this.config.url,
      timeout: this.config.timeout,
      headers: {
        Accept: "application/json",
      Authorization: 'Bearer ' ,


      },
    })
  }

  /**
   * Gets a list of users.
   */
  async getUsers(): Promise<Types.GetUsersResult> {
    // make the api call
    const response: ApiResponse<any> = await this.apisauce.get(`/users`)

    // the typical ways to die when calling an api
    if (!response.ok) {
      const problem = getGeneralApiProblem(response)
      if (problem) return problem
    }

    const convertUser = (raw) => {
      return {
        id: raw.id,
        name: raw.name,
      }
    }

    // transform the data into the format we are expecting
    try {
      const rawUsers = response.data
      const resultUsers: Types.User[] = rawUsers.map(convertUser)
      return { kind: "ok", users: resultUsers }
    } catch {
      return { kind: "bad-data" }
    }
  }

  /**
   * Gets a single user by ID
   */

  async getUser(id: string): Promise<Types.GetUserResult> {
    // make the api call
    const response: ApiResponse<any> = await this.apisauce.get(`/users/${id}`)

    // the typical ways to die when calling an api
    if (!response.ok) {
      const problem = getGeneralApiProblem(response)
      if (problem) return problem
    }

    // transform the data into the format we are expecting
    try {
      const resultUser: Types.User = {
        id: response.data.id,
        name: response.data.name,
      }
      return { kind: "ok", user: resultUser }
    } catch {
      return { kind: "bad-data" }
    }
  }
  async ProfileLogin(email : string , password : string): Promise<Types.ProfileType> {
    const data_input = {email,password}
    const response : ApiResponse<any>=await this.apisauce.post('/auth/login',data_input);
    if (!response.ok) {
      const problem = getGeneralApiProblem(response)
      if (problem) return problem
    }

    try {
        const ProfileResult=response.data
        return {status: response.status,token : ProfileResult.access_token,email: data_input.email, password :data_input.password}
    }catch {
      return {kind : "bad-data"}
    }
  }
  async ProfileRegister(email : string , password : string): Promise<Types.ProfileType> {
    const data_input = {email,password}
    const response : ApiResponse<any>=await this.apisauce.post('/auth/register',data_input);
    if (!response.ok) {
      const problem = getGeneralApiProblem(response)
      if (problem) return problem
    }

    try {
        const ProfileResult=response.data
        return {status: response.status,token : ProfileResult.access_token,email: data_input.email, password :data_input.password}
    }catch {
      return {kind : "bad-data"}
    }
  }
  async ProductFetch(token : string ): Promise<Types.ProductType> {
    
    this.apisauce.headers["Authorization"]='Bearer ' +token
    const response : ApiResponse<any>=await this.apisauce.get('/products');
    if (!response.ok) {
      const problem = getGeneralApiProblem(response)
      if (problem) return problem
    }
    try {
        const ProductList=response.data
        return {status: response.status,products:ProductList.map(
          prod=>ProductModel.create({
            id : prod.id,
          name : prod.name,
          cost : prod.cost,
          quantity: prod.quantity,
          locationId: prod.locationId,
          familyId : prod.familyId,
          })

        )}
    }catch {
      return {kind : "bad-data"}
    }
  }
}
