import { DetailPelatihTabsSliceProps } from "@/types";
import { StateCreator } from "zustand";

const detailPelatihTabsSlice: StateCreator<
  DetailPelatihTabsSliceProps,
  [],
  [],
  DetailPelatihTabsSliceProps
> = (set) => ({
  detailPelatihTabs: "tentang",
  setDetailPelatihTabs: (detailPelatihTabs) =>
    set({ detailPelatihTabs: detailPelatihTabs }),
});

export default detailPelatihTabsSlice;
