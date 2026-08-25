import { CardWrapper } from './GoalCard.styled';
import type { GoalCardProps } from './GoalCard.types';

const GoalCard = (props: GoalCardProps) => {
  return <CardWrapper {...props} />;
};

export default GoalCard;
