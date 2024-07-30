import 'bootstrap/dist/css/bootstrap.min.css'

export function Navbar() {
  return (
    <>
<div className="row">
    <ul className="nav flex-column">
      <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="#">Active</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Link</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Link</a>
      </li>

    </ul>
</div>

    </>
  );
}
