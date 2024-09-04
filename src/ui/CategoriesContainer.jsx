function CategoriesContainer({ children }) {
  return (
    <div className="mt-16 h-[24rem] overflow-y-scroll px-[5rem] py-7">
      {children}
    </div>
  );
}

export default CategoriesContainer;
