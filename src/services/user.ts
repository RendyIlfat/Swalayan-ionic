export type TUser = {
    id?: number
    name?: string
    email?: string
    level?: string
    created_at?: number
    modified_at?: number
}

import { useStorage } from "@vueuse/core";

export const user = userStorage<TUser>('user-data', null)
export const token = userStorage<string>('user-token', '')
