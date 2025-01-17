import { ReactNode } from "react";

const Modal = ({
  isVisible,
  children,
}: {
  isVisible: boolean;
  children: ReactNode;
}) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
      <div className="relative px-1 py-1 bg-[#131212e3] rounded-lg shadow-lg mx-0 md:mx-4">
        {children}
      </div>
    </div>
  );
};

export default Modal;
