import React from "react";

import {STitle, SDate, SDescription, SActionButton} from './styles';

const Card = (props: any) => {
  return (<div>
    <STitle>Titulo!</STitle>
    <SDate>2019</SDate>
    <SDescription>Integer iaculis vestibulum malesuada. Maecenas accumsan eleifend mi, non tempor massa elementum vel. Vivamus condimentum at orci ultricies aliquam. Etiam gravida ullamcorper metus, in suscipit lacus sagittis ultrices.</SDescription>
    <SActionButton>Gender1</SActionButton>
    <SActionButton>Gender2</SActionButton>
  </div>)
}

export default Card;
