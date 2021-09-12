type Props = {
  children: React.ReactNode
}

const CommonSelector: React.FC<Props> = ({
  children,
}: Props): React.ReactElement => {
  return <>{children}</>
}

export default CommonSelector
