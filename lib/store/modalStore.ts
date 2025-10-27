import { create } from 'zustand'
import type { Project } from '@/lib/data/projects'

interface ModalState {
  isOpen: boolean
  project: Project | null
  openModal: (project: Project) => void
  closeModal: () => void
}

export const useModalStore = create<ModalState>((set) => ({
  isOpen: false,
  project: null,
  openModal: (project) => set({ isOpen: true, project }),
  closeModal: () => set({ isOpen: false, project: null }),
}))


