import React from 'react';
import { Meta, Story } from '@storybook/react';

import { Title } from './Title.styled';

export default {
  title: 'Component/Title',
} as Meta;

const TitleStory:Story<any> = () => {
  return(
    <>
      <Title>타이틀입니다.</Title>
    </>
  );
}
export const TitleStoryAll = TitleStory.bind({});
TitleStoryAll.storyName = 'default';
