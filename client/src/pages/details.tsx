import Loader from 'components/loading'
import BackButton from 'components/backButton'
import Reviews from 'components/reviews'
import ItemDetails from 'components/itemDetails'

export default function Details() {
  return (
    <Loader isLoading={false}>
      <BackButton />
      <ItemDetails />
      <Reviews />
    </Loader>
  )
}
