import { Badge } from "@/components/ui/badge";
import {
  Bird,
  Building,
  Coffee,
  Droplet,
  Palmtree,
  TreePine,
} from "lucide-react";
import PropTypes from "prop-types";

const badgeOptions = {
  nature: {
    label: "Nature",
    Icon: TreePine,
    className: "border-accent text-accent",
  },
  spring: {
    label: "Springs",
    Icon: Droplet,
    className: "border-primary text-primary",
  },
  beach: {
    label: "Beaches",
    Icon: Palmtree,
    className: "border-success text-success ",
  },
  cafe: {
    label: "Cafés",
    Icon: Coffee,
    className: "border-warning text-warning",
  },
  downtown: {
    label: "Downtown",
    Icon: Building,
    className: "border-destructive text-destructive",
  },
  wildlife: {
    label: "Wildlife",
    Icon: Bird,
    className: "border-info text-info",
  },
};

export default function BadgeComponent({ badgeId, badgeIds = [] }) {
  const badges = badgeIds.length ? badgeIds : badgeId ? [badgeId] : [];

  return (
    <div className="flex flex-wrap items-center gap-2">
      {badges.map((id, index) => {
        const badge = badgeOptions[id];

        if (!badge) {
          return null;
        }

        const Icon = badge.Icon;

        return (
          <Badge
            key={`${id}-${index}`}
            variant="outline"
            className={`rounded-full font-bold text-center items-center justify-center ${badge.className}`}
          >
            {Icon && <Icon />}
            {badge.label}
          </Badge>
        );
      })}
    </div>
  );
}

BadgeComponent.propTypes = {
  badgeId: PropTypes.string,
  badgeIds: PropTypes.arrayOf(PropTypes.string),
};
