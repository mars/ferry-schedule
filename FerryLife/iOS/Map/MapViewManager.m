//
//  MapViewManager.m
//  FerryLife
//
//  Created by Mars Hall on 2015-05-12.
//  Copyright (c) 2015 Facebook. All rights reserved.
//

#import "MapViewManager.h"
#import "MapView.h"

@implementation MapViewManager

RCT_EXPORT_MODULE();

- (UIView *)view
{
  return [[MapView alloc] init];
}

@end
