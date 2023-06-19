import Home from "./page_content/Home";
import About from "./page_content/About";
import Products from "./page_content/Products";
import Portfolio from "./page_content/Portfolio";
import Contact from "./page_content/Contact";

const PageContent = () => {
  return (
    <div className="w3-padding-large" id="main">
      <Home />
      <About />
      <Products />
      <Portfolio />
      <Contact />
    </div>
  );
};

export default PageContent;
