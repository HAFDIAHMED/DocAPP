import { Instance, SnapshotOut, types } from "mobx-state-tree"

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
    
  })) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions((self) => ({

  })) // eslint-disable-line @typescript-eslint/no-unused-vars

type ProfileType = Instance<typeof ProfileModel>
export interface Profile extends ProfileType {}
type ProfileSnapshotType = SnapshotOut<typeof ProfileModel>
export interface ProfileSnapshot extends ProfileSnapshotType {}
export const createProfileDefaultModel = () => types.optional(ProfileModel, {})
