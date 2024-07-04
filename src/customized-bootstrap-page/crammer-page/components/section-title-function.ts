import {DIV} from "@step-js-html-5/index";

const SectionTitleFunction = () => {
  return new DIV("py-2 mx-4 d-flex flex-column align-items-center text-secondary", {
    style: {
      borderBottomColor: "var(--bs-secondary-rgb)",
      fontSize: "1.5rem",
      borderBottom: "1px solid",
      fontWeight: "700",
    }
  });
};

export default SectionTitleFunction;
