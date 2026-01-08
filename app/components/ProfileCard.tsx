import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Dimensions, Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';




const { width } = Dimensions.get('window');

const WatchListStyle = ({ count, label }: { count: string, label: string }) => {
  return (
    <View style={styles.statCard}>
      <LinearGradient
        colors={['rgba(255, 255, 255, 0.15)', 'rgba(255, 255, 255, 0.05)']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.statGradient}
      >
        <Text style={styles.statCount}>{count}</Text>
        <Text className='text-xs' style={styles.statLabel}>{label}</Text>
        <View style={styles.statGlow} />
      </LinearGradient>
    </View>
  );
};

const ProfileCardImage = () => {
  return (
    <View style={styles.avatarWrapper}>
      <View style={styles.avatarContainer}>
        <LinearGradient
          colors={['rgba(255, 255, 255, 0.3)', 'rgba(255, 255, 255, 0.1)']}
          style={styles.avatarGlow}
        >
          <Image 
            source={require('../../assets/images/user_image.png')}
            style={styles.avatar}
          />
        </LinearGradient>
      </View>
    </View>
  );
};

const ProfileCard = () => {

//    const rotateXAnim = useRef(new Animated.Value(0)).current;

//   useEffect(() => {
//     Animated.loop(
//       Animated.timing(rotateXAnim, {
//         toValue: 1,
//         duration: 4000, // 1 second
//         easing: Easing.linear,
//         useNativeDriver: true,
//       })
//     ).start();
//   }, []);

//   const rotateX = rotateXAnim.interpolate({
//   inputRange: [0, 1],
//   outputRange: ['0deg', '360deg'],
// });


  return (
  //   <Animated.View
  // style={[
  //   styles.container,
  //   {
  //     transform: [
  //       { perspective: 1000 }, // 👈 REQUIRED for 3D
  //       { rotateY: rotateX }, // 👈 Rotate around X-axis
  //     ],
  //   },
  // ]}>
  <View style={styles.container}>
      {/* Avatar positioned absolutely to overlay */}
      <ProfileCardImage />

      {/* Outer Glow Effect */}
      {/* <View style={styles.outerGlow} /> */}
      
      {/* Main Glass Card */}
      <View style={styles.glassCard}>
        {/* Background Gradient Layers */}
        <LinearGradient
          colors={['rgba(243, 219, 206, 0.4)', 'rgba(243, 219, 206, 0.2)', 'rgba(243, 219, 206, 0.3)']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.backgroundGradient}
        />
        
        {/* Shimmer Effect */}
        <View style={styles.shimmerOverlay} />
        
        {/* Content */}
        <View style={styles.content}>
          {/* Profile Header with spacing for avatar */}
          <View style={styles.profileHeader}>
            {/* Empty space for overlapping avatar */}
            <View style={styles.avatarSpace} />
            
            <Text style={styles.username}>CODEX USER</Text>
            <View style={styles.statusIndicator}>
              <View style={styles.statusDot} />
              <Text style={styles.statusText}>ACTIVE</Text>
            </View>
          </View>

          {/* Stats Grid */}
          <View style={styles.statsGrid}>
            <WatchListStyle count="24" label="COMPLETED" />
            <WatchListStyle count="12" label="WATCHING" />
            <WatchListStyle count="8" label="PLANNED" />
          </View>

          {/* History Button */}
          <TouchableOpacity style={styles.historyButton} activeOpacity={0.8}>
            <LinearGradient
              colors={['rgba(243, 219, 206, 0.6)', 'rgba(243, 219, 206, 0.4)']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.buttonGradient}
            >
              <View style={styles.buttonContent}>
                <View style={styles.buttonIconLeft} />
                <Text style={styles.historyText}>H I S T O R Y</Text>
                <View style={styles.buttonIconRight} />
              </View>
              <View style={styles.buttonShine} />
            </LinearGradient>
          </TouchableOpacity>
        </View>

        {/* Border Overlay */}
        <View style={styles.borderOverlay} />
      </View>
    {/* </Animated.View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    position: 'relative',
    paddingTop: 65, // Space for half of avatar that's outside
  },
  
  // Avatar Overlay Styles
  avatarWrapper: {
    position: 'absolute',
    top: 60, // Adjust this to control how much is outside
    left: 0,
    right: 0,
    alignItems: 'center',
    zIndex: 100,
  },
  avatarContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarGlow: {
    width: 90,
    height: 90,
    borderRadius: 55,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: 'rgba(255, 255, 255, 0.5)',
    backgroundColor: 'rgba(243, 219, 206, 0.4)',
    ...Platform.select({
      ios: {
        shadowColor: '#f3dbce',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.7,
        shadowRadius: 25,
      },
      android: {
        elevation: 50,
      },
    }),
  },
  avatar: {
    width: 85,
    height: 85,
  },
  
//   outerGlow: {
//     position: 'absolute',
//     top: 15, // Adjusted to account for overlapping avatar
//     left: 15,
//     right: 15,
//     bottom: 15,
//     backgroundColor: 'rgba(243, 219, 206, 0.3)',
//     borderRadius: 30,
//     ...Platform.select({
//       ios: {
//         shadowColor: '#f3dbce',
//         shadowOffset: { width: 0, height: 15 },
//         shadowOpacity: 0.5,
//         shadowRadius: 30,
//       },
//       android: {
//         elevation: 20,
//       },
//     }),
//   },
  glassCard: {
    borderRadius: 28,
    overflow: 'hidden',
    position: 'relative',
    borderWidth: 1.5,
    borderColor: 'rgba(255, 255, 255, 0.4)',
    marginTop: 40, // Space for half of the avatar
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.12,
        shadowRadius: 24,
      },
    //   android: {
    //     elevation: 8,
    //   },
    }),
  },
  backgroundGradient: {
    ...StyleSheet.absoluteFillObject,
    opacity: 0.95,
  },
  shimmerOverlay: {
    position: 'absolute',
    top: 0,
    left: -100,
    right: 0,
    height: '100%',
    width: 100,
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    transform: [{ skewX: '-20deg' }],
  },
  borderOverlay: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 28,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.25)',
    borderTopColor: 'rgba(255, 255, 255, 0.5)',
    borderLeftColor: 'rgba(255, 255, 255, 0.3)',
    pointerEvents: 'none',
  },
  content: {
    padding: 25,
    paddingTop: 40, // Extra padding at top for avatar overlap
    position: 'relative',
    zIndex: 1,
  },
  profileHeader: {
    alignItems: 'center',
    marginBottom: 25,
  },
  avatarSpace: {
    height: 30, // Space for the overlapping portion of avatar
    marginBottom: 8,
  },
  username: {
    fontSize: 24,
    fontWeight: '900',
    color: '#3a1f16',
    letterSpacing: 3,
    marginBottom: 8,
    textShadowColor: 'rgba(255, 255, 255, 0.5)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  statusIndicator: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(76, 175, 80, 0.15)',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(76, 175, 80, 0.3)',
  },
  statusDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#4CAF50',
    marginRight: 6,
    ...Platform.select({
      ios: {
        shadowColor: '#4CAF50',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.8,
        shadowRadius: 4,
      },
    }),
  },
  statusText: {
    fontSize: 10,
    fontWeight: '700',
    color: '#4CAF50',
    letterSpacing: 1,
  },
  statsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 28,
    gap: 12,
  },
  statCard: {
    flex: 1,
    borderRadius: 18,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.3)',
  },
  statGradient: {
    padding: 7,
    alignItems: 'center',
    position: 'relative',
    // minHeight: 85,
    justifyContent: 'center',
  },
  statGlow: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 2,
    backgroundColor: 'rgba(243, 219, 206, 0.8)',
    ...Platform.select({
      ios: {
        shadowColor: '#f3dbce',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.8,
        shadowRadius: 8,
      },
    }),
  },
  statCount: {
    fontSize: 32,
    fontWeight: '900',
    color: '#3a1f16',
    marginBottom: 4,
    textShadowColor: 'rgba(255, 255, 255, 0.4)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  statLabel: {
    fontWeight: '700',
    color: '#6b4738',
    letterSpacing: 0.5,
    textTransform: 'uppercase',
  },
  historyButton: {
    borderRadius: 20,
    overflow: 'hidden',
    borderWidth: 1.5,
    opacity: 0.9,
    borderColor: 'rgba(255, 255, 255, 0.4)',
    ...Platform.select({
      ios: {
        shadowColor: '#f3dbce',
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.4,
        shadowRadius: 15,
      },
      android: {
        elevation: 50,
      },
    }),
  },
  buttonGradient: {
    height: 60,
    paddingVertical: 18,
    position: 'relative',
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    zIndex: 1,
  },
  buttonIconLeft: {
    width: 20,
    height: 2,
    backgroundColor: '#4c2b21',
    marginRight: 12,
    borderRadius: 1,
  },
  historyText: {
    fontSize: 16,
    fontWeight: '900',
    color: '#3a1f16',
    letterSpacing: 4,
    textShadowColor: 'rgba(255, 255, 255, 0.5)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  buttonIconRight: {
    width: 20,
    height: 2,
    backgroundColor: '#4c2b21',
    marginLeft: 12,
    borderRadius: 1,
  },
  buttonShine: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '40%',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,

  },
});

export default ProfileCard;