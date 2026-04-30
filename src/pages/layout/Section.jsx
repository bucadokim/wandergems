import PropTypes from "prop-types";

export default function Section({
  title,
  subtitle,
  children,
  containerStyles,
  contentStyles,
}) {
  return (
    <section
      className={`${containerStyles} pt-10 flex flex-col gap-4 items-center justify-center `}
    >
      <div className="flex flex-col gap-4 items-center justify-center text-center">
        <h1 className="text-7xl text-foreground font-secondary font-medium">
          {title}
        </h1>
        <p className="text-base text-foreground font-primary">{subtitle}</p>
      </div>

      <div className={contentStyles}>{children}</div>
    </section>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  containerStyles: PropTypes.string,
  contentStyles: PropTypes.string,
};
