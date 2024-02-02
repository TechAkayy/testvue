import { ref } from "vue";
export const useRoom = () => {
  const showAddRoomModal = ref(false);

  return {
    showAddRoomModal,
  };
};
