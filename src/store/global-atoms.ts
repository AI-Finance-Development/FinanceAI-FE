import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

export type UserInfo = {
  username: string;
};

export const loadingAtom = atom(false);

export const userInfoAtom = atomWithStorage<UserInfo | undefined>(
  "user-info",
  undefined
);
