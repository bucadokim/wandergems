import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import PropTypes from "prop-types";
import BadgeComponent from "../badge/BadgeComponent";
import Container from "@/pages/layout/Container";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon, CompassIcon } from "lucide-react";

export default function CardComponent({
  title,
  description,
  content,
  cardImageUrl,
  imageAlt = title,
  badgeId,
  badgeIds,
  variant = "default",
  buttonText = buttonText,
}) {
  if (variant === "floating") {
    return (
      <div className="w-full pt-20">
        <Card className="relative w-full flex flex-col align-items-stretch h-full min-h-62.5 pt-20 text-center shadow-md overflow-visible border-accent border rounded-xl">
          <div className="absolute -top-20 left-1/2 -translate-x-1/2">
            <div className="h-35 w-35 overflow-hidden rounded-full border-4 border-background">
              <img
                src={cardImageUrl}
                alt={imageAlt}
                width={112}
                height={112}
                className="h-full w-full border object-cover"
              />
            </div>
          </div>

          <CardHeader>
            <CardTitle className="text-2xl  font-secondary ">{title}</CardTitle>
          </CardHeader>

          <CardContent className="space-y-6">
            <CardDescription className="text-sm text-foreground">
              {description}
            </CardDescription>

            <Button onClick className="w-full text-background bg-accent">
              {buttonText}
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <Card className="relative w-full h-full overflow-visible shadow-md">
      <img
        src={cardImageUrl}
        alt={imageAlt}
        className="relative  aspect-video w-full object-cover "
      />
      <CardHeader>
        <CardTitle className="text-basefont-bold">{title}</CardTitle>
        <Container contentStyles="flex flex-col gap-2">
          <CardDescription className=" text-sm font-medium">
            {description}
          </CardDescription>
          <CardDescription className="text-xs text-foreground">
            {content}
          </CardDescription>
        </Container>
      </CardHeader>
      <CardContent>
        {/* <BadgeComponent badgeId={badgeId} badgeIds={badgeIds} /> */}
      </CardContent>
      <Button className="absolute -right-4 -bottom-4 z-1 p-5 bg-foreground text-background shadow-lg">
        <CompassIcon className="w-4 h-4" />
        {buttonText}
      </Button>
    </Card>
  );
}

CardComponent.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  content: PropTypes.string,
  badgeId: PropTypes.string,
  badgeIds: PropTypes.arrayOf(PropTypes.string),
  buttonText: PropTypes.string,
  imageAlt: PropTypes.string,
  cardImageUrl: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(["default", "floating"]),
};
