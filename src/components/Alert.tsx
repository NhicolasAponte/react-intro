
interface AlertProps {
    message: string;
    
}

const Alert = ({ message }: AlertProps) => {
  return (
    <div className="alert alert-primary">
      message: {message}
    </div>
  )
}

export default Alert
