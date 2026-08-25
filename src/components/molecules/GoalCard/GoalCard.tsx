import Image from '../../atoms/Image/Image';
import { sdgColors } from '../../../styles/theme';
import {
  CardLink,
  Content,
  Description,
  GoalNumberBadge,
  Media,
  ProgressBar,
  ProgressTrack,
  Title,
} from './GoalCard.styled';
import type { GoalCardProps } from './GoalCard.types';

const GoalCard = ({ goal, layout = 'vertical', to, progress, ...rest }: GoalCardProps) => {
  const accent = sdgColors[goal.number];
  const clampedProgress =
    progress === undefined ? undefined : Math.min(100, Math.max(0, progress));

  return (
    <CardLink to={to ?? `/goals/${goal.slug}`} $accent={accent} $layout={layout} {...rest}>
      <Media>
        {goal.imageUrl && (
          <Image
            src={goal.imageUrl}
            alt=""
            ratio={layout === 'horizontal' ? '1 / 1' : '4 / 3'}
            fit="cover"
          />
        )}
        <GoalNumberBadge $accent={accent}>{goal.number}</GoalNumberBadge>
      </Media>

      <Content>
        <Title>{goal.title}</Title>
        <Description>{goal.description}</Description>

        {clampedProgress !== undefined && (
          <ProgressTrack
            role="progressbar"
            aria-valuenow={clampedProgress}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label={`Progress towards goal ${goal.number}: ${goal.title}`}
          >
            <ProgressBar $accent={accent} $value={clampedProgress} />
          </ProgressTrack>
        )}
      </Content>
    </CardLink>
  );
};

export default GoalCard;
