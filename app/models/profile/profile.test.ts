import { ProfileModel } from "./profile"

test("can be created", () => {
  const instance = ProfileModel.create({})

  expect(instance).toBeTruthy()
})
