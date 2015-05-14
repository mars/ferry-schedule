//
//  MapViewManager.m
//  FerryLife
//
//  Created by Mars Hall on 2015-05-12.
//  Copyright (c) 2015 Mars Hall. All rights reserved.
//

#import "FerryMapViewManager.h"
#import "FerryMapView.h"

#import "RCTBridge.h"
#import "RCTEventDispatcher.h"

@implementation FerryMapViewManager

RCT_EXPORT_MODULE();

- (UIView *)view
{
  FerryMapView* ferryMapView = [[FerryMapView alloc] init];
  ferryMapView.delegate = self;
  return ferryMapView;
}

-(void)ferryMapViewDidSelectTerminal:(NSString*)name
{
  [self.bridge.eventDispatcher sendDeviceEventWithName:@"ferryTerminalSelected"
                                                  body:@{@"name": name}];
}

@end
