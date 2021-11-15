import { Instance, SnapshotOut, types } from "mobx-state-tree"

/**
 * Model description here for TypeScript hints.
 */
export const ProductModel = types
  .model("Product")
  .props({
    id : types.optional(types.number,0),
    name : types.optional(types.string,"name"),
    cost :types.optional(types.number,0),
    quantity:types.optional(types.number,0),
    locationId: types.optional(types.number,0),
    familyId:types.optional(types.number,0),
    /*{
      "id": 1,
      "name": "Product001",
      "cost": 10,
      "quantity": 1000,
      "locationId": 1,
      "familyId": 1
    }, */
  })
  .views((self) => ({
    get getId (){
      return self.id
    },
    get getName(){
      return self.name
    },
    get getCost (){
      return self.cost
    },
    get getQuantity (){
      return self.quantity
    },
    get getLocation (){
      return self.locationId
    },
    get getFamilyId(){
      return self.familyId
    }
  })) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions((self) => ({
    setId(value : number){
      self.id=value
    },
    setName(value : string){
      self.name=value
    },
    setCost(value : number){
      self.cost=value
    },
    setQuantity(value : number){
      self.quantity=value
    },
    setLocation(value : number){
      self.locationId=value
    },
    setFamilyId(value : number){
      self.familyId=value
    },
  })) // eslint-disable-line @typescript-eslint/no-unused-vars

type ProductType = Instance<typeof ProductModel>
export interface Product extends ProductType {}
type ProductSnapshotType = SnapshotOut<typeof ProductModel>
export interface ProductSnapshot extends ProductSnapshotType {}
export const createProductDefaultModel = () => types.optional(ProductModel, {})
