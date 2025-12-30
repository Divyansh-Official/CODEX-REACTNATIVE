import { usePathname, useRouter } from 'expo-router';
import LottieView from 'lottie-react-native';
import React, { useEffect, useRef, useState } from 'react';
import {
    Animated,
    Dimensions,
    Image,
    StyleSheet,
    TouchableOpacity,
    View
} from 'react-native';

const { width } = Dimensions.get('window');
const IMAGE_SIZE = width < 380 ? 22 : width < 430 ? 26 : 30;

interface DockItem {
  title: string;
  icon: any; // require() path for unselected icon
  iconFocused?: any; // require() path for selected icon or lottie
  lottie?: any; // require() path for lottie animation
  href: string;
  screen: string;
}

interface FloatingDockProps {
  items: DockItem[];
}

const DockIcon: React.FC<{
  item: DockItem;
  isActive: boolean;
  onPress: () => void;
  index: number;
}> = ({ item, isActive, onPress, index }) => {
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const translateYAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.spring(scaleAnim, {
        toValue: isActive ? 1.1 : 1,
        useNativeDriver: true,
        friction: 5,
      }),
      Animated.spring(translateYAnim, {
        toValue: isActive ? -5 : 0,
        useNativeDriver: true,
        friction: 5,
      }),
    ]).start();
  }, [isActive]);

  const handlePressIn = () => {
    Animated.parallel([
      Animated.spring(scaleAnim, {
        toValue: 0.9,
        useNativeDriver: true,
        friction: 5,
      }),
      Animated.spring(translateYAnim, {
        toValue: 2,
        useNativeDriver: true,
        friction: 5,
      }),
    ]).start();
  };

  const handlePressOut = () => {
    Animated.parallel([
      Animated.spring(scaleAnim, {
        toValue: isActive ? 1.1 : 1,
        useNativeDriver: true,
        friction: 5,
      }),
      Animated.spring(translateYAnim, {
        toValue: isActive ? -5 : 0,
        useNativeDriver: true,
        friction: 5,
      }),
    ]).start();
  };

  const getBackgroundColor = () => {
    if (item.screen === 'index') {
      return isActive ? '#4A90E2' : 'transparent'; // Light primary color for home
    }
    return isActive ? 'rgba(255, 255, 255, 0.2)' : 'transparent';
  };

  return (
    <Animated.View
      style={[
        styles.dockItemContainer,
        {
          transform: [{ scale: scaleAnim }, { translateY: translateYAnim }],
        },
      ]}
    >
      <TouchableOpacity
        onPress={onPress}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        activeOpacity={0.7}
        style={[
          styles.dockItem,
          {
            backgroundColor: getBackgroundColor(),
          },
        ]}
      >
        {isActive && item.lottie ? (
          <LottieView
            source={item.lottie}
            autoPlay
            loop
            style={styles.lottie}
          />
        ) : isActive && item.iconFocused ? (
          <Image
            source={item.iconFocused}
            style={styles.icon}
            resizeMode="contain"
          />
        ) : (
          <Image
            source={item.icon}
            style={styles.icon}
            resizeMode="contain"
          />
        )}
      </TouchableOpacity>
    </Animated.View>
  );
};

export const FloatingDock: React.FC<FloatingDockProps> = ({ items }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [activeIndex, setActiveIndex] = useState(2); // Default to home (index 2)

  useEffect(() => {
    // Update active index based on current route
    const currentIndex = items.findIndex(
      (item) => `/${item.screen}` === pathname || (item.screen === 'index' && pathname === '/')
    );
    if (currentIndex !== -1) {
      setActiveIndex(currentIndex);
    }
  }, [pathname, items]);

  const handlePress = (item: DockItem, index: number) => {
    setActiveIndex(index);
    if (item.screen === 'index') {
      router.push('/');
    } else {
      router.push(`/${item.screen}` as any);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.dock}>
        {items.map((item, index) => (
          <DockIcon
            key={index}
            item={item}
            isActive={activeIndex === index}
            onPress={() => handlePress(item, index)}
            index={index}
          />
        ))}
      </View>
    </View>
  );
};

// Example Usage Component
export function FloatingDockDemo(): React.JSX.Element {
  const links: DockItem[] = [
    {
      title: 'Profile',
      icon: require('../../assets/icons/profile_unselected.png'),
      lottie: require('../../assets/lottie/male_user_lottie.json'),
      href: 'profile',
      screen: 'profile',
    },
    {
      title: 'Favourite',
      icon: require('../../assets/icons/favourite_unselected.png'),
      lottie: require('../../assets/lottie/favourite_lottie.json'),
      href: 'favourite',
      screen: 'favourite',
    },
    {
      title: 'Home',
      icon: require('../../assets/images/codex_unselected.png'),
      iconFocused: require('../../assets/images/codex_selected.png'),
      href: 'index',
      screen: 'index',
    },
    {
      title: 'Search',
      icon: require('../../assets/icons/search_unselected.png'),
      lottie: require('../../assets/lottie/search_lottie01.json'),
      href: 'search',
      screen: 'search',
    },
    {
      title: 'Setting',
      icon: require('../../assets/icons/setting_unselected.png'),
      lottie: require('../../assets/lottie/setting_lottie.json'),
      href: 'setting',
      screen: 'setting',
    },
  ];

  return (
    <View style={styles.demo}>
      <FloatingDock items={links} />
    </View>
  );
}

const styles = StyleSheet.create({
  demo: {
    flex: 1,
  },
  container: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    zIndex: 1000,
  },
  dock: {
    flexDirection: 'row',
    backgroundColor: '#638ECB',
    borderRadius: 50,
    height: 60,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 10,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 28,
  },
  dockItemContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dockItem: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  icon: {
    width: IMAGE_SIZE,
    height: IMAGE_SIZE,
  },
  lottie: {
    width: IMAGE_SIZE + 10,
    height: IMAGE_SIZE + 10,
  },
});

export default FloatingDock;