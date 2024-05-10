import { ModalKomunitasSliceProps } from "@/types";
import { devtools } from "zustand/middleware";
import { createWithEqualityFn } from "zustand/traditional";
import modalKomunitasSlice from "./slices/modalKomunitas.slice";

const useGlobalStore = createWithEqualityFn<ModalKomunitasSliceProps>()(
  devtools((...set) => ({
    ...modalKomunitasSlice(...set),
  }))
);

export default useGlobalStore;
