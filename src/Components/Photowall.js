import PropTypes from "prop-types";
import Photo from "./Photo.js";
import { Link } from "react-router-dom";

function PhotoWall(props) {
  return (
    <>
      <Link to="/add-photo">
        <div className="addIcon">
          <div className="cross-vertical">
            <div className="cross-horizontal"></div>
          </div>
        </div>
      </Link>

      <div className="photoGrid">
        {props.posts.map((post, index) => {
          return <Photo key={index} post={post} {...props} index={index} />;
        })}
      </div>
    </>
  );
}

PhotoWall.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default PhotoWall;
