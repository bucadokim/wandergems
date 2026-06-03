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
import { TreePine } from "lucide-react";

export default function CardComponent({
  title,
  description,
  content,
  cardImageUrl,
  imageAlt = title,
  badgeId,
  badgeIds,
  variant = "default",
  buttonText = "Explore More",
}) {
  if (variant === "floating") {
    return (
      <Card className="relative w-full h-full pt-20 text-center shadow-md overflow-visible border-accent border rounded-xl">
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
          <CardTitle className="text-2xl text-foreground font-secondary ">
            {title}
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-6">
          <CardDescription className="text-base">{description}</CardDescription>

          <Button className="w-full text-background bg-accent">
            {buttonText}
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full h-full shadow-md border-none ">
      <img
        src={cardImageUrl}
        alt={imageAlt}
        className="relative z-20 aspect-video w-full object-cover "
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
        <BadgeComponent badgeId={badgeId} badgeIds={badgeIds} />
      </CardContent>
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
