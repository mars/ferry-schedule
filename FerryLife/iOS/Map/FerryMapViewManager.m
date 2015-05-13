//
//  MapViewManager.m
//  FerryLife
//
//  Created by Mars Hall on 2015-05-12.
//  Copyright (c) 2015 Mars Hall. All rights reserved.
//

#import "FerryMapViewManager.h"
#import "FerryMapView.h"

@implementation FerryMapViewManager

RCT_EXPORT_MODULE();

- (UIView *)view
{
  return [[FerryMapView alloc] init];
}

@end
