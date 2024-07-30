function CategoriesContainer({ children }) {
  return (
    <ul className="mt-16 h-[36rem] overflow-y-scroll px-[5rem] py-7">
      {children}
    </ul>
  );
}

export default CategoriesContainer;
