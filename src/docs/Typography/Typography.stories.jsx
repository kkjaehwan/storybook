import React, { useEffect, useRef, useState } from 'react';
import styles from './typography.module.scss';


export default {
  title: 'Typography',
};
export const Typography = () => {

  const variables = [
    { type: 'default', level: '', css: 'var(--font-size-default)' },
    { type: 'title', level: '1', css: 'var(--font-size-title1)' },
    { type: 'title', level: '2', css: 'var(--font-size-title2)' },
    { type: 'title', level: '3', css: 'var(--font-size-title3)' },
    { type: 'title', level: '4', css: 'var(--font-size-title4)' },
    { type: 'title', level: '5', css: 'var(--font-size-title5)' },
    { type: 'headline', level: '1', css: 'var(--font-size-headline1)' },
    { type: 'headline', level: '2', css: 'var(--font-size-headline2)' },
    { type: 'headline', level: '3', css: 'var(--font-size-headline3)' },
    { type: 'headline', level: '4', css: 'var(--font-size-headline4)' },
    { type: 'headline', level: '5', css: 'var(--font-size-headline5)' },
    { type: 'body', level: '1', css: 'var(--font-size-body1)' },
    { type: 'body', level: '2', css: 'var(--font-size-body2)' },
    { type: 'body', level: '3', css: 'var(--font-size-body3)' },
    { type: 'body', level: '4', css: 'var(--font-size-body4)' },
    { type: 'body', level: '5', css: 'var(--font-size-body5)' },
    { type: 'callout', level: '1', css: 'var(--font-size-callout1)' },
    { type: 'callout', level: '2', css: 'var(--font-size-callout2)' },
    { type: 'callout', level: '3', css: 'var(--font-size-callout3)' },
    { type: 'callout', level: '4', css: 'var(--font-size-callout4)' },
    { type: 'callout', level: '5', css: 'var(--font-size-callout5)' },
    { type: 'subhead', level: '1', css: 'var(--font-size-subhead1)' },
    { type: 'subhead', level: '2', css: 'var(--font-size-subhead2)' },
    { type: 'subhead', level: '3', css: 'var(--font-size-subhead3)' },
    { type: 'subhead', level: '4', css: 'var(--font-size-subhead4)' },
    { type: 'subhead', level: '5', css: 'var(--font-size-subhead5)' },
    { type: 'footnote', level: '1', css: 'var(--font-size-footnote1)' },
    { type: 'footnote', level: '2', css: 'var(--font-size-footnote2)' },
    { type: 'footnote', level: '3', css: 'var(--font-size-footnote3)' },
    { type: 'footnote', level: '4', css: 'var(--font-size-footnote4)' },
    { type: 'footnote', level: '5', css: 'var(--font-size-footnote5)' },
    { type: 'button', level: '1', css: 'var(--font-size-button1)' },
    { type: 'button', level: '2', css: 'var(--font-size-button2)' },
    { type: 'button', level: '3', css: 'var(--font-size-button3)' },
    { type: 'button', level: '4', css: 'var(--font-size-button4)' },
    { type: 'button', level: '5', css: 'var(--font-size-button5)' },
    { type: 'caption', level: '1', css: 'var(--font-size-caption1)' },
    { type: 'caption', level: '2', css: 'var(--font-size-caption2)' },
    { type: 'caption', level: '3', css: 'var(--font-size-caption3)' },
    { type: 'caption', level: '4', css: 'var(--font-size-caption4)' },
    { type: 'caption', level: '5', css: 'var(--font-size-caption5)' },
    { type: 'label', level: '1', css: 'var(--font-size-label1)' },
    { type: 'label', level: '2', css: 'var(--font-size-label2)' },
    { type: 'label', level: '3', css: 'var(--font-size-label3)' },
    { type: 'label', level: '4', css: 'var(--font-size-label4)' },
    { type: 'label', level: '5', css: 'var(--font-size-label5)' },
    { type: 'quote', level: '1', css: 'var(--font-size-quote1)' },
    { type: 'quote', level: '2', css: 'var(--font-size-quote2)' },
    { type: 'quote', level: '3', css: 'var(--font-size-quote3)' },
    { type: 'quote', level: '4', css: 'var(--font-size-quote4)' },
    { type: 'quote', level: '5', css: 'var(--font-size-quote5)' },
    { type: 'badge', level: '1', css: 'var(--font-size-badge1)' },
    { type: 'badge', level: '2', css: 'var(--font-size-badge2)' },
    { type: 'badge', level: '3', css: 'var(--font-size-badge3)' },
    { type: 'badge', level: '4', css: 'var(--font-size-badge4)' },
    { type: 'badge', level: '5', css: 'var(--font-size-badge5)' },
  ];

  return (
    <div className={styles.typo_div}>
      {variables.map(({ type, level, css }) => (
        <div key=""
          style={{
            fontSize: css,
          }}>
          {type}{level}
        </div>
      ))
      }
    </div >
  );
};
