import "./App.css";

function App() {
  const title = "ReactJS";
  return (
    <div className="container w-75">
      <header className="header p-4">
        <nav className="container d-flex justify-content-between align-items-center">
          <img src="/images/ironhack-logo.svg" alt="ironhack-logo"/>
          <a href="/">
            <img src="/images/menu-top.svg" alt="menu-top"/>
          </a>
        </nav>
        <div className="text-light row p-4">
          <h1 className="col-6 font">Say hello to</h1>
          <h1 className="font">{title}</h1>
        </div>
        <div className="text-light row p-4">
          <p className="col-6 fs-4">
            You will learn how to use the most popular frontend library, and
            become a super Ninja developer.
          </p>
        </div>
        <a href="/" className="btn btn-light m-3 mainColor fw-bold fs-4">Awesome!</a>
      </header>
      <section className="container">
          <div className="row p-5">
            <div className="col-3">
              <img src="/images/icon1.png" className="card-img-top" alt="icon"/>
              <div className="card-body">
                <h5 className="mainColor">Declarative</h5>
                <p className="card-text">
                  React makes it painless to create interactive UIs.
                </p>
              </div>
            </div>
            <div className="col-3">
              <img src="/images/icon2.png" className="card-img-top" alt="icon"/>
              <div className="card-body">
                <h5 lassName="mainColor">Components</h5>
                <p className="card-text">
                  Build encapsulated components that manage their state.
                </p>
              </div>
            </div>
            <div className="col-3">
              <img src="/images/icon3.png" className="card-img-top" alt="icon" />
              <div className="card-body">
                <h5 lassName="mainColor">Single-Way</h5>
                <p className="card-text">
                  A set of immutable values are passed to the component's
                </p>
              </div>
            </div>
            <div className="col-3">
              <img src="/images/icon4.png" className="card-img-top" alt="icon" />
              <div className="card-body">
                <h5 lassName="mainColor">JSX</h5>
                <p className="card-text">
                 Statically-typed, designed to run on modern browsers.
                </p>
              </div>
            </div>
          </div>
      </section>
    </div>
  );
}

export default App;
