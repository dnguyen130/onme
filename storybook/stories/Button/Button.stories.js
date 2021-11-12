import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Text } from 'react-native';
import CenterView from '../CenterView';

import BigButton from '../../../comps/BigButton';
import BackButton from '../../../comps/BackButton';
import Card from '../../../comps/Card';
import Input from '../../../comps/Input';
import LocButton from '../../../comps/LocButton';
import NavBar from '../../../comps/NavBar';
import SmallButton from '../../../comps/SmallButton';
import TextDivider from '../../../comps/TextDivider';
import TextLink from '../../../comps/TextLink';
import Title from '../../../comps/Title';
import Toggle from '../../../comps/Toggle';


storiesOf('Comps', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('BackButton', () => (
    <BackButton />
  ))
  .add('PopUp', () => (
    <BackButton />
  ))
  .add('BigButton', () => (
    <BigButton />
  ))
  .add('Card', () => (
    <Card />
  ))
  .add('Input', () => (
    <Input />
  ))
  .add('LocButton', () => (
    <LocButton />
  ))
  .add('NavBar', () => (
    <NavBar />
  ))
  .add('SmallButton', () => (
    <SmallButton />
  ))
  .add('TextDivider', () => (
    <TextDivider />
  ))
  .add('TextLink', () => (
    <TextLink />
  ))
  .add('Title', () => (
    <Title />
  ))
  .add('Toggle', () => (
    <Toggle />
  ));