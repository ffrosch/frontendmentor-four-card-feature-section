import CalculatorIcon from "@/assets/icon-calculator.svg";
import KarmaIcon from "@/assets/icon-karma.svg";
import SupervisorIcon from "@/assets/icon-supervisor.svg";
import TeamBuilderIcon from "@/assets/icon-team-builder.svg";
import type { CardData } from "@/types";

const data: CardData[] = [
  {
    title: "Supervisor",
    description: "Monitors activity to identify project roadblocks",
    image: SupervisorIcon,
    color: "cyan",
    alt: "a magnifying glass with an eye inside",
  },
  {
    title: "Team Builder",
    description:
      "Scans our talent network to create the optimal team for your project",
    image: TeamBuilderIcon,
    color: "red",
    alt: "a stylized website with a small house in front",
  },
  {
    title: "Karma",
    description: "Regularly evaluates our talent to ensure quality",
    image: KarmaIcon,
    color: "orange",
    alt: "a yellow lightbulb",
  },
  {
    title: "Calculator",
    description:
      "Uses data from past projects to provide better delivery estimates",
    image: CalculatorIcon,
    color: "blue",
    alt: "a desktop monitor",
  },
];

export default data;
