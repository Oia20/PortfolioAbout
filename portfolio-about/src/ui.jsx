import React, { Suspense, useRef, useState, useEffect, Fragment } from 'react';
import Media from 'react-media';
import Scene from "./scene"
import SmScene from "./smallScene"


export default function UI() {
    return (
  <Media queries={{ large: { minWidth: 1000 }, small: { maxWidth: 999, minHeight: 100} }}>
    {/* <Wide /> */}
    {matches => (
            <Fragment>
              {matches.large && <Scene />}
              {matches.small && <SmScene />}
            </Fragment>
          )}
   </Media>
    )
}