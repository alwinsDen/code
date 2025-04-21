import React from 'react';
import { ScrollView, StyleSheet, Image, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

import { ThemedText } from '@/components/ThemedText';
import { JapaneseHeader } from '@/components/JapaneseHeader';
import { Card } from '@/components/Card';
import { Divider } from '@/components/Divider';
import { useThemeColor } from '@/hooks/useThemeColor';

export default function AboutScreen() {
  const tintColor = useThemeColor({}, 'tint');
  
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <JapaneseHeader 
          title="私たちについて" 
          subtitle="About Us"
        />
        
        <View style={styles.profileSection}>
          <Image 
            source={require('@/assets/images/japanese-logo.png')}
            style={styles.profileImage}
          />
          <ThemedText type="japaneseTitle" style={styles.profileName}>
            和のデザイン
          </ThemedText>
          <ThemedText type="japanese" style={styles.profileDescription}>
            日本の伝統的なデザインと現代のミニマリズムを融合させた、シンプルで美しいデザインを提供しています。
          </ThemedText>
        </View>
        
        <Divider />
        
        <View style={styles.section}>
          <ThemedText type="japaneseSubtitle" style={{ color: tintColor }}>
            私たちの理念
          </ThemedText>
          <ThemedText type="japanese" style={styles.sectionSubtitle}>
            Our Philosophy
          </ThemedText>
          
          <Card>
            <View style={styles.philosophyItem}>
              <View style={[styles.iconCircle, { backgroundColor: tintColor }]}>
                <Ionicons name="leaf-outline" size={24} color="white" />
              </View>
              <View style={styles.philosophyText}>
                <ThemedText type="japaneseSubtitle">
                  シンプルさ
                </ThemedText>
                <ThemedText type="japanese" style={styles.philosophyDescription}>
                  余計なものを削ぎ落とし、本質的な美しさを追求します。
                </ThemedText>
              </View>
            </View>
          </Card>
          
          <Card>
            <View style={styles.philosophyItem}>
              <View style={[styles.iconCircle, { backgroundColor: tintColor }]}>
                <Ionicons name="water-outline" size={24} color="white" />
              </View>
              <View style={styles.philosophyText}>
                <ThemedText type="japaneseSubtitle">
                  調和
                </ThemedText>
                <ThemedText type="japanese" style={styles.philosophyDescription}>
                  自然との調和を大切にし、持続可能なデザインを心がけています。
                </ThemedText>
              </View>
            </View>
          </Card>
          
          <Card>
            <View style={styles.philosophyItem}>
              <View style={[styles.iconCircle, { backgroundColor: tintColor }]}>
                <Ionicons name="brush-outline" size={24} color="white" />
              </View>
              <View style={styles.philosophyText}>
                <ThemedText type="japaneseSubtitle">
                  伝統と革新
                </ThemedText>
                <ThemedText type="japanese" style={styles.philosophyDescription}>
                  日本の伝統的な美意識を大切にしながら、新しい表現方法を探求します。
                </ThemedText>
              </View>
            </View>
          </Card>
        </View>
        
        <Divider />
        
        <View style={styles.section}>
          <ThemedText type="japaneseSubtitle" style={{ color: tintColor }}>
            お問い合わせ
          </ThemedText>
          <ThemedText type="japanese" style={styles.sectionSubtitle}>
            Contact Us
          </ThemedText>
          
          <View style={styles.contactInfo}>
            <View style={styles.contactItem}>
              <Ionicons name="mail-outline" size={24} color={tintColor} />
              <ThemedText type="japanese" style={styles.contactText}>
                info@wadesign.jp
              </ThemedText>
            </View>
            
            <View style={styles.contactItem}>
              <Ionicons name="call-outline" size={24} color={tintColor} />
              <ThemedText type="japanese" style={styles.contactText}>
                03-1234-5678
              </ThemedText>
            </View>
            
            <View style={styles.contactItem}>
              <Ionicons name="location-outline" size={24} color={tintColor} />
              <ThemedText type="japanese" style={styles.contactText}>
                東京都渋谷区〇〇町1-2-3
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
  profileSection: {
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 24,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 16,
  },
  profileName: {
    marginBottom: 8,
    textAlign: 'center',
  },
  profileDescription: {
    textAlign: 'center',
    paddingHorizontal: 16,
    lineHeight: 24,
  },
  section: {
    marginBottom: 24,
    paddingHorizontal: 16,
  },
  sectionSubtitle: {
    marginBottom: 16,
    opacity: 0.7,
  },
  philosophyItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconCircle: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  philosophyText: {
    flex: 1,
  },
  philosophyDescription: {
    marginTop: 4,
    opacity: 0.7,
    lineHeight: 20,
  },
  contactInfo: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 8,
    padding: 16,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  contactText: {
    marginLeft: 16,
  },
});