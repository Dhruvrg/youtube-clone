import { create } from "zustand";

interface Props {
  id: string;
  title: string;
  description: string;
  url: string;
}

interface EditVideoModalStore {
  data: Props;
  setData: (data: Props) => void;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useEditVideoModal = create<EditVideoModalStore>((set) => ({
  data: { id: "", title: "", description: "", url: "" },
  setData: (data) => set((state) => ({ data: (state.data = data) })),
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useEditVideoModal;
