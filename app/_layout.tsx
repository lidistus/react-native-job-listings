import { useState } from 'react';
import { Stack } from 'expo-router/stack';
import * as SystemUI from 'expo-system-ui';

export default function Layout() {


  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}
