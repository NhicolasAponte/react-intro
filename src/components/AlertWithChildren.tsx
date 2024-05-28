import { ReactNode } from "react";

interface AlertWithChildrenProps {
    children: ReactNode;// or React.ReactNode
    
}

const AlertWithChildren = ({ children }: AlertWithChildrenProps) => {
  return (
    <div className="alert alert-primary">
      children: {children}
    </div>
  )
}

export default AlertWithChildren
