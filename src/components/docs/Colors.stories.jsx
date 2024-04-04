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
    { variableType: 'Text', level: 'Primary', color: 'var(--text-primary-default)' },
    { variableType: 'Text', level: 'Primary Hover', color: 'var(--text-primary-hover)' },
    { variableType: 'Text', level: 'Primary Active', color: 'var(--text-primary-active)' },
    { variableType: 'Text', level: 'Primary Disabled', color: 'var(--text-primary-disabled)' },
    { variableType: 'Text', level: 'Primary Inverse', color: 'var(--text-primary-inverse)' },
    { variableType: 'Text', level: 'Secondary', color: 'var(--text-secondary-default)' },
    { variableType: 'Text', level: 'Secondary Hover', color: 'var(--text-secondary-hover)' },
    { variableType: 'Text', level: 'Secondary Active', color: 'var(--text-secondary-active)' },
    { variableType: 'Text', level: 'Secondary Disabled', color: 'var(--text-secondary-disabled)' },
    { variableType: 'Text', level: 'Secondary Inverse', color: 'var(--text-secondary-inverse)' },
    { variableType: 'Text', level: 'Tertiary', color: 'var(--text-tertiary)' },
    { variableType: 'Text', level: 'Tertiary Hover', color: 'var(--text-tertiary-hover)' },
    { variableType: 'Text', level: 'Tertiary Active', color: 'var(--text-tertiary-active)' },
    { variableType: 'Text', level: 'Tertiary Disabled', color: 'var(--text-tertiary-disabled)' },
    { variableType: 'Text', level: 'Tertiary Inverse', color: 'var(--text-tertiary-inverse)' },
    { variableType: 'Surface', level: 'Primary', color: 'var(--surface-primary)' },
    { variableType: 'Surface', level: 'Secondary', color: 'var(--surface-secondary)' },
    { variableType: 'Surface', level: 'Tertiary', color: 'var(--surface-tertiary)' },
    { variableType: 'Surface', level: 'Inverse', color: 'var(--surface-inverse)' },
    { variableType: 'Surface', level: 'System Safe', color: 'var(--surface-system-safe)' },
    { variableType: 'Surface', level: 'System Warn', color: 'var(--surface-system-warn)' },
    { variableType: 'Surface', level: 'System Danger', color: 'var(--surface-system-danger)' },
    { variableType: 'Button', level: 'Primary Default', color: 'var(--button-primary-text-default)' },
    { variableType: 'Button', level: 'Primary Hover', color: 'var(--button-primary-text-hover)' },
    { variableType: 'Button', level: 'Primary Active', color: 'var(--button-primary-text-active)' },
    { variableType: 'Button', level: 'Primary Disabled', color: 'var(--button-primary-text-disabled)' },
    { variableType: 'Button', level: 'Primary Inverse', color: 'var(--button-primary-text-inverse)' },
    { variableType: 'Button', level: 'Secondary Default', color: 'var(--button-secondary-text-default)' },
    { variableType: 'Button', level: 'Secondary Hover', color: 'var(--button-secondary-text-hover)' },
    { variableType: 'Button', level: 'Secondary Active', color: 'var(--button-secondary-text-active)' },
    { variableType: 'Button', level: 'Secondary Disabled', color: 'var(--button-secondary-text-disabled)' },
    { variableType: 'Button', level: 'Secondary Inverse', color: 'var(--button-secondary-text-inverse)' },
    { variableType: 'Button', level: 'Tertiary Default', color: 'var(--button-tertiary-text-default)' },
    { variableType: 'Button', level: 'Tertiary Hover', color: 'var(--button-tertiary-text-hover)' },
    { variableType: 'Button', level: 'Tertiary Active', color: 'var(--button-tertiary-text-active)' },
    { variableType: 'Button', level: 'Tertiary Disabled', color: 'var(--button-tertiary-text-disabled)' },
    { variableType: 'Button', level: 'Tertiary Inverse', color: 'var(--button-tertiary-text-inverse)' },
    { variableType: 'Button', level: 'Primary Surface Default', color: 'var(--button-primary-surface-default)' },
    { variableType: 'Button', level: 'Primary Surface Hover', color: 'var(--button-primary-surface-hover)' },
    { variableType: 'Button', level: 'Primary Surface Active', color: 'var(--button-primary-surface-active)' },
    { variableType: 'Button', level: 'Primary Surface Disabled', color: 'var(--button-primary-surface-disabled)' },
    { variableType: 'Button', level: 'Primary Surface Inverse', color: 'var(--button-primary-surface-inverse)' },
    { variableType: 'Button', level: 'Secondary Surface Default', color: 'var(--button-secondary-surface-default)' },
    { variableType: 'Button', level: 'Secondary Surface Hover', color: 'var(--button-secondary-surface-hover)' },
    { variableType: 'Button', level: 'Secondary Surface Active', color: 'var(--button-secondary-surface-active)' },
    { variableType: 'Button', level: 'Secondary Surface Disabled', color: 'var(--button-secondary-surface-disabled)' },
    { variableType: 'Button', level: 'Secondary Surface Inverse', color: 'var(--button-secondary-surface-inverse)' },
    { variableType: 'Button', level: 'Tertiary Surface Default', color: 'var(--button-tertiary-surface-default)' },
    { variableType: 'Button', level: 'Tertiary Surface Hover', color: 'var(--button-tertiary-surface-hover)' },
    { variableType: 'Button', level: 'Tertiary Surface Active', color: 'var(--button-tertiary-surface-active)' },
    { variableType: 'Button', level: 'Tertiary Surface Disabled', color: 'var(--button-tertiary-surface-disabled)' },
    { variableType: 'Button', level: 'Tertiary Surface Inverse', color: 'var(--button-tertiary-surface-inverse)' }
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
