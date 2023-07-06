import React from 'react';
import styled from 'styled-components';
import AutofitGrid from 'components/AutofitGrid';
import PricingCard from 'components/PricingCard';
import SectionTitle from 'components/SectionTitle';

export default function PricingTablesSection() {
  return (
    <Wrapper>
      <SectionTitle>Pricing</SectionTitle>
      <AutofitGrid>
        <PricingCard
          title="free"
          description="Get started for free"
          benefits={
            [
              'Total 50 emails',
              'Scrape followers & following for any user from Instagramt',
              'Scrape publisher from any hashtag on Instram',
              'Scrape publisher from any location on Instagram',
              'Scrape the likers & commenters of any post from Intagram',
              'Export data to CSV files']}
        >
          $0<span>/month</span>
        </PricingCard>
        <PricingCard
          title="pro"
          description="Cancel anytime"
          benefits={[
            'Unlimited emails',
            'Scrape followers & following for any user from Instagramt',
            'Scrape publisher from any hashtag on Instram',
            'Scrape publisher from any location on Instagram',
            'Scrape the likers & commenters of any post from Intagram',
            'Export data to CSV files'
          ]}
        >
          $12.95<span>/month</span>
        </PricingCard>
      </AutofitGrid>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  & > *:not(:first-child) {
    margin-top: 8rem;
  }
`;
