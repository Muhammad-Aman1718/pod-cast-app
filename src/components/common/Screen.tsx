import React from 'react';
import {
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  View,
  StyleSheet,
} from 'react-native';

interface ScreenProps {
  children: React.ReactNode;
  scroll?: boolean; // optional prop — agar scroll chahiye ya nahi
  style?: object;
}

const Screen: React.FC<ScreenProps> = ({ children, scroll = true, style }) => {
  const Wrapper = scroll ? ScrollView : View;

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <Wrapper
        style={[styles.container, style]}
        contentContainerStyle={scroll ? styles.contentContainer : undefined}
        showsVerticalScrollIndicator={false}
      >
        {children}
      </Wrapper>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flexGrow: 1,
  },
});

export default Screen;
