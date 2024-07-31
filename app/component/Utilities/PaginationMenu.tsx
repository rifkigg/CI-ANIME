const PaginationMenu = ({
  page,
  lastPage,
  setPage,
}: {
  page: number;
  lastPage: number;
  setPage: any;
}) => {
  const scrollTop = () => {
    scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNextPage = () => {
    setPage((prevPage: number) => prevPage + 1);
    scrollTop();
  };

  const handlePrevPage = () => {
    setPage((prevPage: number) => prevPage - 1);
    scrollTop();
  };

  return (
    <div className="flex justify-center items-center gap-4 text-lg my-4 ">
      {page <= 1 ? null : (
        <button
          className="text-primary transition-all hover:text-accent"
          onClick={handlePrevPage}
        >
          Prev
        </button>
      )}
      <p className="text-primary">
        {page} of {lastPage}
      </p>

      {page >= lastPage ? null : (
        <button
          className="text-primary transition-all hover:text-accent"
          onClick={handleNextPage}
        >
          Next
        </button>
      )}
    </div>
  );
};

export default PaginationMenu;
