import { useId } from 'react';
import GoalCard from '../../molecules/GoalCard/GoalCard';
import {
  EmptyState,
  Grid,
  Section,
  SectionDescription,
  SectionHeader,
  SectionTitle,
  SkeletonCard,
} from './GoalList.styled';
import type { GoalListProps } from './GoalList.types';

const GoalList = ({
  goals,
  title,
  description,
  isLoading = false,
  skeletonCount = 6,
  emptyMessage = 'No goals match your selection.',
  minColumnWidth = '16rem',
  progressByGoal,
  ...rest
}: GoalListProps) => {
  const titleId = useId();

  if (!isLoading && goals.length === 0) {
    return (
      <Section aria-labelledby={title ? titleId : undefined} {...rest}>
        {title && (
          <SectionHeader>
            <SectionTitle id={titleId}>{title}</SectionTitle>
            {description && <SectionDescription>{description}</SectionDescription>}
          </SectionHeader>
        )}
        <EmptyState>{emptyMessage}</EmptyState>
      </Section>
    );
  }

  return (
    <Section aria-labelledby={title ? titleId : undefined} {...rest}>
      {title && (
        <SectionHeader>
          <SectionTitle id={titleId}>{title}</SectionTitle>
          {description && <SectionDescription>{description}</SectionDescription>}
        </SectionHeader>
      )}

      <Grid $minColumnWidth={minColumnWidth} aria-busy={isLoading || undefined}>
        {isLoading
          ? Array.from({ length: skeletonCount }, (_, index) => (
              <SkeletonCard key={index} aria-hidden="true" />
            ))
          : goals.map((goal) => (
              <li key={goal.number}>
                <GoalCard goal={goal} progress={progressByGoal?.[goal.number]} />
              </li>
            ))}
      </Grid>
    </Section>
  );
};

export default GoalList;
