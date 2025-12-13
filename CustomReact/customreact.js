

const reactElement = {
     type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: "Click here to visit google"
}
const mainContainer = document.querySelector('#root')
function customreact(mainContainer , reactElement){
      const domElement = document.createElement(reactElement.type)
      domElement.innerHTML = reactElement.children
    for(prop in reactElement.props){
        if(prop == 'children')continue;
        domElement.setAttribute(prop,reactElement.props[prop])
    }
    mainContainer.appendChild(domElement)
}

 customreact(mainContainer , reactElement)