import React from 'react';
import { DiFirebase, DiReact, DiBootstrap } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium debitis laudantium alias neque quisquam perspiciatis totam nemo molestias numquam fugiat dolor ad nesciunt cumque doloribus fugit, sint facilis. Facere, maxime.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem"/>
        <ListContainer>
          <ListTitle>
            Front-end
          </ListTitle>
          <ListParagraph>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam totam illo ea assumenda quaerat velit voluptas libero harum. Recusandae repellendus rem delectus corporis dolorum ut dicta dignissimos dolor iure est?
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem"/>
        <ListContainer>
          <ListTitle>
            Back-end
          </ListTitle>
          <ListParagraph>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam totam illo ea assumenda quaerat velit voluptas libero harum. Recusandae repellendus rem delectus corporis dolorum ut dicta dignissimos dolor iure est?
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiBootstrap size="3rem"/>
        <ListContainer>
          <ListTitle>
            UI/UX
          </ListTitle>
          <ListParagraph>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam totam illo ea assumenda quaerat velit voluptas libero harum. Recusandae repellendus rem delectus corporis dolorum ut dicta dignissimos dolor iure est?
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
