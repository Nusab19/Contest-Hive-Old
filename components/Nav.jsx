import "/styles/nav.css";

function Nav() {
  return (
    <div>
      <div className="nav">
        <input type="checkbox" id="nav-check" />
        <div className="nav-header">
          <a className="nav-title" href="/">
            {" "}
            Contest Hive{" "}
          </a>
        </div>
        <div className="nav-btn">
          <label htmlFor="nav-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>

        <div className="nav-links">
          <a href="/about/" target="_blank">
            About
          </a>
          <a href="https://github.com/Nusab19/" target="_blank">
            Source Code
          </a>
        </div>
      </div>
    </div>
  );
}

export default Nav;
