const StatelessSubComponent = ({name, imageUrl}) => (
  <div>
    Beer name: {name}
    <br />
    <img src={imageUrl} />
    <style jsx>{`
      img {
        max-height: 200px;
        width: auto;
      }
      `}</style>
  </div>
)

export default StatelessSubComponent
