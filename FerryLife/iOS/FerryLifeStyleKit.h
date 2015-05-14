//
//  FerryLifeStyleKit.h
//  Build with Reactive Native
//
//  Created by Mars on 2015-05-14.
//  Copyright (c) 2015 Mars Hall. All rights reserved.
//
//  Generated by PaintCode (www.paintcodeapp.com)
//

#import <Foundation/Foundation.h>
#import <UIKit/UIKit.h>


@interface FerryLifeStyleKit : NSObject

// iOS Controls Customization Outlets
@property(strong, nonatomic) IBOutletCollection(NSObject) NSArray* terminalMarkerTargets;
@property(strong, nonatomic) IBOutletCollection(NSObject) NSArray* disabledTerminalMarkerTargets;
@property(strong, nonatomic) IBOutletCollection(NSObject) NSArray* hiddenTerminalMarkerTargets;
@property(strong, nonatomic) IBOutletCollection(NSObject) NSArray* selectedTerminalMarkerTargets;

// Colors
+ (UIColor*)water;
+ (UIColor*)land;
+ (UIColor*)bright;
+ (UIColor*)dark;
+ (UIColor*)vividWater;
+ (UIColor*)disabled;
+ (UIColor*)disabledAccent;

// Drawing Methods
+ (void)drawFerryMap;

// Generated Images
+ (UIImage*)imageOfTerminalMarker;
+ (UIImage*)imageOfDisabledTerminalMarker;
+ (UIImage*)imageOfHiddenTerminalMarker;
+ (UIImage*)imageOfSelectedTerminalMarker;

@end
