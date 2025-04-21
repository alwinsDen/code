import React from 'react';
import { ScrollView, StyleSheet, Image, View, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ThemedText } from '@/components/ThemedText';
import { JapaneseHeader } from '@/components/JapaneseHeader';
import { Divider } from '@/components/Divider';
import { useThemeColor } from '@/hooks/useThemeColor';

const { width } = Dimensions.get('window');
const imageSize = (width - 48) / 2;

export default function GalleryScreen() {
  const tintColor = useThemeColor({}, 'tint');
  
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <JapaneseHeader 
          title="ギャラリー" 
          subtitle="Gallery"
          vertical={true}
        />
        
        <View style={styles.section}>
          <ThemedText type="japaneseSubtitle" style={{ color: tintColor }}>
            日本の風景
          </ThemedText>
          <ThemedText type="japanese" style={styles.sectionSubtitle}>
            Japanese Landscapes
          </ThemedText>
          
          <View style={styles.galleryGrid}>
            <View style={styles.galleryItem}>
              <Image 
                source={require('@/assets/images/japanese-mountain.png')}
                style={styles.galleryImage}
              />
              <ThemedText type="japanese" style={styles.imageCaption}>
                富士山
              </ThemedText>
            </View>
            
            <View style={styles.galleryItem}>
              <Image 
                source={require('@/assets/images/japanese-wave.png')}
                style={styles.galleryImage}
              />
              <ThemedText type="japanese" style={styles.imageCaption}>
                波模様
              </ThemedText>
            </View>
            
            <View style={styles.galleryItem}>
              <Image 
                source={require('@/assets/images/japanese-cherry.png')}
                style={styles.galleryImage}
              />
              <ThemedText type="japanese" style={styles.imageCaption}>
                桜の花
              </ThemedText>
            </View>
            
            <View style={styles.galleryItem}>
              <Image 
                source={require('@/assets/images/japanese-logo.png')}
                style={styles.galleryImage}
              />
              <ThemedText type="japanese" style={styles.imageCaption}>
                和のロゴ
              </ThemedText>
            </View>
          </View>
        </View>
        
        <Divider />
        
        <View style={styles.section}>
          <ThemedText type="japaneseSubtitle" style={{ color: tintColor }}>
            特集作品
          </ThemedText>
          <ThemedText type="japanese" style={styles.sectionSubtitle}>
            Featured Work
          </ThemedText>
          
          <View style={styles.featuredContainer}>
            <Image 
              source={require('@/assets/images/japanese-mountain.png')}
              style={styles.featuredImage}
              resizeMode="cover"
            />
            <View style={styles.featuredTextContainer}>
              <ThemedText type="japaneseSubtitle">
                日本の山々
              </ThemedText>
              <ThemedText type="japanese" style={styles.featuredDescription}>
                日本の山々は四季折々の美しさを見せてくれます。春には新緑、夏には深い緑、秋には紅葉、冬には雪景色と、一年を通して様々な表情を楽しむことができます。
              </ThemedText>
            </View>
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
  section: {
    marginBottom: 24,
    paddingHorizontal: 16,
  },
  sectionSubtitle: {
    marginBottom: 16,
    opacity: 0.7,
  },
  galleryGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  galleryItem: {
    width: imageSize,
    marginBottom: 16,
  },
  galleryImage: {
    width: imageSize,
    height: imageSize,
    borderRadius: 4,
  },
  imageCaption: {
    marginTop: 8,
    textAlign: 'center',
  },
  featuredContainer: {
    borderRadius: 8,
    overflow: 'hidden',
  },
  featuredImage: {
    width: '100%',
    height: 200,
  },
  featuredTextContainer: {
    padding: 16,
    backgroundColor: 'rgba(0,0,0,0.05)',
  },
  featuredDescription: {
    marginTop: 8,
    lineHeight: 22,
  },
});