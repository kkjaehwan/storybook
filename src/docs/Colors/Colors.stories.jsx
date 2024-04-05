import React, { useEffect, useRef, useState } from 'react';
import styles from './colors.module.scss';
import { ColorBox } from '@components/ColorBox/ColorBox';
import { ColorPalette } from '@components/ColorPalette/ColorPalette';

export default {
  title: 'Colors',
};

const ColorTable = () => {
  const colorVariables = [
    { variableType: 'Background', level: 'Primary', color: 'var(--background-primary)' },
    { variableType: 'Background', level: 'Secondary', color: 'var(--background-secondary)' },
    { variableType: 'Text', level: 'Primary Default', color: 'var(--text-primary-default)' },
    { variableType: 'Text', level: 'Primary Hover', color: 'var(--text-primary-hover)' },
    { variableType: 'Text', level: 'Primary Active', color: 'var(--text-primary-active)' },
    { variableType: 'Text', level: 'Primary Disabled', color: 'var(--text-primary-disabled)' },
    { variableType: 'Text', level: 'Primary Inverse', color: 'var(--text-primary-inverse)' },
    { variableType: 'Text', level: 'Secondary Default', color: 'var(--text-secondary-default)' },
    { variableType: 'Text', level: 'Secondary Hover', color: 'var(--text-secondary-hover)' },
    { variableType: 'Text', level: 'Secondary Active', color: 'var(--text-secondary-active)' },
    { variableType: 'Text', level: 'Secondary Disabled', color: 'var(--text-secondary-disabled)' },
    { variableType: 'Text', level: 'Secondary Inverse', color: 'var(--text-secondary-inverse)' },
    { variableType: 'Text', level: 'Tertiary', color: 'var(--text-tertiary)' },
    { variableType: 'Text', level: 'Tertiary Hover', color: 'var(--text-tertiary-hover)' },
    { variableType: 'Text', level: 'Tertiary Active', color: 'var(--text-tertiary-active)' },
    { variableType: 'Text', level: 'Tertiary Disabled', color: 'var(--text-tertiary-disabled)' },
    { variableType: 'Text', level: 'Tertiary Inverse', color: 'var(--text-tertiary-inverse)' },
    { variableType: 'Border', level: 'Primary', color: 'var(--border-primary)' },
    { variableType: 'Border', level: 'Secondary', color: 'var(--border-secondary)' },
    { variableType: 'Border', level: 'Tertiary', color: 'var(--border-tertiary)' },
    { variableType: 'Border', level: 'Inverse', color: 'var(--border-inverse)' },
    { variableType: 'Surface', level: 'Primary', color: 'var(--surface-primary)' },
    { variableType: 'Surface', level: 'Secondary', color: 'var(--surface-secondary)' },
    { variableType: 'Surface', level: 'Tertiary', color: 'var(--surface-tertiary)' },
    { variableType: 'Surface', level: 'Inverse', color: 'var(--surface-inverse)' },
    { variableType: 'Surface', level: 'System Safe', color: 'var(--surface-system-safe)' },
    { variableType: 'Surface', level: 'System Warn', color: 'var(--surface-system-warn)' },
    { variableType: 'Surface', level: 'System Danger', color: 'var(--surface-system-danger)' }, { variableType: 'Button', level: '1 Text Default', color: 'var(--button-1-text-default)' },
    { variableType: 'Button', level: '1 Text Hover', color: 'var(--button-1-text-hover)' },
    { variableType: 'Button', level: '1 Text Active', color: 'var(--button-1-text-active)' },
    { variableType: 'Button', level: '1 Text Disabled', color: 'var(--button-1-text-disabled)' },
    { variableType: 'Button', level: '1 Text Inverse', color: 'var(--button-1-text-inverse)' },
    { variableType: 'Button', level: '1 Surface Default', color: 'var(--button-1-surface-default)' },
    { variableType: 'Button', level: '1 Surface Hover', color: 'var(--button-1-surface-hover)' },
    { variableType: 'Button', level: '1 Surface Active', color: 'var(--button-1-surface-active)' },
    { variableType: 'Button', level: '1 Surface Disabled', color: 'var(--button-1-surface-disabled)' },
    { variableType: 'Button', level: '1 Surface Inverse', color: 'var(--button-1-surface-inverse)' },
    { variableType: 'Button', level: '1 Border Default', color: 'var(--button-1-border-default)' },
    { variableType: 'Button', level: '1 Border Hover', color: 'var(--button-1-border-hover)' },
    { variableType: 'Button', level: '1 Border Active', color: 'var(--button-1-border-active)' },
    { variableType: 'Button', level: '1 Border Disabled', color: 'var(--button-1-border-disabled)' },
    { variableType: 'Button', level: '1 Border Inverse', color: 'var(--button-1-border-inverse)' },
    { variableType: 'Button', level: '2 Text Default', color: 'var(--button-2-text-default)' },
    { variableType: 'Button', level: '2 Text Hover', color: 'var(--button-2-text-hover)' },
    { variableType: 'Button', level: '2 Text Active', color: 'var(--button-2-text-active)' },
    { variableType: 'Button', level: '2 Text Disabled', color: 'var(--button-2-text-disabled)' },
    { variableType: 'Button', level: '2 Text Inverse', color: 'var(--button-2-text-inverse)' },
    { variableType: 'Button', level: '2 Surface Default', color: 'var(--button-2-surface-default)' },
    { variableType: 'Button', level: '2 Surface Hover', color: 'var(--button-2-surface-hover)' },
    { variableType: 'Button', level: '2 Surface Active', color: 'var(--button-2-surface-active)' },
    { variableType: 'Button', level: '2 Surface Disabled', color: 'var(--button-2-surface-disabled)' },
    { variableType: 'Button', level: '2 Surface Inverse', color: 'var(--button-2-surface-inverse)' },
    { variableType: 'Button', level: '2 Border Default', color: 'var(--button-2-border-default)' },
    { variableType: 'Button', level: '2 Border Hover', color: 'var(--button-2-border-hover)' },
    { variableType: 'Button', level: '2 Border Active', color: 'var(--button-2-border-active)' },
    { variableType: 'Button', level: '2 Border Disabled', color: 'var(--button-2-border-disabled)' },
    { variableType: 'Button', level: '2 Border Inverse', color: 'var(--button-2-border-inverse)' },
    { variableType: 'Button', level: '3 Text Default', color: 'var(--button-3-text-default)' },
    { variableType: 'Button', level: '3 Text Hover', color: 'var(--button-3-text-hover)' },
    { variableType: 'Button', level: '3 Text Active', color: 'var(--button-3-text-active)' },
    { variableType: 'Button', level: '3 Text Disabled', color: 'var(--button-3-text-disabled)' },
    { variableType: 'Button', level: '3 Text Inverse', color: 'var(--button-3-text-inverse)' },
    { variableType: 'Button', level: '3 Surface Default', color: 'var(--button-3-surface-default)' },
    { variableType: 'Button', level: '3 Surface Hover', color: 'var(--button-3-surface-hover)' },
    { variableType: 'Button', level: '3 Surface Active', color: 'var(--button-3-surface-active)' },
    { variableType: 'Button', level: '3 Surface Disabled', color: 'var(--button-3-surface-disabled)' },
    { variableType: 'Button', level: '3 Surface Inverse', color: 'var(--button-3-surface-inverse)' },
    { variableType: 'Button', level: '3 Border Default', color: 'var(--button-3-border-default)' },
    { variableType: 'Button', level: '3 Border Hover', color: 'var(--button-3-border-hover)' },
    { variableType: 'Button', level: '3 Border Active', color: 'var(--button-3-border-active)' },
    { variableType: 'Button', level: '3 Border Disabled', color: 'var(--button-3-border-disabled)' },
    { variableType: 'Button', level: '3 Border Inverse', color: 'var(--button-3-border-inverse)' },
    { variableType: 'Button', level: '4 Text Default', color: 'var(--button-4-text-default)' },
    { variableType: 'Button', level: '4 Text Hover', color: 'var(--button-4-text-hover)' },
    { variableType: 'Button', level: '4 Text Active', color: 'var(--button-4-text-active)' },
    { variableType: 'Button', level: '4 Text Disabled', color: 'var(--button-4-text-disabled)' },
    { variableType: 'Button', level: '4 Text Inverse', color: 'var(--button-4-text-inverse)' },
    { variableType: 'Button', level: '4 Surface Default', color: 'var(--button-4-surface-default)' },
    { variableType: 'Button', level: '4 Surface Hover', color: 'var(--button-4-surface-hover)' },
    { variableType: 'Button', level: '4 Surface Active', color: 'var(--button-4-surface-active)' },
    { variableType: 'Button', level: '4 Surface Disabled', color: 'var(--button-4-surface-disabled)' },
    { variableType: 'Button', level: '4 Surface Inverse', color: 'var(--button-4-surface-inverse)' },
    { variableType: 'Button', level: '4 Border Default', color: 'var(--button-4-border-default)' },
    { variableType: 'Button', level: '4 Border Hover', color: 'var(--button-4-border-hover)' },
    { variableType: 'Button', level: '4 Border Active', color: 'var(--button-4-border-active)' },
    { variableType: 'Button', level: '4 Border Disabled', color: 'var(--button-4-border-disabled)' },
    { variableType: 'Button', level: '4 Border Inverse', color: 'var(--button-4-border-inverse)' },
    { variableType: 'Button', level: '5 Text Default', color: 'var(--button-5-text-default)' },
    { variableType: 'Button', level: '5 Text Hover', color: 'var(--button-5-text-hover)' },
    { variableType: 'Button', level: '5 Text Active', color: 'var(--button-5-text-active)' },
    { variableType: 'Button', level: '5 Text Disabled', color: 'var(--button-5-text-disabled)' },
    { variableType: 'Button', level: '5 Text Inverse', color: 'var(--button-5-text-inverse)' },
    { variableType: 'Button', level: '5 Surface Default', color: 'var(--button-5-surface-default)' },
    { variableType: 'Button', level: '5 Surface Hover', color: 'var(--button-5-surface-hover)' },
    { variableType: 'Button', level: '5 Surface Active', color: 'var(--button-5-surface-active)' },
    { variableType: 'Button', level: '5 Surface Disabled', color: 'var(--button-5-surface-disabled)' },
    { variableType: 'Button', level: '5 Surface Inverse', color: 'var(--button-5-surface-inverse)' },
    { variableType: 'Button', level: '5 Border Default', color: 'var(--button-5-border-default)' },
    { variableType: 'Button', level: '5 Border Hover', color: 'var(--button-5-border-hover)' },
    { variableType: 'Button', level: '5 Border Active', color: 'var(--button-5-border-active)' },
    { variableType: 'Button', level: '5 Border Disabled', color: 'var(--button-5-border-disabled)' },
    { variableType: 'Button', level: '5 Border Inverse', color: 'var(--button-5-border-inverse)' },

  ];


  return (
    <table>
      <thead>
        <tr>
          <th>Variable Type</th>
          <th>Level</th>
          <th>Color</th>
        </tr>
      </thead>
      <tbody>
        {colorVariables.map(({ variableType, level, color }) => (
          <tr key={`${variableType}-${level}`}>
            <td>{variableType}</td>
            <td>{level}</td>
            <td>
              <ColorBox colorHex={color} colorName={color.replace(/^var\(|\)$/g, '')} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};


const colors = [
  'brand-blue',
  'brand-green',
  'brand-yellow',
  'brand-red',
  'brand-gray',
  'brand-black',
  'brand-white',
];
const colorScales = [
  '100',
  '200',
  '300',
  '400',
  '500',
  '600',
];


export const Colors = () => (
  <div className={styles.color_div}>
    <div>
      <div>
        1st Level Color Variable Palette
      </div>
      <ColorPalette colors={colors} colorScales={colorScales} />
    </div>
    <div>
      <div>
        2nd Level Color Variable Palette
      </div>
      <div className={styles.toggle_switch}>
      </div><ColorTable />
    </div>
  </div >
);
