import ClipLoader from 'react-spinners/ClipLoader'

const override = {
    display: 'block',
    margin: '0 auto',
}

const Spinner = ({ loading }) => {
  return (
    <ClipLoader
        color='#22c55e'
        loading={loading}
        cssOverride={override}
        size={25}
    />
  )
}

export default Spinner