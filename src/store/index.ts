import { DetailPelatihTabsSliceProps, ModalKomunitasSliceProps } from "@/types";
import { devtools } from "zustand/middleware";
import { createWithEqualityFn } from "zustand/traditional";
import detailPelatihTabsSlice from "./slices/detailPelatihTabs.slice";
import modalKomunitasSlice from "./slices/modalKomunitas.slice";

const useGlobalStore = createWithEqualityFn<
  ModalKomunitasSliceProps & DetailPelatihTabsSliceProps
>()(
  devtools((...set) => ({
    ...modalKomunitasSlice(...set),
    ...detailPelatihTabsSlice(...set),
  }))
);

export default useGlobalStore;
