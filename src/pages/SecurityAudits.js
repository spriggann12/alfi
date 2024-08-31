import React from 'react';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #000; /* Set background color to black */
`;

const ContentWrapper = styled.div`
  flex: 1;
`;

const Section = styled.section`
  padding: 60px 0;
  text-align: center;
  background-color: #000; /* Set section background color to black */
  color: #e0e0e0;
`;

const Title = styled.h2`
  font-size: 36px;
  margin-bottom: 20px;
  color: #00bfff;
`;

const Paragraph = styled.p`
  font-size: 18px;
  color: #cccccc;
  line-height: 1.6;
  margin-bottom: 20px;
  text-align: left;
`;

const Footer = styled.footer`
  background-color: #000; /* Set footer background color to black */
  color: #e0e0e0;
  padding: 20px 0;
  text-align: center;
  position: relative;
  width: 100%;
`;

const SecurityAudits = () => (
  <PageWrapper>
    <ContentWrapper>
      <Section>
        <Container>
          <Title>Security Audits</Title>
          <Paragraph>
            Our Security Audit service ensures that your organization complies with industry standards and best practices. This service includes a thorough examination of your policies, procedures, and technical controls.
          </Paragraph>
          <Paragraph>
            <strong>Requirements:</strong>
            <ul>
              <li>Documentation of security policies and procedures.</li>
              <li>Access to systems for configuration review.</li>
              <li>Interviews with key personnel to assess security awareness.</li>
              <li>Access to compliance documentation (if applicable).</li>
            </ul>
          </Paragraph>
          <Paragraph>
            We provide a detailed audit report with findings, recommendations, and a roadmap for achieving and maintaining compliance.
          </Paragraph>
        </Container>
      </Section>
    </ContentWrapper>
    <Footer>
      <p>© 2024 CRAP. All Rights Reserved.</p>
    </Footer>
  </PageWrapper>
);

export default SecurityAudits;
