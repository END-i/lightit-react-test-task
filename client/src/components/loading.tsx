interface Props {
  children: React.ReactNode
  isLoading: boolean
}
export default function Loader({ children, isLoading }: Props) {
  const lettersArray = 'Loading...'.split('')

  return (
    <>
      <div className={`loading-page-wrapper ${isLoading ? 'show' : ''}`}>
        {lettersArray.map((letter, idx) => (
          <span key={idx}>{letter}</span>
        ))}
      </div>
      {isLoading ? null : children}
    </>
  )
}
