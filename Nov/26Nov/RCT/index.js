import { createElement } from "react";
import { createRoot } from "react-dom/client";

const ReactRootINHTML = document.getElementById("ReactRoot");

const root = createRoot(ReactRootINHTML);

// console.log(root);

function textTag({ tagName, content, id }) {
  // console.log(obj?.id);
  // console.log(tagName);
  // console.log(content);
  // console.log(id);
  const timestamp = new Date();
  // console.log(timestamp.getTime());
  const ms = timestamp.getTime();
  // console.log(`${ms}-${tagName}-${content}-${id}`);
  const myElement = createElement(tagName, { id: id, key: `${ms}-${tagName}-${content}-${id}` }, content);
  // console.log(myElement);
  return myElement;
}

// const x = { tagName: "h1" };
// textTag(x);

const myH1 = textTag({ tagName: "h1", content: "Hello World from React!", id: "greetingReact" });
// console.log('myH1', myH1);

const soBeautiful = textTag({
  tagName: "p",
  content: "Sooo beautiful!!",
  id: "sooBeautiful"
});
const SoElegant = textTag({
  tagName: "p",
  content: "Sooo elegant!!",
  id: "sooElegant"
});

// console.log(SoElegant);

// console.log(myPTag);

// root.render([
//   myH1,
//   soBeautiful,
//   SoElegant
// ]);

function ContainerTag({ tagName, children, id, }) {
  const timestamp = new Date();
  // console.log(timestamp.getTime());
  const ms = timestamp.getTime();
  const key = `${ms}-${tagName}-${children?.length}-${id}`;
  const myContainer = createElement(tagName, {
    id, key, style: {
      border: "1px solid red",
      backgroundColor: "hotpink",
      padding: "10px",
      margin: "10px"
    }
  }, children);
  return myContainer;
}

const container_1 = ContainerTag({
  tagName: "div",
  id: "Container_1",
  children: [
    myH1,
    soBeautiful,
    SoElegant
  ]
});
const container_2 = ContainerTag({
  tagName: "div",
  id: "Container_2",
  children: "this is my 2nd container"
});

// console.log(container_1);
root.render([container_1, container_2]);