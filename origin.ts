type MountElementProps<T extends Record<string, unknown>> = {
  type: keyof HTMLElementTagNameMap;
  children: string;
  props: T;
};

function mountElement({
  props,
  type,
  children,
}: MountElementProps<{
  size: string;
}>) {
  var node = document.createElement(type);
  node.setAttribute("size", props["size"]);
  node.innerHTML = children;
  return node;
}

const root = document.getElementById("root") as HTMLElement;
root.appendChild(
  mountElement({
    type: "h3",
    children: "um texto",
    props: {
      size: "20px",
    },
  })
);
