import ClockLoader from 'react-spinners/ClockLoader'

export const Loading = () => {
  return (
    <article className="grid place-items-center gap-3">
      <ClockLoader
        size={60}
        loading={true}
        color="#0061D4"
        data-testid="loader"
        aria-label="Loading Spinner"
      />
    </article>
  )
}
