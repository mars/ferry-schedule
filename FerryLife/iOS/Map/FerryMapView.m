//
//  MapView.m
//  FerryLife
//
//  Created by Mars Hall on 2015-05-12.
//  Copyright (c) 2015 Mars Hall. All rights reserved.
//

#import "RCTBridge.h"

#import "FerryMapView.h"

@implementation FerryMapView

RCT_EXPORT_MODULE();

@synthesize delegate;

- (instancetype)initWithFrame:(CGRect)frame
{
  self = [super initWithFrame:frame];
  if (self) {
    // "intrinsic" is the original size of the drawing (in PaintCode)
    self.intrinsicMapWidth = 320;
    self.intrinsicMarkerSize = 44;
    // origins of markers in the original drawing (in PaintCode)
    self.terminalMarkers = @{
                             @"tiburon": [NSValue valueWithCGPoint:CGPointMake(124, 162)],
                             @"sf-pier-41": [NSValue valueWithCGPoint:CGPointMake(188, 291)],
                             @"sf-ferry-bldg": [NSValue valueWithCGPoint:CGPointMake(231, 312)]
                             };
    // scaled coordinates to be dynamically populated at render-time
    self.scaledTerminalMarkers = [[NSMutableDictionary alloc] init];
  }
  return self;
}

- (void)drawRect:(CGRect)rect {
  // scale the map & its interactions to fit the device's full width
  CGFloat displayWidth = rect.size.width;
  float scale = (displayWidth / self.intrinsicMapWidth);
  float scalePercent = scale * 100;
  NSLog(@"FerryMapView#drawRect displayWidth:%f scale:%f", displayWidth, scale);
  
  self.scaledTerminalMarkerSize = self.intrinsicMarkerSize * scale;
  
  // Since the terminal points are centered, we need to include a scaled offset to their new origin.
  float scaledOriginOffset = (self.intrinsicMarkerSize / 2) - (self.scaledTerminalMarkerSize / 2);
  
  [FerryLifeStyleKit drawFerryMapWithScalePercent:scalePercent];
  
  UIImage* terminalMarker = [FerryLifeStyleKit imageOfTerminalMarkerWithScalePercent:scalePercent];
  UIImage* selectedTerminalMarker = [FerryLifeStyleKit imageOfSelectedTerminalMarkerWithScalePercent:scalePercent];
  CGPoint marker;
  for (NSString* terminal in self.terminalMarkers) {
    marker = [[self.terminalMarkers objectForKey:terminal] CGPointValue];
    CGPoint scaledPoint = CGPointMake((marker.x * scale) - scaledOriginOffset,
                                      (marker.y * scale) - scaledOriginOffset);
    [self.scaledTerminalMarkers setObject:[NSValue valueWithCGPoint:scaledPoint]
                                   forKey:terminal];
    if (terminal == self.selectedTerminal) {
      [selectedTerminalMarker drawAtPoint:scaledPoint];
    } else {
      [terminalMarker drawAtPoint:scaledPoint];
    }
  }
}

- (void)touchesEnded:(NSSet *)touches
           withEvent:(UIEvent *)event {
  UITouch *touch = [touches anyObject];
  CGPoint currentLocation = [touch locationInView:self];
  NSString* foundTerminal = [self findTerminalMarkerWithPoint:currentLocation];
  
  if (foundTerminal) {
    self.selectedTerminal = foundTerminal;
    [self setNeedsDisplay];
    
    if (self.delegate) {
      [self.delegate ferryMapViewDidSelectTerminal:foundTerminal];
    } else {
      NSLog(@"FerryMapView: no delegate available to receive selection");
    }
  }
}

- (NSString*)findTerminalMarkerWithPoint:(CGPoint)refPoint
{
  NSValue* marker;
  CGPoint markerPoint;
  NSString* foundTerminal;
  BOOL didFind = false;
  for (NSString* terminal in self.scaledTerminalMarkers) {
    marker = [self.scaledTerminalMarkers objectForKey:terminal];
    markerPoint = [marker CGPointValue];
    didFind =
      markerPoint.x <= refPoint.x &&
      markerPoint.x + self.scaledTerminalMarkerSize >= refPoint.x &&
      markerPoint.y <= refPoint.y &&
      markerPoint.y + self.scaledTerminalMarkerSize >= refPoint.y;
    
    if (didFind) {
      foundTerminal = terminal;
      break;
    }
  }
  return foundTerminal;
}

@end
