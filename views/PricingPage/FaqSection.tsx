import styled from 'styled-components';
import Accordion from 'components/Accordion';
import SectionTitle from 'components/SectionTitle';

export default function FaqSection() {
  return (
    <Wrapper>
      <SectionTitle>FAQs</SectionTitle>
      <Accordion title="What IG Email Extractor can do for me?">
        It helps you collect business leads from IG, it extracts emails from IG followers, following, hashtag, liker, commenter and location.
      </Accordion>
      <Accordion title="What is the difference between a Free account and a Pro account?">
        Free account can only extract up to 50 emails.<br/>
        Paid account can extract unlimited emails.
      </Accordion>
      <Accordion title="How to cancel my subscription?">
        You can cancel your premium subscription at any time, by clicking the PRO button in the extension popup window, goto Pro panel and manange subscription, you can cancel or update your payment information.
        Drop us a line suport@extensionsbox.com if you have any questions about your subscription.
      </Accordion>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-top: 15rem;
  & > *:not(:first-child) {
    margin-top: 3rem;
  }
`;
