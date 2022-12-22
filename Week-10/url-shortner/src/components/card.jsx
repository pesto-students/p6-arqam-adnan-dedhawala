export const Card = ({ children, ...props }) => {
  const wrapperClass = props.className
    ? "p-4 border border-gray-200 rounded-md bg-white " + props.className
    : "p-4 border border-gray-200 rounded-md bg-white";
  return <div className={wrapperClass}>{children}</div>;
};
