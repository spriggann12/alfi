import React from 'react';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';

const Section = styled.section`
  padding: 60px 0;
  text-align: center;
  background-color: #121212;
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

const SecurityTraining = () => (
  <Section>
    <Container>
      <Title>Security Training</Title>
      <Paragraph>
        Our Security Training service equips your staff with the knowledge and skills they need to recognize and prevent cyber threats. We offer tailored training programs for various levels of expertise.
      </Paragraph>
      <Paragraph>
        <strong>Requirements:</strong>
        <ul>
          <li>Identification of key training needs and target audience.</li>
          <li>Access to training facilities or platforms.</li>
          <li>Customizable training modules based on organizational roles.</li>
          <li>Post-training assessments to measure effectiveness.</li>
        </ul>
      </Paragraph>
      <Paragraph>
        Our interactive training sessions are designed to keep participants engaged, ensuring they retain critical information and apply it effectively in their daily work.
      </Paragraph>
    </Container>
  </Section>
);

export default SecurityTraining;
