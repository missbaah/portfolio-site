import "../assets/SingleProject.css";

const SingleProject = () => {
  return (
    <main className="detail-container">
      <h3>Project name</h3>
      <section className="info-box">
        <div className="item1">
          <h4>Description</h4>
          <article>
            The app does what an app is suppose to do essentially
          </article>
        </div>
        <div className="item2">
          <h4>Built With</h4>
          <ul>
            <li>HTML5</li>
            <li>CSS</li>
            <li>React.js</li>
          </ul>
        </div>
        <div className="item3">
          <h4>Links</h4>
          <ul>
            <li>
              <a href="">Live Site</a>
            </li>
            <li>
              <a href="">GitHub Repo</a>
            </li>
          </ul>
        </div>
      </section>
      <section className="summaries">
        <h3>Project Summary</h3>
        <div className="summary">
          <article>lorem abal fos foasprejsaklfsdfjlskd ;f</article>
          <aside>
            <img src="" alt="something" />
          </aside>
        </div>
      </section>
    </main>
  );
};

export default SingleProject;
