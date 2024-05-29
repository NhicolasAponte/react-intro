import { ReactNode } from "react";

interface AlertWIthCloseProps {
  children: ReactNode;
  isVisible: boolean;
  toggleAlert: () => void;
}

const AlertWIthClose = ({ children, isVisible, toggleAlert }: AlertWIthCloseProps) => {

  return (
    <>
      {isVisible && (
        <div
          className={"alert alert-warning alert-dismissible fade show"}
          role="alert"
        >
          <strong>{children}</strong>
          <button
            type="button"
            onClick={toggleAlert}
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>
      )}
    </>
  );
};

export default AlertWIthClose;
