#!/usr/bin/env node

// Simple build script to work around Node.js v14 memory issues
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('Starting build process...');

try {
  // Try building with different memory settings
  const memorySettings = ['4096', '8192', '16384'];
  
  for (const memory of memorySettings) {
    console.log(`Trying with ${memory}MB memory...`);
    
    try {
      execSync(`node --max-old-space-size=${memory} node_modules/.bin/mix --production`, {
        stdio: 'inherit',
        cwd: process.cwd()
      });
      
      console.log('Build successful!');
      process.exit(0);
      
    } catch (error) {
      console.log(`Build failed with ${memory}MB memory`);
      if (memory === memorySettings[memorySettings.length - 1]) {
        throw error;
      }
    }
  }
  
} catch (error) {
  console.error('All build attempts failed:', error.message);
  process.exit(1);
}
