import styled from 'styled-components';
import Page from 'components/Page';
import RichText from 'components/RichText';

export default function ContactPage() {
  return (
    <Page title="Terms of Service">
      <TermsOfServiceContainer>
        <RichText>
          <strong>
            1. Acceptance
            <br/>
            <br/>
          </strong>
          By using or visiting our website and Chrome extensions, you signify that you have read, understand and agree to be bound by our "Terms of service or Agreement".
          <br/>
          <br/>

          <strong>
            2. Ownership
            <br/>
            <br/>
          </strong>
          You may not claim intellectual or exclusive ownership rights to any of our products. All products are property of leadsbotkit.com . They are provided “as is” without warranty of any kind, expressed or implied. We shall not be liable for any damages, including but not limited to, direct, indirect, special, incidental or consequential damages or losses that occur out of the use or inability to use our products.
          <br/>
          <br/>

          <strong>
            3. Support
            <br/>
            <br/>
          </strong>
          Support and automatic product updates are provided for the term defined by the account type and are based on the date of purchase. After the subscription has expired a new subscription will need to be purchased in order to continue receiving support and product updates.
          <br/>
          <br/>

          <strong>
            4. Payments & Refund Policy
            <br/>
            <br/>
          </strong>
          Our order process is conducted by our online reseller Paddle.com. Paddle.com is the Merchant of Record for all our orders. Paddle provides all customer service inquiries and handles returns. We provide 7 day money back guarantee as part of their refund policy from the moment of purchase. You can request money back, if service really doesn't satisfy you or you faced with some service issues. Please, email to chenstone03@gmail.com and send your order details.
          We care about our services and customers. We want to ensure that you are happy with your purchase and that our products work correctly in your website environment.
          If you have any questions, problems or concerns with any of our products then please let me know by using the email chenstone03@gmail.com.
          <br/>
          <br/>

          <strong>
            Money Back Guarantee
            <br/>
            <br/>
          </strong>
          If you have any irresolvable issues getting one of our services to work or if you’re completely unhappy with it, we will be happy to provide a full refund within 7 days* of the original purchase.
          <br/>
          <br/>

          <strong>
            5. Transactional Emails
            <br/>
            <br/>
          </strong>
          ExtensionsBox may on occasion send you email notifications related to your service . These transactional emails may include notification of changes to our terms and conditions, license expiration notices and other transactional emails related to your purchase.
          <br/>
          <br/>

          <strong>
            6. Price Changes
            <br/>
            <br/>
          </strong>
          ExtensionsBox reserves the right to change the price of any service at any time. Any price change will be reflected on leadsbotkit.com. In the event that any price is lowered, you will not be entitled to a refund for the difference in the price from the time you purchased the service.
          <br/>
          <br/>

          <strong>
            7. Sharing of Data
            <br/>
            <br/>
          </strong>
          We will not share your data with any third parties under any circumstances.
          <br/>
          <br/>

          <strong>
            8. Data Privacy
            <br/>
            <br/>
          </strong>
          Please refer to our Privacy Policy page.
          <br/>
          <br/>
        </RichText>
      </TermsOfServiceContainer>
    </Page>
  );
}

const TermsOfServiceContainer = styled.div`
  max-width: 90rem;
  margin: auto;
  overflow-x: auto;
`;
