//
//  MapView.h
//  FerryLife
//
//  Created by Mars Hall on 2015-05-12.
//  Copyright (c) 2015 Mars Hall. All rights reserved.
//

#import "RCTBridgeModule.h"

#import <UIKit/UIKit.h>
#import "FerryLifeStyleKit.h"

@protocol FerryMapViewDelegate <NSObject>

- (void)ferryMapViewDidSelectTerminal:(NSString*)name;

@end

@interface FerryMapView : UIView<RCTBridgeModule>

@property (nonatomic, weak) id <FerryMapViewDelegate> delegate;
@property (nonatomic) int terminalMarkerSize;
@property (nonatomic, strong) NSDictionary* terminalMarkers;
@property (nonatomic, strong) NSString* selectedTerminal;

@end
