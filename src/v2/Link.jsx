const Link = (props) => {
  const allProps = {
    target: props.self ? "_self" : "_blank",
    rel: "noreferrer",
    ...props,
  };
  return (
    <a
      href={props.href}
      {...allProps}
      className={
        "hover:underline hover:underline-offset-8 cursor-pointer whitespace-pre " +
        props.className
      }
    >
      {props.children}
    </a>
  );
};

export default Link;
