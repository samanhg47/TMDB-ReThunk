import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const mapStateToProps = ({ movieState }) => {
  return {
    movieState
  }
}

const DiscoverMoviesList = (props) => {
  return (
    <section className="list">
      <h2>List</h2>
      <p>(scroll for more titles)</p>
      <div className="listDisplay">
        {props.movieState.discoverMovies.map((movie) => (
          <div key={movie.id} className="listItem">
            <Link to={`/movies/discover/${movie.title}`}>
              <h3>{movie.title}</h3>
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}

export default connect(mapStateToProps)(DiscoverMoviesList)
