import React from 'react';
import { ScrollView, StyleSheet, Image, View, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { JapaneseHeader } from '@/components/JapaneseHeader';
import { Card } from '@/components/Card';
import { Divider } from '@/components/Divider';
import { useThemeColor } from '@/hooks/useThemeColor';

export default function HomeScreen() {
  const tintColor = useThemeColor({}, 'tint');
  const secondaryColor = useThemeColor({}, 'secondary');
  
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <JapaneseHeader 
          title="和のデザイン" 
          subtitle="Japanese Design"
        />
        
        <View style={styles.heroContainer}>
          <Image 
            source={require('@/assets/images/japanese-wave.png')}
            style={styles.heroImage}
            resizeMode="cover"
          />
          <View style={styles.heroOverlay}>
            <ThemedText type="japaneseTitle" style={styles.heroText}>
              シンプルな美しさ
            </ThemedText>
            <ThemedText type="japanese" style={styles.heroSubtext}>
              Simple Beauty
            </ThemedText>
          </View>
        </View>
        
        <View style={styles.section}>
          <ThemedText type="japaneseSubtitle" style={{ color: tintColor }}>
            最新の記事
          </ThemedText>
          <ThemedText type="japanese" style={styles.sectionSubtitle}>
            Latest Articles
          </ThemedText>
          
          <Card>
            <View style={styles.cardContent}>
              <Image 
                source={require('@/assets/images/japanese-mountain.png')}
                style={styles.cardImage}
              />
              <View style={styles.cardTextContainer}>
                <ThemedText type="japaneseSubtitle">
                  山の風景
                </ThemedText>
                <ThemedText type="japanese" style={styles.cardDescription}>
                  日本の美しい山々と自然の景色
                </ThemedText>
              </View>
            </View>
          </Card>
          
          <Card>
            <View style={styles.cardContent}>
              <Image 
                source={require('@/assets/images/japanese-cherry.png')}
                style={styles.cardImage}
              />
              <View style={styles.cardTextContainer}>
                <ThemedText type="japaneseSubtitle">
                  桜の季節
                </ThemedText>
                <ThemedText type="japanese" style={styles.cardDescription}>
                  春の訪れを告げる美しい桜の花
                </ThemedText>
              </View>
            </View>
          </Card>
        </View>
        
        <Divider />
        
        <View style={styles.section}>
          <ThemedText type="japaneseSubtitle" style={{ color: secondaryColor }}>
            カテゴリー
          </ThemedText>
          <ThemedText type="japanese" style={styles.sectionSubtitle}>
            Categories
          </ThemedText>
          
          <View style={styles.categoriesContainer}>
            <Pressable style={styles.categoryButton}>
              <Ionicons name="leaf-outline" size={24} color={tintColor} />
              <ThemedText type="japanese">自然</ThemedText>
            </Pressable>
            
            <Pressable style={styles.categoryButton}>
              <Ionicons name="restaurant-outline" size={24} color={tintColor} />
              <ThemedText type="japanese">料理</ThemedText>
            </Pressable>
            
            <Pressable style={styles.categoryButton}>
              <Ionicons name="brush-outline" size={24} color={tintColor} />
              <ThemedText type="japanese">芸術</ThemedText>
            </Pressable>
            
            <Pressable style={styles.categoryButton}>
              <Ionicons name="book-outline" size={24} color={tintColor} />
              <ThemedText type="japanese">文学</ThemedText>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    paddingBottom: 40,
  },
  heroContainer: {
    height: 200,
    marginBottom: 24,
    borderRadius: 8,
    overflow: 'hidden',
    position: 'relative',
  },
  heroImage: {
    width: '100%',
    height: '100%',
  },
  heroOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 16,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  heroText: {
    color: 'white',
  },
  heroSubtext: {
    color: 'white',
    marginTop: 4,
  },
  section: {
    marginBottom: 24,
    paddingHorizontal: 16,
  },
  sectionSubtitle: {
    marginBottom: 16,
    opacity: 0.7,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardImage: {
    width: 80,
    height: 80,
    borderRadius: 4,
    marginRight: 16,
  },
  cardTextContainer: {
    flex: 1,
  },
  cardDescription: {
    marginTop: 4,
    opacity: 0.7,
  },
  categoriesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  categoryButton: {
    width: '48%',
    padding: 16,
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 8,
    marginBottom: 12,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 8,
  },
});