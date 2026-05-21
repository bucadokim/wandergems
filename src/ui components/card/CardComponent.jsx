import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import PropTypes from "prop-types";
import BadgeComponent from "../badge/BadgeComponent";
import Container from "@/pages/layout/Container";

export default function CardComponent({
  title,
  description,
  content,
  cardImageUrl,
  badgeId,
  badgeIds,
}) {
  return (
    <Card className="w-full h-full shadow-md border-none ">
      <img
        src={cardImageUrl}
        alt="Event cover"
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
  content: PropTypes.string.isRequired,
  badgeId: PropTypes.string,
  badgeIds: PropTypes.arrayOf(PropTypes.string),
  cardImageUrl: PropTypes.string.isRequired,
};
