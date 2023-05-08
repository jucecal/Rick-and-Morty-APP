const Characters = ({ characters }) => {
  return (
    <div className="row">
      {
        characters.map((item, index) => (
          <div key={index} className="col m-3">
            <div className="card" style={{ minWidth: "200px" }}>
              <img src={item.image} alt="" />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <hr />
                <p><b>Specie:</b>  {item.species}</p>
                <p><b>Location:</b>  {item.location.name}</p>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Characters;