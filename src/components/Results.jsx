import Card from "./Card";
const Results = ({ results }) => {
  // console.log(results[0].id);
  return (
    <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols4 2xl:grid-cols-5 max-w-6xl mx-auto py-4">
      {results.map((result) => (
        // <div key={result.id}>{result.original_title}</div>}
        <Card key={result.id} result={result} />
      ))}
    </div>
  );
};

export default Results;
