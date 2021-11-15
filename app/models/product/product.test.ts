import { ProductModel } from "./product"

test("can be created", () => {
  const instance = ProductModel.create({})

  expect(instance).toBeTruthy()
})
