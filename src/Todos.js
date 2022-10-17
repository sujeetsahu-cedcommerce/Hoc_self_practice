import Hoc from "./Hoc";

const Todos = ({ result, filter }) => {
  console.log(filter);
  return (
    <div>
      {filter.length > 0
        ? filter.map((item, index) =>
            item !== "" ? <p key={index}>{item}</p> : <></>
          )
        : result
            .slice(0, 10)
            .map((item, index) => <p key={index}>{item.title}</p>)}
    </div>
  );
};

// export default Hoc(Todos, "todos");
const SearchTodos = Hoc(Todos, "todos");
export default SearchTodos;
