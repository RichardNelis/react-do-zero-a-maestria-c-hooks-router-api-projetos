import { resetMessage } from "../slices/photoSlice";

export const useResetMessageComponentMessage = (dispatch) => {
  return () => {
    setTimeout(() => {
      dispatch(resetMessage());
    }, 2000);
  };
};

export default useResetMessageComponentMessage;
