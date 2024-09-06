function Error({ message, size = "lg" }) {
  if (size === "lg")
    return <p className="text-center text-3xl text-red-300">{message}</p>;
  if (size === "sm")
    return <p className="text-center text-lg text-red-300">{message}</p>;
}

export default Error;
