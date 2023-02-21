const MovieSearchForm = ({ onSubmit }) => {
  const handelSubmit = evt => {
    evt.preventDefault();
    onSubmit(evt.target.search.value);
  };

  return (
    <form onSubmit={handelSubmit}>
      <input type="text" name="search" />
      <button type="submit">search</button>
    </form>
  );
};

export default MovieSearchForm;
