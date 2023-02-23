import { Post } from "../components";
import { Fade } from "react-reveal";

const Writing = () => {
  return (
    <Fade bottom>
      <div>
        <Post
          title="Implementing A GitHub Repository API Call"
          snippet="As part of the second-semester examination for Alt School Africa Frontend Engineering track. We were tasked to implement key features such as API fetch, routing, error boundary, and SEO using React.js..."
          link="https://dev.to/missbaah/implementing-a-github-repository-api-call-593k"
        />
      </div>
    </Fade>
  );
};

export default Writing;
