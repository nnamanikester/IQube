import React from "react";
import {
  ScrollView,
  StyleSheet,
  RefreshControl,
  View,
  SafeAreaView,
  ViewProps,
  KeyboardAvoidingView,
} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { useSelector } from "react-redux";
import { Clickable } from "../Clickable";
import { Icon } from "../Icon";

export interface LayoutProps extends ViewProps {
  /**
   * Index of the item to float on the top of the screen onScroll.
   */
  itemsToFloat?: number[],
  /**
   * If `true`, the element layout won't be Scrollable. Default id `false`.
   */
  noScroll?: boolean,
  /**
   * Invoked when a the user scrolls to the bottom of the scrollview
   */
  onEndReached?: () => void | undefined,
  /**
   * Invoked when the view start refreshing
   */
  onRefresh?: () => void | undefined,
  /**
   * Whether the view should be indicating an active refresh
   */
  refreshing?: boolean,
}

export const Layout: React.FC<LayoutProps> = ({
  children,
  itemsToFloat=[],
  style={},
  noScroll=false,
  onEndReached = () => {},
  onRefresh = () => {},
  refreshing = false,
}) => {
  const [showScrollToTop, setShowScrollToTop] = React.useState(false);
  const colors = useSelector((state: any) => state.colors);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    fab: {
      position: "absolute",
      width: "100%",
      height: 40,
      elevation: 5,
      backgroundColor: `${colors.primary}90`,
      alignItems: "center",
      justifyContent: "center",
      bottom: 0,
    },
  });

  const isCloseToBottom = ({
    layoutMeasurement,
    contentOffset,
    contentSize,
  }): boolean => {
    const paddingToBottom = 0;
    return (
      layoutMeasurement.height + contentOffset.y >=
      contentSize.height - paddingToBottom
    );
  };

  const shouldShowScrollToTop = ({ contentOffset }): boolean => {
    if (contentOffset.y > 5970) {
      return true;
    }
    return false;
  };

  const scroll: any = React.useRef(null).current;

  return (
    <>
      {noScroll ? (
        <SafeAreaView style={{ flex: 1 }}>
          <KeyboardAvoidingView style={{ flex: 1 }}>
            <LinearGradient
              style={[styles.container, style]}
              colors={['#c0faf7', '#f9e8e8', '#faf9f9', '#f8eac5']}
              >
              <View style={[styles.container, style]}>
                  {children}
              </View>
            </LinearGradient>
          </KeyboardAvoidingView>
        </SafeAreaView>
      ) : (
        <>
          <SafeAreaView style={{ flex: 1 }}>
            <KeyboardAvoidingView style={{ flex: 1 }}>
              <LinearGradient
                style={[styles.container, style]}
                colors={['#c0faf7', '#f9e8e8', '#faf9f9', '#f8eac5']}
              >
                <ScrollView
                  ref={scroll}
                  refreshControl={
                    <RefreshControl
                      colors={[colors.primary]}
                      onRefresh={onRefresh}
                      refreshing={refreshing}
                      progressBackgroundColor="#fff"
                    />
                  }
                  scrollEventThrottle={400}
                  stickyHeaderIndices={[...itemsToFloat]}
                  showsVerticalScrollIndicator={false}
                  onScroll={({ nativeEvent }) => {
                    if (isCloseToBottom(nativeEvent)) {
                      onEndReached();
                    }
                    if (shouldShowScrollToTop(nativeEvent)) {
                      setShowScrollToTop(true);
                    } else {
                      setShowScrollToTop(false);
                    }
                  }}
                  bounces
                  style={[ styles.container, style ]}
                  >
                  {children}
                </ScrollView>
                {showScrollToTop && (
                  <Clickable
                  onClick={() => scroll?.scrollTo({ y: 0, animated: true })}
                    style={styles.fab}
                    >
                    <Icon name="md-arrow-up" color={colors.white} size={30} />
                  </Clickable>
                )}
              </LinearGradient>
            </KeyboardAvoidingView>
          </SafeAreaView>
        </>
      )}
    </>
  );
};
