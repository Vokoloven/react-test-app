import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getScreenResolution } from 'Redux/screen/screenSlice';

export const useScreenChecker = () => {
  // const isFirstCall = useRef(true);
  const dispatch = useDispatch();
  const screenWidth = window.screen.width;

  useEffect(() => {
    // if (isFirstCall.current) {
    //   isFirstCall.current = false;
    //   return;
    // }

    if (screenWidth >= 320 && screenWidth < 768) {
      dispatch(getScreenResolution('mobile'));
    } else if (screenWidth >= 768 && screenWidth < 1024) {
      dispatch(getScreenResolution('tablet'));
    } else if (screenWidth >= 1024) {
      dispatch(getScreenResolution('desktop'));
    }
  }, [dispatch, screenWidth]);
};
