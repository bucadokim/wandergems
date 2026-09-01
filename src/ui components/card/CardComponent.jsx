import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon, CompassIcon } from "lucide-react";
import PropTypes from "prop-types";
import BadgeComponent from "../badge/BadgeComponent";
import Container from "@/pages/layout/Container";

export default function CardComponent({
  title,
  description,
  content,
  cardImageUrl,
  imageAlt = title,
  badgeId,
  badgeIds,
  variant = "default",
  buttonText,
}) {
  if (variant === "floating") {
    return (
      <div className="w-full pt-20">
        <Card className="relative flex h-full min-h-62.5 w-full flex-col items-stretch overflow-visible rounded-xl border border-accent pt-20 text-center shadow-md">
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
            <CardTitle className="text-2xl font-secondary">{title}</CardTitle>
          </CardHeader>

          <CardContent className="space-y-6">
            <CardDescription className="text-sm text-foreground">
              {description}
            </CardDescription>

            <Button className="w-full bg-accent text-background">
              {buttonText}
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (variant === "news") {
    return (
      <Card className="relative h-full w-full gap-0 overflow-hidden   py-0 shadow-md">
        <div className="flex h-full flex-row">
          <div className="h-35 w-45 shrink-0 overflow-hidden sm:h-full">
            <img
              src={cardImageUrl}
              alt={imageAlt}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="flex h-full flex-col p-4">
            <CardHeader className="p-0">
              <CardTitle className="text-base font-bold leading-tight">
                {title}
              </CardTitle>
            </CardHeader>

            <CardContent className="mt-3 flex flex-1 flex-col px-0">
              <CardDescription className="text-sm text-foreground">
                {description}
              </CardDescription>

              <Button className="absolute p-5 bottom-3 right-3 self-end  text-background bg-primary ">
                {buttonText}
                <ArrowRightIcon size={4} />
              </Button>
            </CardContent>
          </div>
        </div>
      </Card>
    );
  }

  return (
    <Card className="relative h-full w-full overflow-visible bg-background shadow-md">
      <img
        src={cardImageUrl}
        alt={imageAlt}
        className="relative aspect-video w-full object-cover"
      />
      <CardHeader>
        <CardTitle className="text-base font-bold">{title}</CardTitle>
        <Container contentStyles="flex flex-col gap-2">
          <CardDescription className="text-sm font-medium">
            {description}
          </CardDescription>
          <CardDescription className="text-xs text-foreground">
            {content}
          </CardDescription>
        </Container>
      </CardHeader>
      <CardContent></CardContent>
      <Button className="absolute -right-4 -bottom-4 z-1 bg-foreground p-5 text-background shadow-lg">
        <CompassIcon className="h-4 w-4" />
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
  variant: PropTypes.oneOf(["default", "floating", "news"]),
};
