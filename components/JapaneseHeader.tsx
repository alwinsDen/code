import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { ThemedText } from './ThemedText';
import { useThemeColor } from '@/hooks/useThemeColor';

type JapaneseHeaderProps = {
  title: string;
  subtitle?: string;
  vertical?: boolean;
};

export function JapaneseHeader({ title, subtitle, vertical = false }: JapaneseHeaderProps) {
  const accentColor = useThemeColor({}, 'tint');
  
  return (
    <View style={[styles.container, vertical && styles.vertical]}>
      <View style={styles.titleContainer}>
        <ThemedText type="japaneseTitle">{title}</ThemedText>
        {subtitle && (
          <ThemedText 
            type="japaneseSubtitle" 
            style={[styles.subtitle, { color: accentColor }]}
          >
            {subtitle}
          </ThemedText>
        )}
      </View>
      <Image 
        source={require('@/assets/images/japanese-logo.png')} 
        style={styles.logo} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 24,
    paddingHorizontal: 16,
  },
  vertical: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: 12,
  },
  titleContainer: {
    flexDirection: 'column',
  },
  subtitle: {
    marginTop: 4,
  },
  logo: {
    width: 48,
    height: 48,
  },
});