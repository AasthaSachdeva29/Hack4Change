// BottomSheet.js
import React from 'react';
import { useSpring, animated } from 'react-spring';
import { useDrag } from 'react-use-gesture';
import '../App.css';

const BottomSheet = ({ isOpen, onClose }) => {
  const [{ y }, api] = useSpring(() => ({ y: 100 }));

  const openSheet = () => {
    api.start({ y: 0 });
  };

  const closeSheet = () => {
    api.start({ y: 100 });
  };

  const bind = useDrag(({ down, movement: [, my] }) => {
    if (down) {
      api.start({ y: my });
    } else {
      if (my > 50) {
        closeSheet();
        onClose();
      } else {
        openSheet();
      }
    }
  });

  React.useEffect(() => {
    if (isOpen) {
      openSheet();
    } else {
      closeSheet();
    }
  }, [isOpen]);

  return (
    <animated.div
      className="bottom-sheet"
      {...bind()}
      style={{ transform: y.to(py => `translateY(${py}%)`) }}
    >
      <div className="sheet-content">This is the bottom sheet content</div>
    </animated.div>
  );
};

export default BottomSheet;
