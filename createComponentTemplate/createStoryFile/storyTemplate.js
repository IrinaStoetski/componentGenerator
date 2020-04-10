const camelCaseTransform = require('../../helpers/camelCaseTransform');

const getStoryTemplateData = (name) => {
  let nameCamelCased = camelCaseTransform(name);
  return `
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';
import withReadme from 'storybook-readme/with-readme';

// Readme for component
import Readme from './README.md';

// Decorators
import { Section } from '../../../.storybook/decorators';

// Components
import ${name} from './index';
import get${name}Styles from './${nameCamelCased}.style';

storiesOf('NAME YOUR STORY ', module)
  .addDecorator(withKnobs)
  .addParameters({ jest: ['${nameCamelCased}'] })
  .addDecorator(withReadme(Readme))
  .add('${name}', () => (
    <div css={[get${name}Styles()]}>
      <Section>
        <${name} />
        <${name} />
        <${name} />
      </Section>
    </div>
  ));
`
}
module.exports = getStoryTemplateData;
