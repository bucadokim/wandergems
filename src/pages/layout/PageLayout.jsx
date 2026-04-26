import Header from "./Header";
import { cn } from "@/lib/utils";
import PropTypes from "prop-types";

export default function PageLayout({
  children,
  containerStyles,
  contentStyles,
}) {
  return (
    <section className="relative">
      <div className="item-center mx-auto flex flex-col justify-center">
        <div className={containerStyles}>
          <Header />
          <div className={cn(`min-h-[680px] `, contentStyles)}>{children}</div>
        </div>
      </div>
    </section>
  );
}

PageLayout.propTypes = {
  children: PropTypes.node.isRequired,
  containerStyles: PropTypes.string,
  contentStyles: PropTypes.string,
};
