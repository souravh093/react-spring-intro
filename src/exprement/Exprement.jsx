const Excrement = () => {
  const people = ["sourave", "halder", "kishor", "nibas"]; // this is my array
  return <div>{people.map((name) => name)}</div>;
};

{/** when we use this component 
     then we export the component like this */}
export default Excrement;


