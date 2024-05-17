import { atom } from "jotai";
import { atomWithReset, atomWithStorage } from "jotai/utils";

export type UserInfo = {
  username: string;
};

export const loadingAtom = atom(false);

export const userInfoAtom = atomWithStorage<UserInfo | undefined>(
  "user-info",
  undefined
);


export type ToastMessage = {
  message: string;
  type: 'info' | 'error' | 'warning' | 'success' | 'loading';
};

export const messageAtom = atomWithReset<ToastMessage>({
  message: '',
  type: 'info',
});