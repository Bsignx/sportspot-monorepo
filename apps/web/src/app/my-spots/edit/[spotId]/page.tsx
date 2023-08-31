import Main from './components/main'

const EditSpotPage = ({ params }: { params: { spotId: string } }) => {
  return <Main spotId={params.spotId} />
}

export default EditSpotPage
