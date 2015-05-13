//
//  MapView.m
//  FerryLife
//
//  Created by Mars Hall on 2015-05-12.
//  Copyright (c) 2015 Mars Hall. All rights reserved.
//

#import "MapView.h"


@implementation MapView

- (instancetype)initWithFrame:(CGRect)frame
{
  self = [super initWithFrame:frame];
  if (self) {
    self.terminalMarkerSize = 44;
    self.terminalMarkers = @{
                             @"tiburon": [NSValue valueWithCGPoint:CGPointMake(124, 162)],
                             @"sf-pier-41": [NSValue valueWithCGPoint:CGPointMake(188, 291)],
                             @"sf-ferry-bldg": [NSValue valueWithCGPoint:CGPointMake(231, 312)]
                             };
  }
  return self;
}

- (void)drawRect:(CGRect)rect {
  [FerryLifeStyleKit drawFerryMap];
  
  UIImage* terminalMarker = [FerryLifeStyleKit imageOfTerminalMarker];
  NSValue* marker;
  for (NSString* terminal in self.terminalMarkers) {
    marker = [self.terminalMarkers objectForKey:terminal];
    [terminalMarker drawAtPoint:[marker CGPointValue]];
  }
}

- (void)touchesEnded:(NSSet *)touches
           withEvent:(UIEvent *)event {
  UITouch *touch = [touches anyObject];
  CGPoint currentLocation = [touch locationInView:self];
  NSString* foundTerminal = [self findTerminalMarkerWithPoint:currentLocation];
  
  NSLog(@"touched '%@'", foundTerminal);
}

- (NSString*)findTerminalMarkerWithPoint:(CGPoint)refPoint
{
  NSValue* marker;
  CGPoint markerPoint;
  NSString* foundTerminal;
  BOOL didFind = false;
  for (NSString* terminal in self.terminalMarkers) {
    marker = [self.terminalMarkers objectForKey:terminal];
    markerPoint = [marker CGPointValue];
    didFind =
      markerPoint.x <= refPoint.x &&
      markerPoint.x + self.terminalMarkerSize >= refPoint.x &&
      markerPoint.y <= refPoint.y &&
      markerPoint.y + self.terminalMarkerSize >= refPoint.y;
    
    if (didFind) {
      foundTerminal = terminal;
      break;
    }
  }
  return foundTerminal;
}

@end
