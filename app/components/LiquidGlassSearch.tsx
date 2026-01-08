import { LinearGradient } from 'expo-linear-gradient';
import React, { useState, useEffect, useRef } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Platform, Animated } from 'react-native';
import { BlurView } from 'expo-blur';

const LiquidGlassSearch = () => {
  const [searchText, setSearchText] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  
  const glowAnim = useRef(new Animated.Value(0)).current;
  const pulseAnim = useRef(new Animated.Value(1)).current;
  const shimmerAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Continuous shimmer animation
    Animated.loop(
      Animated.sequence([
        Animated.timing(shimmerAnim, {
          toValue: 1,
          duration: 2000,
          useNativeDriver: true,
        }),
        Animated.timing(shimmerAnim, {
          toValue: 0,
          duration: 2000,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  useEffect(() => {
    Animated.parallel([
      Animated.spring(glowAnim, {
        toValue: isFocused ? 1 : 0,
        useNativeDriver: false,
        tension: 20,
        friction: 7,
      }),
      Animated.sequence([
        Animated.timing(pulseAnim, {
          toValue: isFocused ? 1.02 : 1,
          duration: 200,
          useNativeDriver: true,
        }),
      ]),
    ]).start();
  }, [isFocused]);

  const shimmerTranslate = shimmerAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [-200, 400],
  });

  const glowOpacity = glowAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 0.6],
  });

  return (
    <View style={styles.container}>
      {/* Outer Glow Effect */}
      <Animated.View 
        style={[
          styles.outerGlow,
          {
            opacity: glowOpacity,
          }
        ]}
      />

      <Animated.View 
        style={[
          styles.searchWrapper,
          {
            transform: [{ scale: pulseAnim }],
          }
        ]}
      >
        {/* Glass Container with Blur */}
        <View style={styles.glassContainer}>
          {/* Blur Background */}
          <BlurView intensity={40} tint="light" style={styles.blurLayer}>
            {/* Multi-layer Gradients for Depth */}
            <LinearGradient
              colors={[
                'rgba(255, 255, 255, 0.9)',
                'rgba(243, 219, 206, 0.6)',
                'rgba(255, 255, 255, 0.8)',
              ]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.gradientLayer1}
            />
            
            <LinearGradient
              colors={[
                'rgba(243, 219, 206, 0.4)',
                'rgba(255, 240, 230, 0.3)',
                'rgba(243, 219, 206, 0.5)',
              ]}
              start={{ x: 0.5, y: 0 }}
              end={{ x: 0.5, y: 1 }}
              style={styles.gradientLayer2}
            />

            
            
            <LinearGradient
            colors={[
                'rgba(255, 255, 255, 0.15)',
                'rgba(243, 219, 206, 0.35)',
                'rgba(76, 43, 33, 0.25)',
            ]}
            start={{ x: 1, y: 0 }}
            end={{ x: 0, y: 1 }}
            style={styles.gradientLayer3}
            />


            {/* Animated Shimmer Effect */}
            <Animated.View
              style={[
                styles.shimmerOverlay,
                {
                  transform: [{ translateX: shimmerTranslate }],
                },
              ]}
            >
              <LinearGradient
                colors={[
                  'rgba(255, 255, 255, 0)',
                  'rgba(255, 255, 255, 0.6)',
                  'rgba(255, 255, 255, 0)',
                ]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.shimmerGradient}
              />
            </Animated.View>

            {/* Content Container */}
            <View style={styles.contentContainer}>
              {/* Search Icon with Glow */}
              <View style={styles.iconContainer}>
                <View style={[styles.iconGlow, isFocused && styles.iconGlowActive]} />
                <View style={styles.searchIcon}>
                  <View style={styles.searchCircle} />
                  <View style={styles.searchHandle} />
                </View>
              </View>

              {/* Text Input */}
              <TextInput
                style={styles.input}
                placeholder="Search anything..."
                placeholderTextColor="rgba(58, 31, 22, 0.4)"
                value={searchText}
                onChangeText={setSearchText}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
              />

              {/* Action Button */}
              {searchText.length > 0 ? (
                <TouchableOpacity
                  style={styles.actionButton}
                  onPress={() => setSearchText('')}
                  activeOpacity={0.7}
                >
                  <BlurView intensity={20} tint="light" style={styles.buttonBlur}>
                    <LinearGradient
                      colors={['rgba(243, 219, 206, 0.8)', 'rgba(255, 240, 230, 0.6)']}
                      start={{ x: 0, y: 0 }}
                      end={{ x: 1, y: 1 }}
                      style={styles.buttonGradient}
                    >
                      <View style={styles.clearIcon}>
                        <View style={styles.clearLine1} />
                        <View style={styles.clearLine2} />
                      </View>
                    </LinearGradient>
                  </BlurView>
                </TouchableOpacity>
              ) : isFocused ? (
                <TouchableOpacity
                  style={styles.actionButton}
                  activeOpacity={0.7}
                >
                  <BlurView intensity={20} tint="light" style={styles.buttonBlur}>
                    <LinearGradient
                      colors={['rgba(243, 219, 206, 0.8)', 'rgba(255, 240, 230, 0.6)']}
                      start={{ x: 0, y: 0 }}
                      end={{ x: 1, y: 1 }}
                      style={styles.buttonGradient}
                    >
                      <View style={styles.micIcon}>
                        <View style={styles.micBody} />
                        <View style={styles.micBase} />
                      </View>
                    </LinearGradient>
                  </BlurView>
                </TouchableOpacity>
              ) : null}
            </View>

            {/* Inner Border Highlights */}
            <View style={styles.innerBorder} />
            
            {/* Bottom Accent Line */}
            <View style={[styles.accentLine, isFocused && styles.accentLineActive]} />
          </BlurView>

          {/* Outer Border */}
          <View style={[styles.outerBorder, isFocused && styles.outerBorderActive]} />
        </View>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 12,
    position: 'relative',
  },
  outerGlow: {
    position: 'absolute',
    top: 7.5,
    left: 5,
    right: 5,
    bottom: 7.5,
    borderRadius: 32,
    backgroundColor: 'rgba(243, 219, 206, 0.4)',
    ...Platform.select({
      ios: {
        shadowColor: '#f3dbce',
        shadowOffset: { width: 0, height: 20 },
        shadowOpacity: 0.8,
        shadowRadius: 40,
      },
      android: {
        elevation: 15,
      },
    }),
  },
  searchWrapper: {
    position: 'relative',
  },
  glassContainer: {
    borderRadius: 28,
    overflow: 'hidden',
    position: 'relative',
    ...Platform.select({
      ios: {
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.3,
        shadowRadius: 20,
      },
      android: {
        elevation: 0,
      },
    }),
  },
  blurLayer: {
    overflow: 'hidden',
    borderRadius: 28,
  },
  gradientLayer1: {
    ...StyleSheet.absoluteFillObject,
    opacity: 0.75,
  },
  gradientLayer2: {
    ...StyleSheet.absoluteFillObject,
    opacity: 0.5,
  },
  gradientLayer3: {
    ...StyleSheet.absoluteFillObject,
    opacity: 0.25,
  },
  shimmerOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 150,
    height: '100%',
  },
  shimmerGradient: {
    flex: 1,
    transform: [{ skewX: '-20deg' }],
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 20,
    position: 'relative',
    zIndex: 2,
  },
  iconContainer: {
    position: 'relative',
    marginRight: 14,
  },
  iconGlow: {
    position: 'absolute',
    top: -6,
    left: -6,
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'rgba(243, 219, 206, 0)',
    ...Platform.select({
      ios: {
        shadowColor: '#f3dbce',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0,
        shadowRadius: 12,
      },
    }),
  },
  iconGlowActive: {
    // backgroundColor: 'rgba(243, 219, 206, 0.3)',
    ...Platform.select({
      ios: {
        shadowOpacity: 0.8,
      },
    }),
  },
  searchIcon: {
    width: 24,
    height: 24,
    position: 'relative',
  },
  searchCircle: {
    width: 18,
    height: 18,
    borderRadius: 9,
    borderWidth: 3,
    borderColor: '#3a1f16',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  searchHandle: {
    width: 10,
    height: 3,
    backgroundColor: '#3a1f16',
    position: 'absolute',
    bottom: 3,
    right: 0,
    transform: [{ rotate: '45deg' }],
    borderRadius: 2,
  },
  input: {
    flex: 1,
    fontSize: 17,
    fontWeight: '600',
    color: '#3a1f16',
    letterSpacing: 0.5,
    padding: 0,
  },
  actionButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    overflow: 'hidden',
    marginLeft: 10,
    ...Platform.select({
      ios: {
        shadowColor: 'rgba(243, 219, 206, 0.5)',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.6,
        shadowRadius: 8,
      },
      android: {
        elevation: 6,
      },
    }),
  },
  buttonBlur: {
    flex: 1,
    borderRadius: 22,
    overflow: 'hidden',
  },
  buttonGradient: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.6)',
    borderRadius: 22,
  },
  clearIcon: {
    width: 18,
    height: 18,
    position: 'relative',
  },
  clearLine1: {
    position: 'absolute',
    width: 18,
    height: 2.5,
    backgroundColor: '#3a1f16',
    borderRadius: 2,
    top: 8,
    transform: [{ rotate: '45deg' }],
  },
  clearLine2: {
    position: 'absolute',
    width: 18,
    height: 2.5,
    backgroundColor: '#3a1f16',
    borderRadius: 2,
    top: 8,
    transform: [{ rotate: '-45deg' }],
  },
  micIcon: {
    width: 18,
    height: 22,
    position: 'relative',
  },
  micBody: {
    width: 12,
    height: 16,
    borderRadius: 6,
    borderWidth: 2.5,
    borderColor: '#3a1f16',
    position: 'absolute',
    top: 0,
    left: 3,
  },
  micBase: {
    width: 16,
    height: 2.5,
    backgroundColor: '#3a1f16',
    position: 'absolute',
    bottom: 0,
    left: 1,
    borderRadius: 2,
  },
  innerBorder: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 28,
    borderWidth: 1.5,
    borderColor: 'rgba(255, 255, 255, 0.8)',
    borderBottomColor: 'rgba(255, 255, 255, 0.4)',
    borderRightColor: 'rgba(255, 255, 255, 0.4)',
    pointerEvents: 'none',
  },
  accentLine: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 3,
    backgroundColor: 'rgba(243, 219, 206, 0.5)',
    ...Platform.select({
      ios: {
        shadowColor: '#f3dbce',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.7,
        shadowRadius: 10,
      },
    }),
  },
  accentLineActive: {
    backgroundColor: 'rgba(243, 219, 206, 0.9)',
    height: 4,
    ...Platform.select({
      ios: {
        shadowOpacity: 1,
        shadowRadius: 15,
      },
    }),
  },
  outerBorder: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 28,
    borderWidth: 1,
    borderColor: 'rgba(243, 219, 206, 0.3)',
    borderTopColor: 'rgba(255, 255, 255, 0.6)',
    borderLeftColor: 'rgba(255, 255, 255, 0.5)',
    pointerEvents: 'none',
  },
  outerBorderActive: {
    borderColor: 'rgba(243, 219, 206, 0.6)',
  },
});

export default LiquidGlassSearch;