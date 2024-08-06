function Error({ children }) {
  return (
    <p className="absolute right-[50%] top-[75%] flex h-[3.6rem] w-[80%] translate-x-[50%] items-center justify-center rounded-full bg-red-100 text-2xl text-red-600">
      {children}
    </p>
  );
}

export default Error;
