import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useThemeColor } from '@/hooks/useThemeColor';

type DividerProps = {
  style?: any;
};

export function Divider({ style }: DividerProps) {
  const borderColor = useThemeColor({}, 'border');

  return (
    <View style={[styles.divider, { backgroundColor: borderColor }, style]} />
  );
}

const styles = StyleSheet.create({
  divider: {
    height: 1,
    width: '100%',
    marginVertical: 16,
  },
});