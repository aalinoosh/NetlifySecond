type Props = {
  children: React.ReactNode
  className?: string
  backgroundColor?: string
}

const Container: React.FC<Props> = ({
  children,
  className = "",
  backgroundColor = "",
}): React.ReactElement => {
  return (
    <div
      className={`max-w-screen-xxl px-4 py-4 lg:px-12 w-full mx-auto ${backgroundColor} ${className}`}
    >
      {children}
    </div>
  )
}

export default Container
