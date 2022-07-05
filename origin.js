function mountElement(_a) {
    var props = _a.props, type = _a.type, children = _a.children;
    var node = document.createElement(type);
    node.setAttribute("size", props["size"]);
    node.innerHTML = children;
    return node;
}
var root = document.getElementById("root");
root.appendChild(mountElement({
    type: "h3",
    children: "um texto",
    props: {
        size: "20px"
    }
}));
