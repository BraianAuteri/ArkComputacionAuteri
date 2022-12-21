import Item from "./Item";

const List = function ({ list }) {
  return list.map(({ marca, description, precio, foto, modelo }) => (
      <Item key={marca} marca={marca} description={description} precio={precio} foto={foto} modelo={modelo } />
  ));
};

export default List;