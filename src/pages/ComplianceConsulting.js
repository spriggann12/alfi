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

const ComplianceConsulting = () => (
  <PageWrapper>
    <ContentWrapper>
      <Section>
        <Container>
          <Title>Compliance Consulting</Title>
          <Paragraph>
            Our Compliance Consulting service provides expert guidance to help your organization meet industry-specific regulations and standards, such as GDPR, HIPAA, PCI-DSS, and more.
          </Paragraph>
          <Paragraph>
            <strong>Requirements:</strong>
            <ul>
              <li>Understanding of applicable regulations and standards.</li>
              <li>Access to relevant documentation and systems for assessment.</li>
              <li>Collaboration with legal and compliance teams.</li>
              <li>Clear objectives and timelines for achieving compliance.</li>
            </ul>
          </Paragraph>
          <Paragraph>
            We work closely with your team to ensure compliance while minimizing the impact on your operations, providing a comprehensive plan for achieving and maintaining regulatory standards.
          </Paragraph>
        </Container>
      </Section>
    </ContentWrapper>
    <Footer>
      <p>© 2024 CRAP. All Rights Reserved.</p>
    </Footer>
  </PageWrapper>
);

export default ComplianceConsulting;
