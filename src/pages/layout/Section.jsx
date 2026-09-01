import PropTypes from "prop-types";

export default function Section({
  title,
  subtitle,
  children,
  containerStyles,
  contentStyles,

  showHeader = true,
}) {
  return (
    <section
      className={`${containerStyles} pt-10 flex flex-col gap-4 items-start justify-start `}
    >
      {showHeader && (title || subtitle) && (
        <div className="flex flex-col gap-4 items-start border-l-5 border-accent px-5 justify-start text-center">
          {title && (
            <h1 className="text-5xl text-foreground font-secondary font-medium">
              {title}
            </h1>
          )}
          {subtitle && (
            <p className="text-base text-foreground font-primary">{subtitle}</p>
          )}
        </div>
      )}

      <div className={`w-full ${contentStyles || ""}`}>{children}</div>
    </section>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  children: PropTypes.node.isRequired,
  containerStyles: PropTypes.string,
  contentStyles: PropTypes.string,
  showHeader: PropTypes.bool,
};
